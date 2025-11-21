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
      title: '第2章 变量与数据类型',
      topics: [
        {
          id: '2.1',
          title: '2.1 变量的定义与初始化',
          content: '变量是用于存储数据的内存空间的名称。在 C++ 中，必须先声明变量的类型，才能使用它。变量初始化是指在声明变量的同时为其赋值。',
          codeSnippet: `int age = 25;       // 声明并初始化
int score;          // 先声明
score = 100;        // 后赋值

// 多变量定义
int a = 1, b = 2;`
        },
        {
          id: '2.2',
          title: '2.2 整型 (int, long long)',
          content: 'C++ 提供多种整数类型。`int` 是最常用的整数类型，通常占用 4 字节。当需要存储非常大的整数时（超过21亿），应使用 `long long`，它通常占用 8 字节。可以使用 `sizeof()` 检查类型大小。',
          codeSnippet: `#include <iostream>
using namespace std;

int main() {
    // int 范围约为 -21亿 到 +21亿
    int normalNum = 2147483647;
    
    // long long 范围极大，字面量建议加 LL 后缀
    long long bigNum = 9223372036854775807LL;
    
    cout << "int size: " << sizeof(int) << " bytes" << endl;
    cout << "long long size: " << sizeof(long long) << " bytes" << endl;
    
    return 0;
}`
        },
        {
          id: '2.3',
          title: '2.3 浮点型 (float, double)',
          content: '浮点型用于存储小数。`float` (单精度) 通常占 4 字节，精度较低（约7位有效数字）。`double` (双精度) 通常占 8 字节，精度更高（约15位有效数字）。默认的小数常量是 double 类型，若要定义 float 常量，需在数字后加 `f`。',
          codeSnippet: `#include <iostream>
#include <iomanip> // 用于控制输出格式
using namespace std;

int main() {
    float f = 3.1415926f; // 注意末尾的 f
    double d = 3.141592653589793;
    
    // 设置输出精度查看区别
    cout << setprecision(15); 
    cout << "Float:  " << f << " (精度丢失)" << endl;
    cout << "Double: " << d << " (精度保持)" << endl;
    
    return 0;
}`
        },
        {
          id: '2.4',
          title: '2.4 字符与布尔型',
          content: '`char` 类型用于存储单个字符，实际上存储的是该字符对应的 ASCII 码整数。`bool` 类型用于逻辑判断，只有 `true` (真) 和 `false` (假) 两个值。',
          codeSnippet: `#include <iostream>
using namespace std;

int main() {
    char grade = 'A';
    char newline = '\\n'; // 转义字符
    
    bool isPassed = true;
    bool isOver = false;
    
    cout << "Grade: " << grade << endl;
    // bool 默认输出 1 (true) 或 0 (false)
    cout << "Passed? " << isPassed << endl; 
    
    // 使用 boolalpha 输出文本 true/false
    cout << boolalpha << "Over? " << isOver << endl;
    
    return 0;
}`
        },
        {
          id: '2.5',
          title: '2.5 常量 (const)',
          content: '常量是值不能被改变的量。使用 const 关键字定义常量，可以提高代码的安全性和可维护性。通常常量名使用全大写字母表示（约定俗成）。',
          codeSnippet: `#include <iostream>
using namespace std;

int main() {
    // 定义常量，一旦赋值不可修改
    const double PI = 3.14159;
    const int MAX_LIVES = 3;
    
    // PI = 3.14; // 错误！会导致编译失败
    
    cout << "PI: " << PI << endl;
    return 0;
}`
        },
        {
          id: '2.6',
          title: '2.6 标识符命名规则',
          content: '标识符命名必须遵守规则：只能包含字母、数字和下划线；不能以数字开头；不能是 C++ 关键字。建议使用驼峰命名法 (myVariable) 或下划线命名法 (my_variable)。',
          codeSnippet: `int myVariable = 10;  // 合法
int _value = 5;       // 合法
int num2 = 20;        // 合法

// int 2nd = 2;       // 非法！不能以数字开头
// int class = 1;     // 非法！class 是关键字`
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
          content: 'cin 用于从键盘获取用户输入。它结合提取运算符 >> 使用。程序运行到 cin 时会暂停，等待用户输入数据并按下回车。',
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
          content: 'cin 和 cout 支持链式操作，可以在一行代码中处理多个数据的输入或输出。',
          codeSnippet: `int a, b;
cout << "请输入两个整数（用空格隔开）: ";

// 连续读取两个整数
cin >> a >> b; 

// 连续输出
cout << "Sum: " << (a + b) << endl;`
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
          content: '基本的数学运算：+ (加), - (减), * (乘), / (除), % (取模/求余)。注意整数除法会向下取整。',
          codeSnippet: `int x = 10, y = 3;

cout << x / y << endl; // 输出 3 (整数除法)
cout << x % y << endl; // 输出 1 (余数)

double d = 3.0;
cout << x / d << endl; // 输出 3.3333 (浮点除法)`
        },
        {
          id: '4.2',
          title: '4.2 比较与逻辑运算符',
          content: '比较运算符 (==, !=, >, <) 返回布尔值。逻辑运算符 (&& 与, || 或, ! 非) 用于组合条件。',
          codeSnippet: `int score = 85;

// 检查 score 是否在 [60, 100] 之间
if (score >= 60 && score <= 100) {
    cout << "成绩有效且及格";
}

if (score < 0 || score > 100) {
    cout << "成绩无效";
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
          content: 'if 语句是最基本的流程控制语句。如果条件为真 (true)，则执行代码块。',
          codeSnippet: `int temp = 30;
if (temp > 25) {
    cout << "开空调" << endl;
}`
        },
        {
          id: '5.2',
          title: '5.2 if-else 结构',
          content: 'if-else 处理非此即彼的情况。可以使用 else if 处理多种条件。',
          codeSnippet: `int score = 75;

if (score >= 90) {
    cout << "A";
} else if (score >= 80) {
    cout << "B";
} else {
    cout << "C";
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
          content: '当需要判断一个变量等于多个具体值中的哪一个时，使用 switch 语句更清晰。表达式必须是整型或字符型。',
          codeSnippet: `#include <iostream>
using namespace std;

int main() {
    int day = 3;
    
    switch(day) {
        case 1:
            cout << "Monday";
            break;
        case 2:
            cout << "Tuesday";
            break;
        case 3:
            cout << "Wednesday"; // 执行这里
            break;
    }
    return 0;
}`
        },
        {
          id: '6.2',
          title: '6.2 default 语句',
          content: 'default 类似于 else，当没有任何 case 匹配时执行。',
          codeSnippet: `char dir = 'X';

switch(dir) {
    case 'L': cout << "Left"; break;
    case 'R': cout << "Right"; break;
    default:  cout << "Unknown"; break; // 输出 Unknown
}`
        },
        {
          id: '6.3',
          title: '6.3 break 语句的使用',
          content: '如果没有 break，程序会发生"穿透" (Fall-through)，继续执行下一个 case 的代码。',
          codeSnippet: `int n = 1;
switch(n) {
    case 1: cout << "1"; // 没有 break，继续往下
    case 2: cout << "2"; 
    case 3: cout << "3";
}
// 输出: 123`
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
          content: '自增运算符是循环的核心。i++ 是后置（先用后加），++i 是前置（先加后用）。',
          codeSnippet: `int a = 5, b = 5;
int x = a++; // x=5, a=6
int y = ++b; // y=6, b=6`
        },
        {
          id: '7.2',
          title: '7.2 while 循环',
          content: '只要条件为真，while 循环就会一直执行。',
          codeSnippet: `int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}`
        },
        {
          id: '7.3',
          title: '7.3 do-while 循环',
          content: 'do-while 先执行一次循环体，再检查条件，保证至少执行一次。',
          codeSnippet: `int num;
do {
    cin >> num;
} while (num <= 0); // 直到输入正数为止`
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
          content: 'for 循环适合已知次数的循环。结构：for(初始化; 条件; 更新)。',
          codeSnippet: `for (int i = 0; i < 5; i++) {
    cout << i << endl;
}`
        },
        {
          id: '8.2',
          title: '8.2 continue 和 break 语句',
          content: 'break 跳出整个循环，continue 跳过本次迭代。',
          codeSnippet: `for (int i = 0; i < 10; i++) {
    if (i == 5) continue; // 跳过 5
    if (i == 8) break;    // 到 8 停止
    cout << i << " ";
}`
        },
        {
          id: '8.3',
          title: '8.3 求质数算法',
          content: '判断一个数 n 是否为质数：检查 2 到 sqrt(n) 之间是否有因子。',
          codeSnippet: `bool isPrime = true;
int n = 29;
for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}`
        },
        {
          id: '8.4',
          title: '8.4 求斐波那契数列',
          content: '斐波那契数列：0, 1, 1, 2, 3, 5...',
          codeSnippet: `int n = 10, t1 = 0, t2 = 1, nextTerm;
for (int i = 1; i <= n; ++i) {
    cout << t1 << " ";
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
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
          content: '数组是存储同类型数据的集合，内存连续。索引从 0 开始。',
          codeSnippet: `int arr[5] = {10, 20, 30, 40, 50};
cout << arr[0]; // 10
arr[1] = 99;    // 修改`
        },
        {
          id: '9.2',
          title: '9.2 找最大最小值',
          content: '遍历数组，用一个变量记录当前遇到的最值。',
          codeSnippet: `int arr[] = {5, 2, 9, 1, 7};
int maxVal = arr[0];
for(int i=1; i<5; i++) {
    if(arr[i] > maxVal) maxVal = arr[i];
}`
        },
        {
          id: '9.3',
          title: '9.3 数组与斐波那契数列',
          content: '用数组存储数列，方便后续查询。',
          codeSnippet: `int fib[20];
fib[0] = 0; fib[1] = 1;
for(int i=2; i<20; i++) {
    fib[i] = fib[i-1] + fib[i-2];
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
          title: '10.1 嵌套循环的基本原理',
          content: '嵌套循环是指在一个循环体内部再包含另一个循环。外层循环每执行一次，内层循环就会完整地执行一轮。理解执行顺序是关键：先外后内，内层结束回到外层。考点：总循环次数 = 外层次数 × 内层次数。',
          codeSnippet: `// 模拟时钟：外层代表小时，内层代表分钟
for (int hour = 0; hour < 24; hour++) {
    for (int minute = 0; minute < 60; minute++) {
        // 这里的代码会执行 24 * 60 = 1440 次
        // cout << hour << ":" << minute << endl;
    }
}`
        },
        {
          id: '10.2',
          title: '10.2 经典例题：九九乘法表',
          content: '九九乘法表是嵌套循环的经典练习。注意内层循环的终止条件通常与外层变量相关（j <= i），这样可以打印出三角形而非矩形。',
          codeSnippet: `for (int i = 1; i <= 9; i++) {     // 行控制
    for (int j = 1; j <= i; j++) { // 列控制，列数 <= 行号
        cout << j << "x" << i << "=" << i * j << "\\t";
    }
    cout << endl; // 每行结束后换行
}`
        },
        {
          id: '10.3',
          title: '10.3 嵌套循环中的跳转 (Break)',
          content: '重要考点：在嵌套循环中使用 break，它只会跳出**当前所在的那一层**循环，不会终止外层循环。如果想要跳出所有循环，通常需要使用标志变量。',
          codeSnippet: `for (int i = 0; i < 3; i++) {
    cout << "Outer " << i << ": ";
    for (int j = 0; j < 5; j++) {
        if (j == 2) break; // 仅跳出内层循环，继续执行下一轮外层循环
        cout << j << " ";
    }
    cout << endl;
}
// 输出:
// Outer 0: 0 1 
// Outer 1: 0 1 
// Outer 2: 0 1`
        }
      ]
    },
    {
      id: 'ch11',
      title: '第11章 二维数组',
      topics: [
        {
          id: '11.1',
          title: '11.1 定义与内存布局',
          content: '二维数组本质上是"数组的数组"。在 C++ 内存中，二维数组是**按行存储**的（Row Major），即地址是连续的。定义语法：Type arr[rows][cols]。考点：省略行数是允许的（如 int a[][3]），但绝不能省略列数。',
          codeSnippet: `int grid[2][3]; // 2行3列，共6个元素

// 内存地址演示（假设int占4字节）
// &grid[0][0] -> 0x100
// &grid[0][1] -> 0x104
// &grid[0][2] -> 0x108
// &grid[1][0] -> 0x10C (紧接上一行末尾)`
        },
        {
          id: '11.2',
          title: '11.2 初始化与访问',
          content: '初始化可以使用嵌套大括号，更加直观。访问元素时需提供两个下标。注意下标越界是二维数组常见错误。',
          codeSnippet: `// 推荐初始化
int matrix[3][2] = {
    {1, 2}, // 第0行
    {3, 4}, // 第1行
    {5, 6}  // 第2行
};

// 访问元素
cout << matrix[1][0]; // 输出 3
matrix[2][1] = 99;    // 修改元素`
        },
        {
          id: '11.3',
          title: '11.3 矩阵转置与对角线求和',
          content: '矩阵应用题高频考点。转置是将矩阵的行与列互换。对角线求和通常涉及 i==j（主对角线）或 i+j==n-1（副对角线）的条件。',
          codeSnippet: `int arr[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
int sum = 0;

// 计算主对角线之和
for(int i=0; i<3; i++) {
    sum += arr[i][i];
}

// 矩阵转置打印 (行变列)
cout << "Transpose:" << endl;
for(int i=0; i<3; i++) {
    for(int j=0; j<3; j++) {
        cout << arr[j][i] << " "; // 注意这里是 [j][i]
    }
    cout << endl;
}`
        }
      ]
    },
    {
      id: 'ch12',
      title: '第12章 字符串 (C风格)',
      topics: [
        {
          id: '12.1',
          title: '12.1 字符数组与结束符 \\0',
          content: 'C 风格字符串本质是字符数组，但必须以空字符 \'\\0\' (ASCII 0) 结尾。这是区别于普通字符数组的关键。考点：定义数组大小时，必须为 \'\\0\' 预留空间。例如存储 "Hello" 至少需要 6 个字节。',
          codeSnippet: `char s1[] = {'H', 'i', '\\0'}; // 标准写法
char s2[] = "Hi";            // 编译器自动加 \\0

// 错误示范：空间不足
// char s3[2] = "Hi"; // 错误！"Hi" 需要3个字节('H','i','\\0')

cout << sizeof(s2); // 输出 3 (包含\\0)
cout << strlen(s2); // 输出 2 (不包含\\0)`
        },
        {
          id: '12.2',
          title: '12.2 读取带空格的字符串',
          content: '使用 `cin >>` 读取字符串时，遇到空格、回车或 Tab 会停止，无法读取完整的句子。**考点**：若要读取包含空格的一整行，必须使用 `cin.getline()`。',
          codeSnippet: `char name[50];

// 如果输入 "John Doe"
// cin >> name; 
// cout << name; // 输出 "John"，"Doe" 留在缓冲区

// 正确读取整行
cin.getline(name, 50); // 最多读49个字符，留1个给 \\0
cout << "Full name: " << name << endl;`
        },
        {
          id: '12.3',
          title: '12.3 常用字符串函数 (<cstring>)',
          content: '需要包含 `<cstring>` 头文件。常用函数：`strlen` (求长度), `strcpy` (复制), `strcat` (拼接), `strcmp` (比较)。注意这些函数不检查边界，易造成缓冲区溢出。',
          codeSnippet: `#include <cstring>
// ...
char dest[20] = "Hello";
char src[] = " World";

strcat(dest, src); // 拼接
cout << dest;      // "Hello World"

if(strcmp(dest, "Hello World") == 0) {
    cout << "Strings are equal";
}`
        },
        {
          id: '12.4',
          title: '12.4 经典算法：回文串判断',
          content: '判断一个字符串是否是回文（正着读和反着读一样），如 "madam"。使用双指针法，头尾同时向中间遍历比较。',
          codeSnippet: `char str[] = "level";
int len = strlen(str);
bool isPalindrome = true;

for(int i = 0; i < len / 2; i++) {
    // 比较头部 str[i] 和 尾部 str[len-1-i]
    if(str[i] != str[len - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if(isPalindrome) cout << "Yes, it's a palindrome.";`
        }
      ]
    },
    {
      id: 'ch13',
      title: '第13章 动态数组 (STL)',
      topics: [
        {
          id: '13.1',
          title: '13.1 vector 容器',
          content: 'vector 是 C++ 标准模板库 (STL) 中最常用的动态数组容器。与普通数组不同，vector 可以根据需要自动调整大小，无需手动管理内存。考点：vector 存储在堆内存中，但在栈上也有控制块；它支持随机访问（O(1)），但在中间插入删除较慢（O(N)）。使用前需引入 <vector> 头文件。',
          codeSnippet: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // 定义一个整型动态数组，初始为空
    vector<int> nums;

    // 添加元素 (自动扩容)
    nums.push_back(10);
    nums.push_back(20);
    nums.push_back(30);

    cout << "当前大小: " << nums.size() << endl; // 输出 3

    // 访问元素
    cout << "首元素: " << nums[0] << endl;      // 使用下标
    cout << "首元素: " << nums.at(0) << endl;   // 使用 at()，更安全(越界会报错)

    // 遍历 vector (C++11 范围 for 循环)
    cout << "所有元素: ";
    for (int x : nums) {
        cout << x << " ";
    }
    cout << endl;

    // 删除最后一个元素
    nums.pop_back();
    cout << "删除后大小: " << nums.size() << endl;

    return 0;
}`
        },
        {
          id: '13.2',
          title: '13.2 string 类深入',
          content: 'std::string 是 C++ 封装好的字符串类，本质上也是一种动态数组（字符容器）。相比 C 风格字符串 (char[])，它提供了丰富的方法来处理文本，如拼接、查找、截取等，且不用担心 \\0 结束符或缓冲区溢出问题。',
          codeSnippet: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Hello";
    string s2 = "World";

    // 1. 字符串拼接
    string s3 = s1 + ", " + s2 + "!";
    cout << s3 << endl; // Hello, World!

    // 2. 获取长度
    cout << "Length: " << s3.length() << endl;

    // 3. 查找子串
    // find 返回子串位置，若找不到返回 string::npos
    int pos = s3.find("World"); 
    if (pos != string::npos) {
        cout << "'World' found at index: " << pos << endl;
    }

    // 4. 截取子串 substr(起始位置, 长度)
    string sub = s3.substr(0, 5); // 从0开始取5个
    cout << "Substring: " << sub << endl; // Hello

    return 0;
}`
        },
        {
          id: '13.3',
          title: '13.3 动态数组与静态数组的对比',
          content: '理解两者的区别对于通过 C++ 考试和面试至关重要。\n\n1. **内存分配**：静态数组 (int a[10]) 通常分配在栈 (Stack) 上，大小必须在编译时确定；动态数组 (vector) 数据存储在堆 (Heap) 上，大小可运行时改变。\n2. **安全性**：静态数组容易越界且难以检测；vector 提供 size() 获取长度，at() 检查边界。\n3. **灵活性**：静态数组无法扩容；vector 支持 push_back 自动扩容。',
          codeSnippet: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // --- 静态数组 ---
    // 大小固定，无法追加元素
    int staticArr[5] = {1, 2, 3, 4, 5}; 
    // staticArr[5] = 6; // 错误！越界且无法扩容

    // --- 动态数组 ---
    // 初始大小为 5，所有元素初始化为 0
    vector<int> dynamicArr(5, 0); 
    
    // 动态扩容
    dynamicArr.push_back(1); // 现在大小变为 6
    
    // 改变大小
    dynamicArr.resize(10); // 现在大小变为 10，新增元素补0
    
    cout << "Vector size: " << dynamicArr.size() << endl; // 10
    cout << "Vector capacity: " << dynamicArr.capacity() << endl; // 容量通常 >= size

    return 0;
}`
        },
        {
          id: '13.4',
          title: '13.4 底层机制：Size vs Capacity',
          content: '理解 `vector` 的内存管理机制是进阶 C++ 的必修课。当 `vector` 需要更多空间时，它通常会分配比当前需求更大的内存块（例如当前容量的 2 倍），以便应对未来的增长。这种策略叫做"预分配"，可以避免每次插入新元素都重新分配内存。\n\n*   **Size (大小)**：容器中实际元素的数量。\n*   **Capacity (容量)**：容器在必须分配新内存之前可以容纳的元素总数。\n*   **Reserve (预留)**：如果你知道大概需要存储多少元素，使用 `reserve()` 可以一次性分配足够的内存，避免多次扩容带来的性能损耗。',
          codeSnippet: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v;
    
    cout << "观察 vector 的自动扩容机制：" << endl;
    cout << "元素个数(Size) \\t 内存容量(Capacity)" << endl;

    // 插入 10 个元素
    for(int i = 1; i <= 10; i++) {
        v.push_back(i);
        // 每次插入后打印状态
        // 你会发现 Capacity 呈阶梯状增长 (如 1, 2, 4, 8, 16...)
        // 这种几何级数的增长保证了均摊时间复杂度为 O(1)
        cout << "Size: " << v.size() << "\\t\\t Capacity: " << v.capacity() << endl;
    }

    cout << "\\n--- 性能优化技巧 ---" << endl;
    vector<int> v2;
    // 如果已知大概需要存 100 个数，直接预留空间
    v2.reserve(100); 
    cout << "预留后 Capacity: " << v2.capacity() << endl; // 100
    
    return 0;
}`
        }
      ]
    },
    {
      id: 'ch14',
      title: '第14章 函数',
      topics: [
        {
          id: '14.1',
          title: '14.1 函数基础与声明',
          content: '函数将大型任务分解为较小的、可管理的代码块。**考点**：如果函数定义在 main 函数之后，必须在 main 之前进行**函数原型声明**（Function Prototype），否则编译会报错。',
          codeSnippet: `#include <iostream>
using namespace std;

// 函数原型声明
int add(int a, int b); 

int main() {
    cout << add(5, 3) << endl; // 调用成功
    return 0;
}

// 函数定义
int add(int a, int b) {
    return a + b;
}`
        },
        {
          id: '14.2',
          title: '14.2 参数传递：值传递 vs 引用传递',
          content: '这是考试中的**核心考点**。\\n*   **值传递**：复制一份数据给函数，函数内部修改不影响外部变量。\\n*   **引用传递**：传递变量的别名（地址），函数内部修改**会**影响外部变量。通常用于交换数值或返回多个结果。',
          codeSnippet: `void swapByValue(int a, int b) {
    int temp = a; a = b; b = temp;
}

void swapByRef(int &a, int &b) {
    int temp = a; a = b; b = temp;
}

int main() {
    int x = 10, y = 20;
    swapByValue(x, y); // x, y 不变
    swapByRef(x, y);   // x, y 互换
}`
        },
        {
          id: '14.3',
          title: '14.3 函数重载与默认参数',
          content: '函数重载允许同名函数存在，只要参数列表不同（类型或数量不同）。**考点**：默认参数必须从右向左定义，且不能与重载产生歧义。',
          codeSnippet: `// 默认参数 b = 1
int power(int a, int b = 2) {
    int res = 1;
    for(int i=0; i<b; i++) res *= a;
    return res;
}

int main() {
    cout << power(3);    // 3^2 = 9
    cout << power(3, 3); // 3^3 = 27
}`
        },
        {
          id: '14.4',
          title: '14.4 递归函数',
          content: '递归是指函数调用自身。**考点**：必须有明确的**基准情况 (Base Case)** 来终止递归，否则会导致栈溢出。经典案例：阶乘、斐波那契。',
          codeSnippet: `int factorial(int n) {
    // 基准情况
    if (n <= 1) return 1;
    // 递归调用
    return n * factorial(n - 1);
}

// factorial(5) -> 5 * 4 * 3 * 2 * 1 = 120`
        },
        {
          id: '14.5',
          title: '14.5 变量作用域：全局 vs 局部',
          content: '局部变量在函数内创建，函数结束销毁。全局变量在程序整个生命周期有效。**考点**：同名时，局部变量优先覆盖全局变量。',
          codeSnippet: `int x = 100; // 全局变量

void func() {
    int x = 5; // 局部变量
    cout << x << endl; // 输出 5
    cout << ::x << endl; // 使用 :: 访问全局变量 100
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
          title: '15.1 指针基础：& 与 *',
          content: '指针是存储内存地址的变量。**核心考点**：\\n*   `&` 取地址运算符：获取变量的内存地址。\\n*   `*` 解引用运算符：访问指针指向的内存地址中的值。\\n*   `nullptr`：C++11 引入的空指针，优于 NULL。',
          codeSnippet: `int val = 42;
int *ptr = &val; // ptr 存储 val 的地址

cout << "Address: " << ptr << endl; // 输出地址 0x...
cout << "Value: " << *ptr << endl;  // 输出值 42

*ptr = 100; // 修改 val 的值
cout << val; // 100`
        },
        {
          id: '15.2',
          title: '15.2 指针与数组 (指针运算)',
          content: '数组名本质上是指向数组首元素的指针常量。**考点**：`p + 1` 并不是地址加 1，而是加上指针所指类型的大小（例如 int 跳过 4 字节）。',
          codeSnippet: `int arr[] = {10, 20, 30};
int *p = arr;

cout << *p << endl;       // 10
cout << *(p + 1) << endl; // 20 (p 移动到下一个 int)

// 遍历数组
for(int i=0; i<3; i++) {
    cout << *(arr + i) << " "; // 等同于 arr[i]
}`
        },
        {
          id: '15.3',
          title: '15.3 const 与指针',
          content: '这是**极高频**的考点，必须区分清楚：\\n1. `const int *p`：**常量指针**。指向的内容不可变，指针指向可变。\\n2. `int * const p`：**指针常量**。指针指向不可变（必须初始化），指向的内容可变。\\n记忆口诀："const 在前，内容限；const 在后，指针固"。',
          codeSnippet: `int a = 10, b = 20;

// 1. 常量指针
const int *p1 = &a;
// *p1 = 30; // 错误！不能修改内容
p1 = &b;     // 正确，可以指向别人

// 2. 指针常量
int * const p2 = &a;
*p2 = 30;    // 正确，可以修改内容
// p2 = &b;  // 错误！指针指向不能变`
        },
        {
          id: '15.4',
          title: '15.4 指针作为函数参数',
          content: '与引用传参类似，传递指针也可以在函数内部修改外部变量。在 C 语言和老式 C++ 代码中很常见。',
          codeSnippet: `void increment(int *n) {
    (*n)++; // 必须加括号，因为 ++ 优先级高于 *
}

int main() {
    int num = 5;
    increment(&num); // 传递地址
    cout << num; // 6
}`
        },
        {
          id: '15.5',
          title: '15.5 动态内存分配 (new/delete)',
          content: '栈内存有限，堆内存很大。使用 `new` 在堆上申请内存，使用 `delete` 释放。**考点**：忘记 `delete` 会导致**内存泄漏**。申请数组要用 `delete[]`。',
          codeSnippet: `// 申请单个整数
int *p = new int(10);
delete p;

// 申请数组
int *arr = new int[100];
arr[0] = 5;
delete[] arr; // 注意这里的 []`
        }
      ]
    },
    {
      id: 'ch16',
      title: '第16章 文件操作',
      topics: [
        {
          id: '16.1',
          title: '16.1 文件流类与打开模式',
          content: '需包含 `<fstream>` 头文件。主要类：`ofstream` (写), `ifstream` (读), `fstream` (读写)。\\n**考点 - 打开模式**：\\n*   `ios::in`：读模式\\n*   `ios::out`：写模式（默认覆盖）\\n*   `ios::app`：追加模式 (Append)，在文件末尾写入。',
          codeSnippet: `#include <fstream>
using namespace std;

int main() {
    // 追加模式打开文件，不会清空原有内容
    ofstream outFile("log.txt", ios::app);
    if (outFile.is_open()) {
        outFile << "New Log Entry\\n";
        outFile.close();
    }
    return 0;
}`
        },
        {
          id: '16.2',
          title: '16.2 文本文件的读写',
          content: '写入就像使用 `cout`，读取就像使用 `cin`。**考点**：如何按行读取文件直到结束？使用 `getline()` 配合 `while` 循环。',
          codeSnippet: `ifstream inFile("data.txt");
string line;

if (inFile.is_open()) {
    // 循环读取每一行，直到文件末尾 (EOF)
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();
} else {
    cout << "无法打开文件";
}`
        },
        {
          id: '16.3',
          title: '16.3 二进制文件读写',
          content: '文本模式会处理换行符转换，二进制模式原样读写内存数据，适合存储结构体或图片。**考点**：使用 `read()` 和 `write()` 函数，并需要强制转换为 `char*`。',
          codeSnippet: `struct Student { char name[20]; int age; };

// 写入二进制
Student s1 = {"Tom", 18};
ofstream out("stu.bin", ios::binary);
out.write((char*)&s1, sizeof(s1));
out.close();

// 读取二进制
Student s2;
ifstream in("stu.bin", ios::binary);
in.read((char*)&s2, sizeof(s2));
cout << s2.name << " " << s2.age;`
        },
        {
          id: '16.4',
          title: '16.4 错误检测与状态',
          content: '文件操作必须进行错误检查。常用方法：`is_open()` 检查是否打开成功，`eof()` 检查是否到末尾，`fail()` 检查是否发生逻辑错误（如格式不匹配）。',
          codeSnippet: `ifstream file("config.txt");
if (!file) {
    cerr << "Error opening file!" << endl;
    return 1;
}`
        }
      ]
    }
  ]
};
