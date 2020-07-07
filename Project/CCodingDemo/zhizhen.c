#include <stdio.h>

int main(int argc, char const *argv[])
{
    char a[] = "OldPoint";
    int b[] = {1, 2, 3, 4, 5,};
    float c[] = {1.1, 2.2, 3.3, 4.4, 5.5};
    char *pa = a;
    int *pb = b;
    float *pc = c;
    int len = sizeof(a) / sizeof(a[0]) - 1;
    for (int i = 0; i < len; i++)
    {
        printf("a array index: %d, value:%c\n", i, *(pa + i));
    }
    len = sizeof(b) / sizeof(b[0]);
    for (int i = 0; i < len; i++)
    {
        printf("b array index: %d, value:%d\n", i, *(pb + i));
    }
    len = sizeof(c)/ sizeof(c[0]);
    for (int i = 0; i < len; i++)
    {
        printf("c array index: %d, value:%.1f\n", i, *(pc + i));
    }
    return 0;
}
