cc.loader.downloader.loadSubpackage = function (name, completeCallback) {
    var rt = loadRuntime();
    rt.loadSubpackage({
        name: name,//fileName,
        success: function () {
            Promise.all(packageModuleIds[name].map((id) => {
                return System.import(id);
            })).then(() => {
                if (completeCallback) { completeCallback(); }
            }).catch((err) => {
                console.error(err);
                if (completeCallback) { completeCallback(err); }
            });
        },
        fail: function () {
            if (completeCallback) completeCallback(new Error(`Failed to load subpackage ${name}`));
        }
    })
};

if (cc.Pipeline.SubPackPipe && cc.Pipeline.SubPackPipe.prototype && cc.Pipeline.SubPackPipe.prototype.transformURL) {
    let _tempTransformUrl = cc.Pipeline.SubPackPipe.prototype.transformURL;
    cc.Pipeline.SubPackPipe.prototype.transformURL = function (url) {
        var url = _tempTransformUrl(url);
        return url.replace("subpackages/", "");
    };
}