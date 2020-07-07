#include <stdio.h>

int main(int argc, char const *argv[])
{
    int a,b,c,d;
    unsigned u;
    a = 12;
    b = -24;
    u = 10;
    c = a + u;
    d = b + u;
    printf("%d+%d=%d, %d+%d=%d\n",a, u, c, b, u, d);
    return 0;
}
