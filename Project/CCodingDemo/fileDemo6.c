#include <stdio.h>
#include <stdlib.h>

#define N 4

struct Stu
{
    char name[24];
    int num;
    float score;
}stu[N], sb;

int main(int argc, char const *argv[])
{
    FILE *fp;
    int i;

    if ((fp = fopen("sorce.txt", "wb")) == NULL)
    {
        printf("打开文件失败\n");
        exit(EXIT_FAILURE);
    }

    for (i = 0; i < N; i++)
    {
        printf("请开始录入成绩（格式：姓名 学号 成绩）:\n");
        scanf("%s %d %f", stu[i].name, &stu[i].num, &stu[i].score);
    }

    fwrite(stu, sizeof(struct Stu), N, fp);
    fclose(fp);
    
    if ((fp = fopen("sorce.txt", "rb")) == NULL)
    {
        printf("打开文件失败\n");
        exit(EXIT_FAILURE);
    }

    fseek(fp, sizeof(struct Stu), SEEK_SET);
    fread(&sb, sizeof(struct Stu), 1, fp);
    printf("%s(%d)的成绩是：%.2f\n", sb.name, sb.num, sb.score);

    fclose(fp);

    return 0;
}
