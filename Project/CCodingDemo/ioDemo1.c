#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
    char buff[1024];

    memset(buff, '\0', sizeof(buff));

    setvbuf(stdout, buff, _IOFBF, 1024);

    fprintf(stdout, "Hello OldPoint\n");

    fflush(stdout);

    fprintf(stdout, "输入任意字符后才会显示该行字符！\n");

    getchar();

    return 0;
}
