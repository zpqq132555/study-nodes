#include <stdio.h>

int main(int argc, char const *argv[])
{
    struct A
    {
        char a;
        int b;
        char c;
    } a = {'x', 520, '0'};

    printf("size of a = %d\n", sizeof(a));
    
    return 0;
}
