#include <stdio.h>

#define PRICE 30;

int main(int argc, char const *argv[])
{
    printf("%d\n", sizeof(long int));
    int num, total;
    num = 10;
    total = num * PRICE;
    printf("total = %d\n", total);
    return 0;
}
