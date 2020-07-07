#include <stdio.h>

void printC();
int sum(int n);

int sum(int n) {
    int result = 0;
    do
    {
        result += n;
    } while (n-- > 0);
    return result;
}

void printC() {
    printf(" #####     ##         #    ######      #                   #   \n");
    printf("#     #     #         #    #     #                         #   \n");
    printf("#     #     #         #    #     #    ##      ######    #######\n");
    printf("#     #     #      ## #    #####       #      #    #       #   \n");
    printf("#     #     #    #   ##    #           #      #    #       #   \n");
    printf("#     #     #    #   ##    #           #      #    #       #   \n");
    printf(" #####     ###    #####    #          ###     #    #       ### \n");
    printf("\n");
}

int main(int argc, char const *argv[])
{
    int n, result;
    printf("Please Input n Number:");
    scanf("%d", &n);
    
    result = sum(n);

    printf("1+2+3+4...+(n+1)+n result :%d\n", result);
    
    scanf("%d");
    return 0;
}
