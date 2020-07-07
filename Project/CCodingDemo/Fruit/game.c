#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include <math.h>
#include <time.h>

// 函数声明
void gotxy(int x, int y);
int color(int c);
int TextColors(int i);
void drawTheGameBox();
int *add(int item[]);
int ifMove(int item[]);
void GamePlay();
void Replay();
int if2n(int x);
int ifup();
int ifdown();
int ifleft();
int ifright();
int BOXmax();
int GameFaile();
int GameWin();
int keyboardControl(int key);
void close();
void title();
void choice();
void Rabbit();
void regulation();
void explation();
void startGame();

// 定义全局变量
int step = 0;
int score = 0;
long int Time;
int BOX[4][4] = {
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0};
int tmp[4] = {0, 0, 0, 0};
HANDLE hOut;

// 获取屏幕光标位置
void gotoxy(int x, int y)
{
    COORD c;
    c.X = x;
    c.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), c);
}

// 设置文字颜色
int color(int c)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), c);
    return 0;
}

// 标题-2048
void title()
{
    color(11);
    gotoxy(19, 2);
    printf("■■■■  ■■■■  ■  ■    ■■■■ ");
    gotoxy(19, 3);
    printf("      ■  ■    ■  ■  ■    ■    ■ ");
    gotoxy(19, 4);
    printf("■■■■  ■    ■  ■  ■    ■■■■ ");
    gotoxy(19, 5);
    printf("■        ■    ■  ■■■■  ■    ■ ");
    gotoxy(19, 6);
    printf("■■■■  ■■■■      ■    ■■■■ ");
}

// 绘制小兔子
void Rabbit()
{
    color(3);
    gotoxy(64, 10);
    printf("┏-┓      ┏-┓");
    gotoxy(64, 11);
    printf("┃ ┃      ┃ ┃");
    gotoxy(64, 12);
    printf("┃ ┃      ┃ ┃");
    gotoxy(63, 13);
    printf("_┃");
    gotoxy(74, 13);
    printf(" ┃_");
    gotoxy(62, 14);
    printf("┃");
    gotoxy(76, 14);
    printf("┃");
    gotoxy(62, 15);
    printf("┃             ┃");
    gotoxy(62, 16);
    printf("┃");
    gotoxy(76, 16);
    printf("┃");
    gotoxy(62, 17);
    printf("┃             ┃");
    gotoxy(62, 18);
    printf("┗━━━━┳━━━┳━━━━┛");
    gotoxy(64, 19);
    printf("  ┏┫   ┣┓");
    gotoxy(62, 20);
    printf("——┺┻━━┻┻┹——");
    color(5);
    gotoxy(67, 13);
    printf("`~ ＇~`");
    color(4);
    gotoxy(67, 14);
    printf("○   ○");
    color(13);
    gotoxy(65, 15);
    printf("〃");
    gotoxy(74, 15);
    printf("〃");
    color(12);
    gotoxy(69, 17);
    printf("┻");
}

// 菜单选项
void choice()
{
    int n;
    int i, j = 1;
    color(13);
    gotoxy(32, 8);
    printf("挑 战 2 0 4 8");

    color(14);
    for (i = 9; i <= 20; i++)
    {
        for (j = 15; j <= 60; j++)
        {
            gotoxy(j, i);
            if (i == 9 || i == 20)
            {
                printf("=");
            }
            else if (j == 15 || j == 59)
            {
                printf("||");
            }
        }
    }

    color(12);
    gotoxy(25, 12);
    printf("1.开始游戏");
    gotoxy(40, 12);
    printf("2.游戏规则");
    gotoxy(25, 16);
    printf("3.按键说明");
    gotoxy(40, 16);
    printf("4.退出");

    color(5);
    gotoxy(21, 22);
    printf("请选择:[1 2 3 4]:[ ]\b\b");
    scanf("%d", &n);
    switch (n)
    {
    case 1:
        system("cls");
        GamePlay();
        break;
    case 2:
        regulation();
        break;
    case 3:
        explation();
        break;
    case 4:
        exit(0);
        break;
    }
}

