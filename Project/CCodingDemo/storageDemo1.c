#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
    int *ptr;
    int num = 123;

    ptr = (int *)malloc(sizeof(int));
    if (ptr == NULL) {
        printf("分配内存失败！\n");
        exit(1);
    }

    printf("请输入一个整数：");
    scanf("%d", ptr);

    printf("你输入的整数是：%d\n", *ptr);

    ptr = &num;
    printf("你输入的整数是：%d\n", *ptr);

    free(ptr);

    return 0;
}