#include <stdio.h>
#include <locale.h>

int main(int argc, char const *argv[])
{
    setlocale(LC_CTYPE,"");
    char *cBooks[] = {
        "<Ca>",
        "<Cb>",
        "<Cc>",
        "<Cd>",
        "<C Primer Plus>"
    };
    char **byOldPoint;
    char **Loves[4];

    byOldPoint = &cBooks[4];
    Loves[0] = &cBooks[0];
    Loves[1] = &cBooks[1];
    Loves[2] = &cBooks[2];

    printf("OldPoint: %s\n", *byOldPoint);
    printf("Loves:\n");
    for (int i = 0; i < 3; i++)
    {
        printf("%s\n", *Loves[i]);
    }
    
    return 0;
}
