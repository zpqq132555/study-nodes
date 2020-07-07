#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
    FILE *fp;

    if ((fp = fopen("hello.txt", "w")) == NULL)
    {
        printf("文件打开失败！\n");
        exit(EXIT_FAILURE);
    }

    printf("%ld\n", ftell(fp));
    fputc('W', fp);
    printf("%ld\n", ftell(fp));
    fputs("ld\n", fp);
    printf("%ld\n", ftell(fp));

    rewind(fp);
    fputs("OldPoint", fp);

    fclose(fp);

    return 0;
}
