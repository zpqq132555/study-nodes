#include <stdio.h>

void quickSort(int array[], int left, int right);

void quickSort(int array[], int left, int right)
{
    int  i = left, j = right;
    int temp;
    int pivot;

    pivot = array[(left + right) / 2];
    while (i <= j)
    {
        // 从左到右找到大于等于基准点的元素
        while (array[i] < pivot)
        {
            i++;
        }
        // 从右到左找到小于等于基准点的元素
        while (array[j] > pivot)
        {
            j--;
        }
        // 如果 i <= j, 则互换
        if (i <= j)
        {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
        
    }
    
    if (left < j)
    {
        quickSort(array, left, j);
    }

    if (i < right)
    {
        quickSort(array, i, right);
    }

}

int main(int argc, char const *argv[])
{
    int array[] = {73, 108, 111, 118, 101, 70, 105, 115 ,104, 67, 46, 99, 111, 109};
    int i, length;

    length = sizeof(array) / sizeof(array[0]);
    quickSort(array, 0, length-1);

    printf("排序后的结果是：");
    for (i = 0; i < length; i++)
    {
        printf("%d ", array[i]);
    }
    printf("\n");
    
    return 0;
}
