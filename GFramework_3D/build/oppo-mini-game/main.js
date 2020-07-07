function loadJsListModules(jsList) {
    // jsList
    var promises = [];
    if (jsList) {
        jsList.forEach(function (x) {
            promises.push(prepare.loadIIFE('src/' + x));
        });
    }
    return Promise.all(promises);
}

function loadPrerequisiteModules(scripts) {

    var promises = [];
    scripts.forEach(function(script) {
        if (!script.defer) {
            promises.push(System.import(script.moduleId));
        }
    });

    return Promise.all(promises);
}

function boot () {
    var settings = window._CCSettings;

    

    function setLoadingDisplay () {
        // Loading splash scene
        var progressBar = document.querySelector('.progress-bar');
        var progressSpan = document.querySelector('.progress-bar span');
        cc.loader.onProgress = function (completedCount, totalCount, item) {
            var percent = 100 * completedCount / totalCount;
            if (progressSpan) {
                progressSpan.style.width = percent.toFixed(2) + '%';
            }
        };
        progressSpan.style.width = '0%';
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            progressBar.style.display = 'none';
        });
    }

    var onStart = function () {
        window._CCSettings = undefined;
        cc.loader.downloader._subpackages = settings.subpackages;

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);
		


        var launchScene = settings.launchScene;
        // load scene
        cc.director.loadScene(launchScene, null,
            function () {
                if (cc.sys.isBrowser) {
                    // show canvas
                    var canvas = document.getElementById('GameCanvas');
                    canvas.style.visibility = '';
                    var div = document.getElementById('GameDiv');
                    if (div) {
                        div.style.backgroundImage = '';
                    }
                }

                cc.view.setDesignResolutionSize(960, 640, 4);

                cc.loader.onProgress = null;
                console.log('Success to load scene: ' + launchScene);
            }
        );
    };

    // init assets
    cc.AssetLibrary.init({
        libraryPath: 'res/import',
        rawAssetsBase: 'res/raw-',
        rawAssets: settings.rawAssets,
        packedAssets: settings.packedAssets,
        md5AssetsMap: settings.md5AssetsMap,
        subpackages: settings.subpackages
    });

    var option = {
        id: 'GameCanvas',
        scenes: settings.scenes,
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: !false && settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
        renderPipeline: settings.renderPipeline,
    }

    // init assets
    cc.AssetLibrary.init({
        libraryPath: 'res/import',
        rawAssetsBase: 'res/raw-',
        rawAssets: settings.rawAssets,
        packedAssets: settings.packedAssets,
        md5AssetsMap: settings.md5AssetsMap,
        subpackages: settings.subpackages
    });
    if (cc.sys.isBrowser) {
        setLoadingDisplay();
    }

    option.adapter = prepare.findCanvas(option.id);

    if (cc.internal.SplashScreenWebgl) {
        cc.internal.SplashScreenWebgl.instance.main(option.adapter.canvas);
    }

    loadJsListModules(settings.jsList).then(function () {
        loadPrerequisiteModules(settings.scripts).then(function () {
            cc.game.run(option, onStart);
        })
    });
};
window.boot =  boot;

var prepare = function() {
    var settings = window._CCSettings;
    return Promise.resolve(prepare.engine ? prepare.engine() : void 0).
        then(function() {
            return loadScriptPackages(settings);
        }).
        then(function() {
            return System.import('cc');
        });
};
boot.prepare = prepare;

/**
 * Define how to prepare engine so that 'cc' is valid to import.
 */
prepare.engine = void 0;

/**
 * Define how to prepare IIFE modules.
 */
prepare.loadIIFE = void 0;

/**
 * Load all bundles. Every bundle may contain one or more named registered SystemJS modules, with no module.
 */
function loadScriptPackages(settings) {
    var loadBundlePromises = [];
    if (settings.scriptPackages) {
        for (var iScriptPackage = 0; iScriptPackage < settings.scriptPackages.length; ++iScriptPackage) {
            loadBundlePromises.push(prepare.loadIIFE(settings.scriptPackages[iScriptPackage]));
        }
    }
    return Promise.all(loadBundlePromises);
}

/**
 * Adapter: find canvas
 */
prepare.findCanvas = void 0;


// window.optConfig.disableBatchGLCommandsToNative();

// Polyfills bundle.
require("src/polyfills.bundle.js");

// Note: Implementation of `document.querySelectorAll` on OPPO, VIVO, HUAWEI is non-conforming
// that leads to misbehavior of SystemJS when setup import maps.
// We should hack here before we can require SystemJS.
(function () {
    var querySelectorAllVendor = document.querySelectorAll;
    document.querySelectorAll = function (s) {
        if (s.indexOf('systemjs-importmap') >= 0) {
            return [];
        } else {
            return querySelectorAllVendor.apply(this, arguments);
        }
    };
})();

// SystemJS support.
window.self = window;
require("src/system.bundle.js");

// Manifest file.
require('src/settings.js');

var boot = window.boot;

// For Oppo, VIVO, JSB, HUAWEI, they support CommonJS, but the modules do not have 'exports' to be required.
// In such cases, we must compile the engine and script Bundle as IIFE and
// register the engine module(which is a global variable named 'ccm') using SystemJS named register.
boot.prepare.engine = function() {
    require('src/cocos3d-runtime.js');
    System.register('cc', [], function (_export, _context) {
        return {
            setters: [],
            execute: function () {
                _export(ccm);
            }
        };
    });
};

boot.prepare.loadIIFE = function(url) {
    require(url);
};

boot.prepare.findCanvas = function (id) {
    var frame;
    var canvas;
    var container;

    container = localContainer = document.createElement('div');
    frame = localContainer.parentNode === document.body ? document.documentElement : localContainer.parentNode;
    canvas = window.__canvas;

    return { frame, canvas, container };
};

boot.prepare().
    then(function() {
        cc.macro.CLEANUP_IMAGE_CACHE = true;
        require('jsb-adapter/jsb-engine.js');
        boot();
    });