// 绘制游戏棋盘
void drawTheGameBox()
{
    int i, j, k;
    color(14);
    for (j = 2; j <= 22; j += 5)
    {
        gotoxy(15, j);
        for (k = 1; k < 42; k++)
        {
            printf("-");
        }
        printf("\n");
    }
    for (i = 3; i < 7; i++)
    {
        gotoxy(15, i);
        printf("|         |         |         |         |");
    }
    for (i = 8; i < 12; i++)
    {
        gotoxy(15, i);
        printf("|         |         |         |         |");
    }
    for (i = 13; i < 17; i++)
    {
        gotoxy(15, i);
        printf("|         |         |         |         |");
    }
    for (i = 18; i < 22; i++)
    {
        gotoxy(15, i);
        printf("|         |         |         |         |");
    }

    color(11);
    gotoxy(16, 1);
    printf("游戏分数：%ld", score);

    color(13);
    gotoxy(41, 1);
    printf("执行步数：%d", step);

    color(10);
    gotoxy(44, 23);
    printf("已用时：%d s", time(NULL) - Time);
}

// 根据数值设置颜色
int TextColors(int number)
{
    switch (number)
    {
    case 2:
        return color(12);
        break;
    case 4:
        return color(11);
        break;
    case 8:
        return color(10);
        break;
    case 16:
        return color(14);
        break;
    case 32:
        return color(6);
        break;
    case 64:
        return color(5);
        break;
    case 128:
        return color(4);
        break;
    case 256:
        return color(3);
        break;
    case 512:
        return color(2);
        break;
    case 1024:
        return color(9);
        break;
    case 2048:
        return color(7);
        break;
    }
    return 0;
}

// 合并数字
int *add(int item[])
{
    int i, j = 0;
    int tep[4] = {0, 0, 0, 0};
    for (i = 0; i < 4; i++)
    {
        if (item[i] != 0)
        {
            tep[j++] = item[i];
        }
    }

    for (i = 0; i < 4; i++)
    {
        if (tep[i] == tep[i + 1])
        {
            tep[i] *= 2;
            tep[i + 1] = 0;
            score = score + tep[i];
        }
    }
    j = 0;
    for (i = 0; i < 4; i++)
    {
        if (tep[i] != 0)
        {
            tmp[j++] = tep[i];
        }
    }
    
    return (int *)(&tmp);
}

// 能否移动数字
int ifMove(int item[])
{
    int i = 0;
    for (i = 0; i < 3; i++)
    {
        if (item[i] != 0 && item[i] == item[i + 1])
        {
            return 1;
        }
        if (item[i] == 0 && item[i + 1] != 0)
        {
            return 1;
        }
    }
    return 0;
}

// 判断某个数是否是2的n次方
int if2n(int x)
{
    int flag = 0;
    int n;
    for (n = 0; n <= 2048; n++)
    {
        if (x == pow(2, n))
        {
            flag = 1;
        }
    }
    return flag;
}

// 判断数字能否上移
int ifup()
{
    int i, j;
    int flag = 0;
    for (j = 0; j < 4; j++)
    {
        for (i = 0; i < 3; i++)
        {
            if (if2n(BOX[i][j] + BOX[i + 1][j]) && BOX[i + 1][j])
            {
                flag = 1;
            }
        }
    }
    return flag;
}

// 判断数字能否下移
int ifdown()
{
    int i, j;
    int flag = 0;
    for (j = 0; j < 4; j++)
    {
        for (i = 3; i > 0; i--)
        {
            if ((if2n(BOX[i][j] + BOX[i - 1][j]) == 1) && BOX[i - 1][j])
            {
                flag = 1;
            }
        }
    }
    return flag;
}

// 判断数字能否左移
int ifleft()
{
    int i, j;
    int flag = 0;
    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 3; j++)
        {
            if ((if2n(BOX[i][j] + BOX[i][j + 1]) == 1) && BOX[i][j + 1])
            {
                flag = 1;
            }
        }
    }
    return flag;
}

