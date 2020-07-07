#include <stdio.h>
#include <stdlib.h>

struct Book
{
    char title[128];
    char author[40];
    struct Book *next;
};

void getInput(struct Book *book);
void addBook(struct Book **library);
void parintLibrary(struct Book *library);
void reeaseLivrary(struct Book **library);

void getInput(struct Book *book)
{
    printf("请输入书名：");
    scanf("%s", book->title);
    printf("请输入作者：");
    scanf("%s", book->author);
}

void addBook(struct Book **library)
{
    struct Book *book;
    static struct Book *tail;
    book = (struct Book *)malloc(sizeof(struct Book));
    if (book == NULL)
    {
        printf("内存分配失败！\n");
        exit(1);
    }

    getInput(book);

    if (*library != NULL)
    {
        tail->next = book;
        book->next = NULL;
        /* temp = *library;
        // 尾插法
        // 定位单链表的尾部位置
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = book;
        book->next = NULL; */
        // 头插法
        /* *library = book;
        book->next = temp; */
    }
    else
    {
        *library = book;
        book->next = NULL;
    }

    tail = book;
    
}

void parintLibrary(struct Book *library)
{
    struct Book *book;
    int count = 1;
    book = library;
    while (book != NULL)
    {
        printf("Book%d:\n", count);
        printf("书名：%s\n", book->title);
        printf("作者：%s\n", book->author);
        book = book->next;
        count++;
    }
    
}

void reeaseLivrary(struct Book **library)
{
    struct Book *temp;

    while (*library != NULL)
    {
        temp = *library;
        *library = (*library)->next;
        free(temp);
    }
    
}

int main(int argc, char const *argv[])
{
    struct Book *library = NULL;
    int ch;

    while (1)
    {
        printf("请问是否需要录入书籍信息(Y/N):");
        do
        {
            ch = getchar();
        } while (ch != 'Y' && ch != 'N');
        
        if (ch == 'Y')
        {
            addBook(&library);
        }
        else
        {
            break;
        }
    }

    printf("请问是否需要打印图书信息(Y/N):");
    do
    {
        ch = getchar();
    } while (ch != 'Y' && ch != 'N');

    if (ch == 'Y')
    {
        parintLibrary(library);
    }
    reeaseLivrary(&library);
    
    return 0;
}
