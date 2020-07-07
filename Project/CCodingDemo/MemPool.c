#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Person
{
    char name[40];
    char phone[20];
    struct Person *next;
};

void getInput(struct Person *person);
void printPerson(struct Person *person);
void addPerson(struct Person **contacts);
void changePerson(struct Person *contacts);
void delPerson(struct Person **contacts);
struct Person *findPerson(struct Person *contacts);
void displayContacts(struct Person *contacts);
void releaseContacts(struct Person **contacts);

void getInput(struct Person *person)
{
    printf("请输入姓名：");
    scanf("%s", person->name);
    printf("请输入输入电话：");
    scanf("%s", person->phone);
}

void printPerson(struct Person *person)
{
    printf("联系人： %s\n", person->name);
    printf("电话： %s\n", person->phone);
}

void addPerson(struct Person **contacts)
{
    struct Person *person;
    struct Person *temp;

    person = (struct Person *)malloc(sizeof(struct Person));
    if (person == NULL)
    {
        printf("内存分配失败！\n");
        exit(1);
    }

    getInput(person);

    // 将person用头插法添加到通讯录中
    if (*contacts != NULL)
    {
        temp = *contacts;
        *contacts = person;
        person->next = temp;
    }
    else
    {
        *contacts = person;
        person->next = NULL;
    }
    

}


void changePerson(struct Person *contacts)
{
    struct Person *person;

    person = findPerson(contacts);
    if (person == NULL)
    {
        printf("找不到该联系人！\n");
    }
    else
    {
        printf("请输入新的联系电话：");
        scanf("%s", person->phone);
    }
    
}

void delPerson(struct Person **contacts)
{
    struct Person *temp;
    struct Person *person;
    struct Person *current;
    struct Person *previous;

    // 想找到待删除的节点指针
    person = findPerson(*contacts);
    if (person == NULL)
    {
        printf("找不到该联系人！\n");
    }
    else
    {
        current = *contacts;
        previous = NULL;

        // current定位到待删除的节点
        while (current != NULL && current != person)
        {
            previous = current;
            current = current->next;
        }

        if (previous == NULL)
        {
            // 待删除的节点是第一个节点
            *contacts = current->next;
        }
        else
        {
            // 待删除的节点不是第一个节点
            previous->next = current->next;
        }

        free(person);
        
    }
    
}

struct Person *findPerson(struct Person *contacts)
{
    struct Person *current;
    char input[40];

    printf("请输入联系人：");
    scanf("%s", input);

    current = contacts;
    while (current != NULL && strcmp(current->name, input))
    {
        current = current->next;
    }

    return current;
    

}

void displayContacts(struct Person *contacts)
{
    struct Person *current;

    current = contacts;
    while (current != NULL)
    {
        printPerson(current);
        current = current->next;
    }
    
}

void releaseContacts(struct Person **contacts)
{
    struct Person *temp;

    while (*contacts != NULL)
    {
        temp = *contacts;
        *contacts = (*contacts)->next;
        free(temp);
    }
    
}

int main(int argc, char const *argv[])
{
    int code;
    struct Person *contacts = NULL;
    struct Person *person;

    printf("|-欢迎使用通讯录管理程序 -|\n");
    printf("|--- 1：插入新的联系人 ---|\n");
    printf("|--- 2：查找已有联系人 ---|\n");
    printf("|--- 3：更改已有联系人 ---|\n");
    printf("|--- 4：删除已有联系人 ---|\n");
    printf("|--- 5：显示当前通讯录 ---|\n");
    printf("|--- 6：退出通讯录程序 ---|\n");
    printf("|-   Powred by OldPoint  -|\n");

    while (1)
    {
        printf("\n请输入指令代码：");
        scanf("%d", &code);
        switch (code)
        {
        case 1: addPerson(&contacts); break;

        case 2:
            person = findPerson(contacts);
            if (person == NULL)
            {
                printf("找不到该联系人！\n");
            }
            else
            {
                printPerson(person);
            }
            break;
        case 3: changePerson(contacts); break;

        case 4: delPerson(&contacts); break;

        case 5: displayContacts(contacts); break;

        case 6: releaseContacts(&contacts); return 0;
            
        }
    }
    
    releaseContacts(&contacts);

    return 0;
}
