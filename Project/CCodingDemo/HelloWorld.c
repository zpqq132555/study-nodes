#include <stdio.h>
int max(int a, int b);
int main(int argc, char const *argv[])
{
    int x,y,z;
    int max(int a, int b);
    printf("input two numbers:\n");
    scanf("%d%d", &x, &y);
    z = max(x,y);
    printf("maxmum=%d",z);
}

int max(int a, int b)
{
    return a > b ? a: b;
}
