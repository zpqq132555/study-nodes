#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char const *argv[])
{
    FILE *fp;

    if ((fp = fopen("text.txt", "wb")) == NULL)
    {
        printf("打开文件失败！\n");
        exit(EXIT_FAILURE);
    }

    fputc('8', fp);
    fputc('2', fp);
    fputc('1', fp);
    fputc('6', fp);
    fputc('5', fp);

    fclose(fp);

    return 0;
}
