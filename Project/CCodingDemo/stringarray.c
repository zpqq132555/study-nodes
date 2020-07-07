#include <stdio.h>

int main(int argc, char const *argv[])
{
    char str[] = "I Love Coding!";
    char *target = str;
    int count = 0;
    while (*target++ != '\0')
    {
        count++;
    }
    printf("There are %d characters", count);
    scanf("%a");
    return 0;
}
