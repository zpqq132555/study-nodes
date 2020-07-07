#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main(int argc, char const *argv[])
{
    FILE *fp;

    if ((fp = fopen("bucunzaidewenjian", "r")) == NULL)
    {
        fprintf(stderr, "出错原因是:-> %s\n", strerror(errno));
        exit(EXIT_FAILURE);
    }

    fclose(fp);
    return 0;
}
