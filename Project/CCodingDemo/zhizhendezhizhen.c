#include <stdio.h>

int main(int argc, char const *argv[])
{
    int a[3][4] = {0,1};
    int *p;
    p = a;
    printf("p取的值是:%d\n", *p);
    return 0;
}
