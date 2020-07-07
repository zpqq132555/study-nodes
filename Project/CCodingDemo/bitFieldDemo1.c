#include <stdio.h>

int main(int argc, char const *argv[])
{
    int value = 1;
    while (value < 1024)
    {
        value <<= 1;
        printf("value = %d\n", value);
    }

    printf("\n------------------------\n");
    value = 1024;
    while (value > 0)
    {
        value >>= 2;
        printf("value = %d\n", value);
    }
    
    
    return 0;
}
