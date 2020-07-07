#include <stdio.h>

typedef int integer;

int main(int argc, char const *argv[])
{
    integer a;
    int b;

    a = 520;
    b = a;

    printf("a = %d, b = %d\n", a, b);
    printf("size of a = %d", sizeof(a));

    return 0;
}