// 判断数字能否右移
int ifright()
{
    int i, j;
    int flag = 0;
    for (i = 0; i < 4; i++)
    {
        for (j = 3; j > 0; j--)
        {
            if ((if2n(BOX[i][j] + BOX[i][j - 1]) == 1) && BOX[i][j - 1])
            {
                flag = 1;
            }
        }
    }
    return flag;
}

// 计算棋盘中的最大值
int BOXmax()
{
    int max = BOX[0][0];
    int i, j;
    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 4; j++)
        {
            if (BOX[i][j] > max)
            {
                max = BOX[i][j];
            }
        }
    }
    return max;
}

// 判断是否胜利
int GameWin()
{
    int flag = 0;
    if (BOXmax() == 2048)
    {
        system("cls");

        gotoxy(35, 17);
        color(13);
        printf("胜利啦，你真棒！！！");
        flag = 1;
    }
    return flag;
}

// 判断是否失败
int GameFaile()
{
    int flag = 0;
    int max;
    if (ifup() + ifdown() + ifleft() + ifright() == 0)
    {
        system("cls");
        color(14);
        gotoxy(34, 3);
        printf("合并出的最大数是：");
        color(11);
        gotoxy(52, 3);
        printf("%d", BOXmax());

        gotoxy(34, 17);
        color(13);
        printf("无法移动，游戏失败！");
        flag = 1;
    }
    return flag;
}

// 键盘控制移动
int keyboardControl(int key)
{
    int i = 0, j = 0;
    int *p;
    int tp[4] = {0, 0, 0, 0};
    switch (key)
    {
    case 72:
        for (i = 0; i < 4; i++)
        {
            tp[0] = BOX[0][i];
            tp[1] = BOX[1][i];
            tp[2] = BOX[2][i];
            tp[3] = BOX[3][i];

            p = add(tp);

            if (!ifMove(tp))
            {
                j++;
            }
            BOX[0][i] = p[0];
            BOX[1][i] = p[1];
            BOX[2][i] = p[2];
            BOX[3][i] = p[3];
        }
        return j != 4;
    case 80:
        j = 0;
        for (i = 0; i < 4; i++)
        {
            tp[0] = BOX[3][i];
            tp[1] = BOX[2][i];
            tp[2] = BOX[1][i];
            tp[3] = BOX[0][i];

            p = add(tp);

            if (!ifMove(tp))
            {
                j++;
            }

            BOX[3][i] = p[0];
            BOX[2][i] = p[1];
            BOX[1][i] = p[2];
            BOX[0][i] = p[3];
        }
        return j != 4;
    case 75:
        j = 0;
        for (i = 0; i < 4; i++)
        {
            tp[0] = BOX[i][0];
            tp[1] = BOX[i][1];
            tp[2] = BOX[i][2];
            tp[3] = BOX[i][3];

            p = add(tp);
            
            if (!ifMove(tp))
            {
                j++;
            }
            
            BOX[i][0] = p[0];
            BOX[i][1] = p[1];
            BOX[i][2] = p[2];
            BOX[i][3] = p[3];
        }
        return j != 4;
    case 77:
        j = 0;
        for (i = 0; i < 4; i++)
        {
            tp[0] = BOX[i][3];
            tp[1] = BOX[i][2];
            tp[2] = BOX[i][1];
            tp[3] = BOX[i][0];
            p = add(tp);

            if (!ifMove(tp))
            {
                j++;
            }
            
            BOX[i][3] = p[0];
            BOX[i][2] = p[1];
            BOX[i][1] = p[2];
            BOX[i][0] = p[3];
        }
        return j != 4;
    case 27:
        color(12);
        gotoxy(20, 23);
        printf("确定退出游戏么？（y/n）");
        char c = getch();
        if (c == 'Y' || c == 'y')
        {
            exit(0);
        }
        if (c == 'n' || c == 'N')
        {
            gotoxy(20, 23);
            printf("                     ");
        }
        break;
    default:
        return 0;
    }

}

