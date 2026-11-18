//1. Datatypes Assignments
console.log("1. Identify the Datatypes");
let num=25;
console.log(num);
console.log(typeof num);//number

let program = "JavaScript";
console.log(program);
console.log(typeof program);//string

let isActive=true;
console.log("Am I practising Js?: "+isActive);
console.log(typeof isActive);//boolean

let books;
console.log(books);
console.log(typeof books);//undefined

let Address = null;
console.log(Address);
console.log(typeof Address);//object

let num1=123.45;
console.log(num1);
console.log(typeof num1);//number

let BigInt=12345678901234567890n;
console.log(BigInt);
console.log(typeof BigInt)//Bigint

let Id=[111];
console.log("Id ",Id);
console.log(typeof Id);//object

//2. Variables of Different Datatypes.

console.log("2. Variables of Different Datatypes.")

let EmpName="Satya";
console.log("Employee name is ",EmpName);
console.log(typeof EmpName) //string

let EmpId=1001;
console.log("Employee Id is "+EmpId);
console.log(typeof EmpId)//number

let Attendance=true;
console.log("Employee is Present:", Attendance);
console.log(typeof Attendance)//boolean

let EmpSalary
console.log("Employee salary is "+EmpSalary);
console.log(typeof EmpSalary)//undefined

let EmpAddress=null;
console.log("Employee Address", EmpAddress);
console.log(typeof EmpAddress)//object

let EmpScore=876876678567456698n
console.log("Employee score is: ",EmpScore);
console.log(typeof EmpScore)//bigint

let EmpStatus={};
console.log(EmpStatus);
console.log(typeof EmpStatus)//object

let EmpProjects=[22101,22201];
console.log("Employee projects are",EmpProjects);
console.log(typeof EmpProjects)//object

/*3. Predict the Output Without running the code:
console.log(typeof 100); ->number
console.log(typeof "100");->string
console.log(typeof true);->boolean
console.log(typeof undefined);-->undefined
console.log(typeof null);-->object
console.log(typeof 100n);-->bigInt

Then execute the program and compare your answers.
*/
console.log("Predict the Output Without running the code and Then execute the program and compare your answers." )

let A=100;
console.log(typeof A)//number
let B="100";
console.log(typeof B)//string
let C=true
console.log(typeof C)//boolean
let D
console.log(typeof D)//undefined
let E=null
console.log(typeof E)//object
let F=100n
console.log(typeof F)//bigint

//4. Student Information, Create variables to store:

console.log("4. Student Information_Create variables to store")

let SName="Tara";
let SAge=14;
let SPercent=86.8;
let CourseStatus=true;
let SGrade=[5];

console.log("Student Name:",SName);
console.log(typeof SName)//string

console.log("Student Age:",SAge);
console.log(typeof SAge)//number

console.log("Student percentage:",SPercent);
console.log(typeof SPercent)//number

console.log("Whether the student has completed the course:",CourseStatus);
console.log(typeof CourseStatus)//boolean

console.log("Student's grade:",SGrade);
console.log(typeof SGrade)//object

//5.Create two variables: undefined and null. Print both values and their datatypes.
console.log("5.Create two variables: undefined and null")

let username;
console.log(username);
console.log(typeof username)//undefined

let userEmail=null;
console.log(userEmail);
console.log(typeof userEmail)//object

/*Q&A
1. What is the difference between undefined and null? 
    Undefined - If any variable declared without initialization
    null - something with unknown data type.
2. What does typeof userName return?  -- undefined
3. What does typeof userEmail return? -- object
4. Why is typeof null considered unusual in JavaScript?  -- object
*/
