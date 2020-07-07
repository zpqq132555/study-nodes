#include <stdio.h>

#define MAX(x, y) (((x) > (y) ? (x) : (y)))

int main(int argc, char const *argv[])
{
    int x, y;
    printf("请输入两个整数：");
    scanf("%d%d", &x, &y);
    printf("%d 是较大的那个数！\n", MAX(x, y));
    return 0;
}