// 开始游戏函数
void GamePlay()
{
    system("cls");
    int i = 0, j = 0;
    Time = time(NULL);
    drawTheGameBox();

    int a, b;
    srand(time(NULL));
    do
    {
        a = rand() % 4;
        b = rand() % 4;
    } while (BOX[a][b] != 0);
    if (rand() % 4 == 0)
    {
        BOX[a][b] = 4;
    }
    else
    {
        BOX[a][b] = 2;
    }

    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 4; j++)
        {
            if (BOX[i][j] == 0)
            {
                continue;
            }
            gotoxy(15 + j * 10 + 5, 2 + i * 5 + 3);
            int c = BOX[i][j];
            TextColors(c);
            printf("%d", c);
        }
    }

    while (1)
    {
        while (kbhit())
        {
            if (!keyboardControl(getch()))
            {
                continue;
            }
            drawTheGameBox();
            for (i = 0; i < 4; i++)
            {
                for (j = 0; j < 4; j++)
                {
                    if (BOX[i][j] == 0)
                    {
                        continue;
                    }
                    gotoxy(15 + j * 10 + 5, 2 + i * 5 + 3);
                    int c = BOX[i][j];
                    TextColors(c);
                    printf("%d", c);
                }
            }
            do
            {
                a = rand() % 4;
                b = rand() % 4;
            } while (BOX[a][b] != 0);
            if (rand() % 4 == 0)
            {
                BOX[a][b] = 4;
            }
            else
            {
                BOX[a][b] = 2;
            }
            gotoxy(12 + b * 10 + 5, 2 + a * 5 + 3);
            int c = BOX[a][b];
            TextColors(c);
            printf("%d", c);
            step++;
            gotoxy(0, 28);
            for (i = 0; i < 4; i++)
            {
                for (j = 0; j < 4; j++)
                {
                    printf("BOX[%d][%d] : %d\t", i, j, BOX[i][j]);
                }
                printf("\n");
                
            }
            
        }
    }

    if (GameFaile() + GameWin() != 0)
    {
        int n;
        color(12);
        gotoxy(20, 20);
        printf("重新开始！--------1");
        gotoxy(45, 20);
        printf("退出游戏！--------2");
        color(11);
        gotoxy(43, 21);
        scanf("%d", &n);
        switch (n)
        {
        case 1:
            Replay();
            break;
        case 2:
            exit(0);
            break;
        }
    }
}

// 重新开始游戏
void Replay()
{
    system("cls");
    score = 0;
    step = 0;
    memset(BOX, 0, 16 * sizeof(int));
    GamePlay();
}

// 游戏规则介绍
void regulation()
{
    int i, j = 1;
    system("cls");
    color(13);
    gotoxy(34, 3);
    printf("游戏规则");
    color(2);
    for (i = 6; i <= 18; i++)
    {
        for (j = 15; j < 70; j++)
        {
            gotoxy(j, i);
            if (i == 6 || i == 18)
            {
                printf("=");
            }
            else if (j == 15 || j == 69)
            {
                printf("||");
            }
        }
    }
    color(3);
    gotoxy(18, 7);
    printf("tip1：可以通过↑ ↓ ← →方向键来移动数字");
    color(10);
    gotoxy(18, 9);
    printf("tip2：按ESC退出游戏");
    color(14);
    gotoxy(18, 11);
    printf("tip3：选择的方向上，若有相同的数组则合并");
    color(11);
    gotoxy(18, 13);
    printf("tip4：每移动一步，空位随机出现一个2或4");
    color(4);
    gotoxy(18, 15);
    printf("tip5：棋盘被数字填满，无法进行有效移动，游戏失败！");
    color(5);
    gotoxy(18, 17);
    printf("tip6：棋盘山出现2048，游戏胜利！");
    getch();
    system("cls");
    startGame();
}

// 按键说明
void explation()
{
    color(13);
    gotoxy(20, 22);
    printf("① ↑、↓、←、→ 方向键进行游戏操作！");
    gotoxy(20, 24);
    printf("② ESC键退出游戏");
    getch();
    system("cls");
    startGame();
}

void startGame()
{
    title();
    Rabbit();
    choice();
}

int main(int argc, char const *argv[])
{
    startGame();
    return 0;
}

