#include <stdio.h>
#include <ctype.h>

int main(int argc, char const *argv[])
{
    int c;
    while ((c = getchar()) != EOF)
    {
        putchar(toupper(c));
    }
    
    return 0;
}
