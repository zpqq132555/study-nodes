#include <stdio.h>

int main(int argc, char const *argv[])
{
    short a, b;
    a = 32767;
    b = a + 1;
    printf("%d, %d\n",a, b);
    return 0;
}
