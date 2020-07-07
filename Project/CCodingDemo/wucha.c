#include <stdio.h>

int main(int argc, char const *argv[])
{
    float a, b;
    a = 123456.789e5;
    b = a + 20;
    printf("%f\n", a);
    printf("%f\n", b);
    return 0;
}
