#include <stdio.h>

void getArray(int a[10]);

void getArray(int a[10]) {
    int i;
    a[5] = 1314;
    for (int  i = 0; i < 10; i++)
    {
        printf("a[%d] = %d\n", i, a[i]);
    }
    
}

int main(int argc, char const *argv[])
{
    int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
    getArray(a);

    printf("agin:\n");
    for (int i = 0; i < 10; i++)
    {
        printf("a[%d] = %d\n", i, a[i]);
    }
    
    scanf("%a");
    return 0;
}
