#include <stdio.h>

int main(int argc, char const *argv[])
{
    int i;
    printf("Please Input Score:");
    scanf("%d", &i);
    if (i >= 90) {
        printf("A\n");
    } 
    else if (i >= 80 && i < 90)
    {
        printf("B\n");
    }
    else if (i >= 70 && i < 80)
    {
        printf("C\n");
    }
    else if (i >= 60 && i < 70)
    {
        printf("D\n");
    } 
    else
    {
        printf("E\n");
    }
    scanf("%a");
    return 0;
}
