import { CourseData } from './types';

export const COURSE_CONTENT: CourseData = {
  chapters: [
    {
      id: 'ch1',
      title: '第1章 初识 C++',
      topics: [
        {
          id: '1.1',
          title: '1.1 第一个 C++ 程序',
          content: 'C++ 是一种功能强大、高性能的编程语言。学习任何语言的第一步通常是编写 "Hello World"。下面是一个标准的 C++ 程序结构，包含头文件引用、主函数入口以及标准输出。',
          codeSnippet: `#include <iostream> // 引入输入输出流库，用于控制台输入输出
using namespace std; // 使用标准命名空间，这样我们就不用写 std::cout

// main 函数是程序的入口点，所有 C++ 程序都从这里开始执行
int main() {
    // cout 是标准输出对象 (Console OUT)
    // << 是插入运算符，将字符串发送到输出流
    // endl 表示换行 (End Line) 并刷新缓冲区
    cout << "Hello, C++ World!" << endl;

    // return 0 表示程序成功结束，非 0 通常表示错误
    return 0; 
}`
        },
        {
          id: '1.2',
          title: '1.2 注释',
          content: '注释是代码中不被编译器执行的文本，用于解释代码逻辑，提高可读性。C++ 支持单行注释和多行注释。养成写注释的好习惯对后续维护至关重要。',
          codeSnippet: `#include <iostream>
using namespace std;

/* 
   这是一个多行注释 (块注释)
   它可以跨越
   多行文本，通常用于文件头说明或大段代码解释
*/

int main() {
    // 这是一个单行注释，通常用于解释某行代码
    cout << "Comments are useful!" << endl; // 代码行末尾也可以加注释
    
    return 0;
}`
        }
      ]
    },
    {
      id: 'ch2',
      title: '第2章 变量与常量',
      topics: [
        {
          id: '2.1',
          title: '2.1 变量的定义与初始化',
          content: '变量是用于存储数据的内存空间的名称。在 C++ 中，必须先声明变量的类型，才能使用它。变量初始化是指在声明变量的同时为其赋值。C++ 是强类型语言，这意味着每个变量都有特定的类型。',
          codeSnippet: `int age = 25;       // 整数型 (Integer)
double price = 19.99; // 双精度浮点型 (Double)，用于小数
char grade = 'A';   // 字符型 (Character)，使用单引号，存储单个字符
bool isHappy = true; // 布尔型 (Boolean)，只有 true (1) 或 false (0)

// 也可以先声明后赋值
int score;
score = 100;`
        },
        {
          id: '2.2',
          title: '2.2 常量 (const)',
          content: '常量是值不能被改变的量。使用 const 关键字定义常量，可以提高代码的安全性和可维护性。通常常量名使用全大写字母表示（约定俗成）。一旦定义，不可修改。',
          codeSnippet: `#include <iostream>
using namespace std;

int main() {
    // 定义一个表示一周天数的常量
    const int DAYS_IN_WEEK = 7;
    
    // 尝试修改常量会导致编译错误
    // DAYS_IN_WEEK = 8; // 错误！
    
    cout << "一周有 " << DAYS_IN_WEEK << " 天。" << endl;
    return 0;
}`
        },
        {
          id: '2.3',
          title: '2.3 标识符命名规则',
          content: '标识符是变量、函数等的名称。命名必须遵守规则：只能包含字母、数字和下划线；不能以数字开头；不能是 C++ 关键字（如 int, class）。建议使用有意义的名称（如 studentAge 而不是 a）。驼峰命名法 (myVariable) 或下划线命名法 (my_variable) 都是常见的风格。',
          codeSnippet: `int myVariable = 10;  // 合法，驼峰命名
int _score = 95;      // 合法，以下划线开头
int age2 = 18;        // 合法，数字在后面

// int 2ndPlace = 2;  // 非法，不能以数字开头
// int class = 5;     // 非法，class 是 C++ 关键字`
        }
      ]
    },
    {
      id: 'ch3',
      title: '第3章 数据输入与输出',
      topics: [
        {
          id: '3.1',
          title: '3.1 标准输入 cin',
          content: 'cin 用于从键盘获取用户输入。它结合提取运算符 >> 使用。程序运行到 cin 时会暂停，等待用户输入数据并按下回车。cin 会自动根据变量类型处理输入格式。',
          codeSnippet: `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "请输入您的年龄: ";
    
    // 箭头指向变量，表示数据流向变量
    cin >> age; 
    
    cout << "您的年龄是: " << age << endl;
    return 0;
}`
        },
        {
          id: '3.2',
          title: '3.2 连续输入输出',
          content: 'cin 和 cout 支持链式操作，可以在一行代码中处理多个数据的输入或输出。这使代码更紧凑。输入数据时，用户可以用空格或回车分隔不同数值。',
          codeSnippet: `int a, b;
cout << "请输入两个整数（用空格隔开）: ";

// 连续读取两个整数
cin >> a >> b; 

// 连续输出文本和变量
cout << "您输入的数字是: " << a << " 和 " << b << endl;`
        }
      ]
    },
    {
      id: 'ch4',
      title: '第4章 运算符',
      topics: [
        {
          id: '4.1',
          title: '4.1 算术运算符',
          content: '基本的数学运算：+ (加), - (减), * (乘), / (除), % (取模/求余)。特别注意整数除法会舍去小数部分（向下取整），而取模运算只适用于整数。',
          codeSnippet: `int x = 10;
int y = 3;

cout << "加法: " << x + y << endl; // 13
cout << "减法: " << x - y << endl; // 7
cout << "乘法: " << x * y << endl; // 30
cout << "整数除法: " << x / y << endl; // 3 (不是 3.333)
cout << "取模(余数): " << x % y << endl; // 1

double z = 3.0;
cout << "浮点除法: " << x / z << endl; // 3.33333`
        },
        {
          id: '4.2',
          title: '4.2 比较与逻辑运算符',
          content: '比较运算符 (==, !=, >, <, >=, <=) 返回布尔值 (true/false)。逻辑运算符 (&& 与, || 或, ! 非) 用于组合多个条件。',
          codeSnippet: `bool a = true;
bool b = false;

// 逻辑与 (AND): 两个都为真才为真
if (a && b) { cout << "Both true"; } 

// 逻辑或 (OR): 只要有一个为真就为真
if (a || b) { cout << "At least one is true"; } // 输出这个

int score = 85;
// 组合条件: 分数在 0 到 100 之间
if (score >= 0 && score <= 100) {
    cout << "有效分数";
}`
        }
      ]
    },
    {
      id: 'ch5',
      title: '第5章 条件判断',
      topics: [
        {
          id: '5.1',
          title: '5.1 if 语句',
          content: 'if 语句是最基本的流程控制语句。如果圆括号内的条件为真 (true)，则执行大括号内的代码块。',
          codeSnippet: `int temp = 30;

if (temp > 25) {
    // 只有当 temp 大于 25 时执行
    cout << "天气很热，记得开空调！" << endl;
}`
        },
        {
          id: '5.2',
          title: '5.2 if-else 结构',
          content: 'if-else 结构提供了非此即彼的选择。如果条件为真执行 if 块，否则执行 else 块。还可以使用 else if 处理多种情况。',
          codeSnippet: `int score = 75;

if (score >= 90) {
    cout << "优秀" << endl;
} else if (score >= 60) {
    cout << "及格" << endl;
} else {
    // 如果以上条件都不满足
    cout << "不及格" << endl;
}`
        }
      ]
    },
    {
      id: 'ch6',
      title: '第6章 switch 分支结构',
      topics: [
        {
          id: '6.1',
          title: '6.1 switch 结构的基本语法',
          content: '当需要判断一个变量等于多个具体值中的哪一个时，使用 switch 语句比写大量的 if-else 更清晰。switch 括号内的表达式必须是整型或字符型（不能是字符串或浮点数）。',
          codeSnippet: `#include <iostream>
using namespace std;

int main() {
    int day = 3;
    
    switch(day) {
        case 1:
            cout << "星期一" << endl;
            break;
        case 2:
            cout << "星期二" << endl;
            break;
        case 3:
            cout << "星期三" << endl; // 这里会被执行
            break;
        // ... 其他 case
    }
    return 0;
}`
        },
        {
          id: '6.2',
          title: '6.2 default 语句',
          content: 'default 类似于 if-else 中的 else。当没有任何 case 匹配时，程序会执行 default 分支。default 是可选的，但建议加上以处理意外输入。',
          codeSnippet: `char grade = 'E';

switch(grade) {
    case 'A':
        cout << "优秀" << endl;
        break;
    case 'B':
        cout << "良好" << endl;
        break;
    default:
        // 当 grade 不是 A 或 B 时执行
        cout << "未知等级" << endl;
        break;
}`
        },
        {
          id: '6.3',
          title: '6.3 break 语句的使用',
          content: '在 switch 中，break 至关重要。如果没有 break，程序会发生"穿透"（Fall-through）现象，即执行完匹配的 case 后，继续向下执行后续所有 case 的代码，直到遇到 break 或 switch 结束。有时候我们可以利用这个特性。',
          codeSnippet: `int month = 2;

switch(month) {
    case 12:
    case 1:
    case 2:
        // 12, 1, 2 月都会执行这里的代码
        // 利用穿透特性处理多个 case 对应相同逻辑
        cout << "这是冬季" << endl;
        break;
    case 3:
    case 4:
    case 5:
        cout << "这是春季" << endl;
        break;
    default:
        cout << "其他季节" << endl;
}`
        }
      ]
    },
    {
      id: 'ch7',
      title: '第7章 while 循环',
      topics: [
        {
          id: '7.1',
          title: '7.1 迭代器（i++ 和 ++i）',
          content: '自增运算符是循环中的核心。i++ 是后置自增（先使用值，再+1），++i 是前置自增（先+1，再使用值）。在单独成行使用时，效果一样。在复杂表达式中，它们有区别。',
          codeSnippet: `int a = 5;
int b = 5;

// 后置：先赋值，再自增
int x = a++; // x = 5, a 变为 6

// 前置：先自增，再赋值
int y = ++b; // b 变为 6, y = 6

cout << "x=" << x << ", y=" << y << endl;`
        },
        {
          id: '7.2',
          title: '7.2 while 循环',
          content: 'while 循环在每次迭代前检查条件。只要条件为真，循环体就会一直执行。如果一开始条件为假，循环体一次都不会执行。',
          codeSnippet: `int i = 1;

// 打印 1 到 5
while (i <= 5) {
    cout << i << " ";
    i++; // 别忘了更新条件，否则会死循环！
}
// 输出: 1 2 3 4 5`
        },
        {
          id: '7.3',
          title: '7.3 do-while 循环',
          content: 'do-while 循环先执行一次循环体，然后再检查条件。这意味着无论条件是否满足，循环体至少会执行一次。常用于"至少做一次"的场景，如菜单选择。',
          codeSnippet: `int num;
do {
    cout << "请输入一个正数: ";
    cin >> num;
    // 如果用户输入负数，继续要求输入
} while (num <= 0);

cout << "谢谢，你输入了: " << num << endl;`
        }
      ]
    },
    {
      id: 'ch8',
      title: '第8章 for 循环',
      topics: [
        {
          id: '8.1',
          title: '8.1 for 循环的基本结构',
          content: 'for 循环是最常用的循环结构，适合已知循环次数的场景。语法为：for(初始化; 条件; 更新)。这三部分都在一行中，结构非常紧凑。',
          codeSnippet: `// for (初始化变量; 循环条件; 每次迭代后的操作)
for (int i = 0; i < 5; i++) {
    cout << "Loop iteration: " << i << endl;
}

// 计算 1 到 100 的和
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
cout << "Sum 1-100: " << sum << endl;`
        },
        {
          id: '8.2',
          title: '8.2 continue 和 break 语句',
          content: 'break 用于立即跳出整个循环。continue 用于跳过本次循环剩余的代码，直接进入下一次迭代。',
          codeSnippet: `for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue; // 跳过 5，不打印
    }
    if (i == 8) {
        break; // 遇到 8 结束循环
    }
    cout << i << " ";
}
// 输出: 1 2 3 4 6 7`
        },
        {
          id: '8.3',
          title: '8.3 求质数算法',
          content: '质数是只能被 1 和自身整除的大于 1 的自然数。这是一个经典的算法练习，使用嵌套循环或取模运算来判断。',
          codeSnippet: `int n = 29;
bool isPrime = true;

if (n <= 1) isPrime = false;

// 只需要检查到 n 的平方根即可，但简单起见这里检查到 n-1
for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break; // 只要发现一个因子，就不是质数，直接退出
    }
}

if (isPrime) cout << n << " 是质数";
else cout << n << " 不是质数";`
        },
        {
          id: '8.4',
          title: '8.4 求斐波那契数列',
          content: '斐波那契数列是前两项之和等于第三项的数列 (0, 1, 1, 2, 3, 5, 8...)。',
          codeSnippet: `int n = 10; // 输出前 10 项
int t1 = 0, t2 = 1, nextTerm;

cout << "斐波那契数列: ";

for (int i = 1; i <= n; ++i) {
    if(i == 1) {
        cout << t1 << " ";
        continue;
    }
    if(i == 2) {
        cout << t2 << " ";
        continue;
    }
    // 计算下一项
    nextTerm = t1 + t2;
    t1 = t2; // 更新 t1
    t2 = nextTerm; // 更新 t2
    
    cout << nextTerm << " ";
}`
        }
      ]
    },
    {
      id: 'ch9',
      title: '第9章 初识数组',
      topics: [
        {
          id: '9.1',
          title: '9.1 数组的概念和特性',
          content: '数组是可以存储固定大小的同类型元素的集合。数组中的元素存储在连续的内存位置。访问数组使用下标索引，索引从 0 开始。',
          codeSnippet: `// 声明一个包含 5 个整数的数组
int numbers[5] = {10, 20, 30, 40, 50};

// 访问元素
cout << "第一个元素: " << numbers[0] << endl;
cout << "第三个元素: " << numbers[2] << endl;

// 修改元素
numbers[1] = 99; 

// 遍历数组
for(int i = 0; i < 5; i++) {
    cout << numbers[i] << " ";
}`
        },
        {
          id: '9.2',
          title: '9.2 找最大最小值',
          content: '遍历数组是查找最大值或最小值的常用方法。我们可以假设第一个元素是最大的，然后逐个比较。',
          codeSnippet: `int arr[] = {12, 45, 2, 8, 33};
int size = 5;

int maxVal = arr[0]; // 假设第一个是最大值

for(int i = 1; i < size; i++) {
    if(arr[i] > maxVal) {
        maxVal = arr[i]; // 发现更大的，更新 maxVal
    }
}

cout << "数组中的最大值是: " << maxVal << endl;`
        },
        {
          id: '9.3',
          title: '9.3 数组与斐波那契数列',
          content: '使用数组存储斐波那契数列可以方便地后续查询任意项的值。',
          codeSnippet: `int n = 10;
int fib[10]; // 创建数组存储结果

// 初始化前两项
fib[0] = 0;
fib[1] = 1;

// 计算剩余项
for(int i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}

// 打印结果
for(int i = 0; i < n; i++) {
    cout << fib[i] << " ";
}`
        }
      ]
    },
    {
      id: 'ch10',
      title: '第10章 嵌套循环',
      topics: [
        {
          id: '10.1',
          title: '10.1 嵌套循环的基本概念',
          content: '嵌套循环是指在一个循环体内包含另一个循环。外层循环每执行一次，内层循环就会执行完整的一轮。时间复杂度通常是两层循环次数的乘积。',
          codeSnippet: `// 打印一个 3x3 的星号矩阵
for (int i = 0; i < 3; i++) {      // 外层控制行
    for (int j = 0; j < 3; j++) {  // 内层控制列
        cout << "* ";
    }
    cout << endl; // 每打印完一行后换行
}
/* 输出:
* * * 
* * * 
* * * 
*/`
        },
        {
          id: '10.2',
          title: '10.2 嵌套循环的经典例题',
          content: '九九乘法表是嵌套循环最经典的练习。需要控制内层循环的终止条件与外层循环变量相关。',
          codeSnippet: `// 打印九九乘法表
for (int i = 1; i <= 9; i++) {
    // j <= i 保证了打印出三角形形状
    for (int j = 1; j <= i; j++) {
        cout << j << "x" << i << "=" << (i*j) << "\\t";
    }
    cout << endl;
}`
        }
      ]
    },
    {
      id: 'ch11',
      title: '第11章 二维数组',
      topics: [
        {
          id: '11.1',
          title: '11.1 二维数组的概念',
          content: '二维数组本质上是数组的数组，可以看作是一个表格或矩阵，有行和列。声明方式为 type arrayName[rows][cols]。',
          codeSnippet: `// 声明一个 2行 3列 的二维数组
int matrix[2][3] = {
    {1, 2, 3}, // 第一行 (索引 0)
    {4, 5, 6}  // 第二行 (索引 1)
};

// 访问第二行第三个元素 (索引从0开始)
cout << matrix[1][2]; // 输出 6`
        },
        {
          id: '11.2',
          title: '11.2 二维数组的应用实例',
          content: '二维数组常用于处理矩阵运算、地图网格、学生成绩表等数据结构。',
          codeSnippet: `// 计算矩阵所有元素的和
int grid[3][3] = {
    {1, 1, 1},
    {2, 2, 2},
    {3, 3, 3}
};
int sum = 0;

for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
        sum += grid[i][j];
    }
}
cout << "矩阵总和: " << sum << endl;`
        }
      ]
    },
    {
      id: 'ch12',
      title: '第12章 字符串',
      topics: [
        {
          id: '12.1',
          title: '12.1 C风格字符串',
          content: '在 C++ 中，传统的字符串是字符数组，以空字符 \'\\0\' 结尾。这是从 C 语言继承来的特性。',
          codeSnippet: `char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
// 或者简写为：
char name[] = "World"; // 编译器自动添加 \\0

cout << greeting << " " << name << endl;
// 注意：字符数组必须预留足够的空间给 \\0`
        },
        {
          id: '12.2',
          title: '12.2 字符串专用处理函数',
          content: 'C 语言库 <cstring> 提供了处理 C 风格字符串的函数，如 strlen (长度), strcpy (复制), strcat (拼接), strcmp (比较)。',
          codeSnippet: `#include <cstring>
#include <iostream>
using namespace std;

int main() {
    char str1[20] = "Hello";
    char str2[] = "World";

    strcat(str1, str2); // 将 str2 拼接到 str1 后面
    
    cout << str1 << endl; // HelloWorld
    cout << "长度: " << strlen(str1) << endl; // 10
    return 0;
}`
        },
        {
          id: '12.3',
          title: '12.3 字符串反转算法',
          content: '双指针法是反转字符串的高效方法。一个指针指向头部，一个指向尾部，交换字符并向中间移动，直到相遇。',
          codeSnippet: `#include <cstring>
#include <iostream>
using namespace std;

int main() {
    char s[] = "abcdef";
    int start = 0;
    int end = strlen(s) - 1;

    while(start < end) {
        // 交换首尾字符
        char temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        
        // 移动指针
        start++;
        end--;
    }
    cout << "反转后: " << s << endl; // fedcba
    return 0;
}`
        }
      ]
    },
    {
      id: 'ch13',
      title: '第13章 动态数组',
      topics: [
        {
          id: '13.1',
          title: '13.1 vector 容器',
          content: 'vector 是 C++ 标准模板库 (STL) 提供的动态数组。它能自动管理内存，根据需要自动调整大小，比原始数组更安全、强大。',
          codeSnippet: `#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v; // 声明一个整型 vector

    v.push_back(10); // 添加元素到末尾
    v.push_back(20);
    v.push_back(30);

    cout << "大小: " << v.size() << endl; // 3
    cout << "第一个元素: " << v[0] << endl;

    v.pop_back(); // 删除最后一个元素
    
    // 使用范围 for 循环遍历 (C++11)
    for(int x : v) {
        cout << x << " ";
    }
    return 0;
}`
        },
        {
          id: '13.2',
          title: '13.2 string 类',
          content: 'C++ 的 std::string 类大大简化了文本处理。它像 int 一样易用，支持 + 号拼接、== 比较，且不用担心内存溢出。',
          codeSnippet: `#include <string>
#include <iostream>
using namespace std;

int main() {
    string s1 = "Hello";
    string s2 = "World";
    
    string s3 = s1 + " " + s2; // 直接拼接
    
    if (s1 == "Hello") {
        cout << "匹配成功!" << endl;
    }
    
    cout << s3.length(); // 获取长度
    return 0;
}`
        },
        {
          id: '13.3',
          title: '13.3 动态数组与静态数组的对比',
          content: '静态数组大小固定，在栈上分配，速度快但灵活性差。动态数组 (vector) 大小可变，在堆上分配，功能强大但有微小性能开销。在现代 C++ 中，优先推荐使用 vector 和 string。',
          codeSnippet: `// 静态数组：大小必须是编译期常量
int staticArr[100]; 

// 动态数组：大小可以在运行时决定
int n;
cin >> n;
vector<int> dynamicArr(n); // 创建大小为 n 的 vector`
        }
      ]
    },
    {
      id: 'ch14',
      title: '第14章 函数',
      topics: [
        {
          id: '14.1',
          title: '14.1 函数的基本概念',
          content: '函数是一段完成特定任务的可重用代码块。使用函数可以使程序结构清晰、易于维护。main 也是一个函数。',
          codeSnippet: `// 函数定义：返回类型 函数名(参数列表)
void sayHello() {
    cout << "Hello from function!" << endl;
}

int main() {
    sayHello(); // 调用函数
    return 0;
}`
        },
        {
          id: '14.2',
          title: '14.2 返回值与参数',
          content: '函数可以接收数据（参数）并将结果返回给调用者（返回值）。如果没有返回值，类型为 void。',
          codeSnippet: `// 接收两个整数，返回它们的和
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    cout << "Result: " << result << endl; // 8
    return 0;
}`
        },
        {
          id: '14.3',
          title: '14.3 变量的引用',
          content: '引用 (Reference) 是变量的别名。通过引用传参，函数可以直接修改外部变量的值，也能避免大对象的复制开销。',
          codeSnippet: `// 交换两个变量的值
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(x, y); // 传递引用
    cout << x << " " << y; // 输出 20 10
    return 0;
}`
        },
        {
          id: '14.4',
          title: '14.4 函数重载',
          content: '函数重载允许创建多个同名函数，只要它们的参数列表（类型或数量）不同。编译器会根据调用时的参数自动匹配。',
          codeSnippet: `void print(int i) {
    cout << "Printing int: " << i << endl;
}

void print(double d) {
    cout << "Printing double: " << d << endl;
}

void print(string s) {
    cout << "Printing string: " << s << endl;
}

// 调用时自动区分
print(100);
print(3.14);`
        },
        {
          id: '14.5',
          title: '14.5 函数练习',
          content: '综合练习：编写一个函数判断质数，然后在主函数中调用它打印 1-100 之间的所有质数。',
          codeSnippet: `bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    for(int i = 1; i <= 100; i++) {
        if(isPrime(i)) {
            cout << i << " ";
        }
    }
    return 0;
}`
        }
      ]
    },
    {
      id: 'ch15',
      title: '第15章 指针',
      topics: [
        {
          id: '15.1',
          title: '15.1 指针的概念',
          content: '指针是存储内存地址的变量。它是 C++ 最强大但也最危险的特性之一。& 取地址，* 解引用（取值）。',
          codeSnippet: `int num = 10;
int* ptr = &num; // ptr 存储了 num 的地址

cout << "num 的地址: " << ptr << endl;
cout << "ptr 指向的值: " << *ptr << endl; // 输出 10

*ptr = 20; // 通过指针修改 num
cout << "num 的新值: " << num << endl; // 输出 20`
        },
        {
          id: '15.2',
          title: '15.2 指针与一维数组',
          content: '数组名本质上是指向数组第一个元素的指针常量。可以使用指针算术来遍历数组。',
          codeSnippet: `int arr[] = {10, 20, 30};
int* p = arr; // 指向第一个元素

cout << *p << endl;     // 10
cout << *(p + 1) << endl; // 20 (指针向前移动一位)
cout << *(p + 2) << endl; // 30`
        },
        {
          id: '15.3',
          title: '15.3 指针与字符串',
          content: 'C 风格字符串通常通过 char* 指针操作。常量字符串 (如 "Hello") 返回的是首字符地址。',
          codeSnippet: `const char* str = "Hello";

// 打印直到遇到 \\0
while (*str != '\\0') {
    cout << *str;
    str++; // 移动指针到下一个字符
}`
        },
        {
          id: '15.4',
          title: '15.4 指针与函数',
          content: '指针可以作为函数参数，实现与引用类似的效果（修改实参）。也可以作为返回值。',
          codeSnippet: `// 接收指针参数
void increment(int* p) {
    (*p)++; // 修改指针指向的值
}

int main() {
    int a = 5;
    increment(&a); // 传递地址
    cout << a; // 6
}`
        },
        {
          id: '15.5',
          title: '15.5 引用与指针传参的对比',
          content: '引用更安全、简单（不能为空，不用解引用），指针更灵活（可以为空，可以改变指向）。在 C++ 中，首选引用传参，除非必须使用指针（如兼容 C 接口）。',
          codeSnippet: `void byPtr(int* p) {
    if(p) *p = 100; // 需要检查空指针
}

void byRef(int& r) {
    r = 100; // 像操作普通变量一样
}`
        }
      ]
    },
    {
      id: 'ch16',
      title: '第16章 文件操作',
      topics: [
        {
          id: '16.1',
          title: '16.1 文件的导入与读取',
          content: '使用 <fstream> 库中的 ifstream 类读取文件。需要检查文件是否成功打开。',
          codeSnippet: `#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int main() {
    ifstream inputFile("data.txt");
    
    if (!inputFile.is_open()) {
        cout << "无法打开文件" << endl;
        return 1;
    }
    
    string line;
    while (getline(inputFile, line)) {
        cout << line << endl;
    }
    
    inputFile.close(); // 记得关闭文件
    return 0;
}`
        },
        {
          id: '16.2',
          title: '16.2 文件的写入',
          content: '使用 ofstream 类向文件写入数据。如果文件不存在会自动创建。默认是覆盖模式，使用 ios::app 可以追加。',
          codeSnippet: `#include <fstream>
using namespace std;

int main() {
    // 打开文件用于写入
    ofstream outputFile("output.txt");
    
    outputFile << "Hello File!" << endl;
    outputFile << "This is line 2." << endl;
    
    outputFile.close();
    return 0;
}`
        },
        {
          id: '16.3',
          title: '16.3 文件的导出 (数据保存)',
          content: '导出数据通常指将程序中的复杂数据结构格式化写入文件，以便后续使用或其他程序读取（如 CSV 格式）。',
          codeSnippet: `#include <fstream>
#include <vector>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92};
    ofstream file("scores.csv"); // 简单的逗号分隔文件
    
    file << "ID,Score" << endl;
    for(int i = 0; i < scores.size(); i++) {
        file << (i+1) << "," << scores[i] << endl;
    }
    
    file.close();
    return 0;
}`
        }
      ]
    }
  ]
};