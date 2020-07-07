#include <stdio.h>

int count = 2000;

int main()
{
    printf("Hello,World! count:%d\n", count);
    if (count--)
    {
        main();
    }
    return 0;
}
