#include <stdio.h>

int main(int argc, char const *argv[])
{
    int num = 1314;
    const int cnum = 520;
    const int *pc = &cnum;
    printf("cnum: %d, &cnum: %p\n", cnum, &cnum);
    printf("*pc: %d, pc: %p\n", *pc, pc);

    pc = &num;

    printf("num: %d, &num: %p\n", num, &num);
    printf("*pc: %d, pc: %p\n", *pc, pc);

    scanf("%a");
    return 0;
}
