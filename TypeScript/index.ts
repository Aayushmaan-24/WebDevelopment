// Basic Types

let age : number = 19
let course : string = "AI - ML"
let isEnrolled : boolean = true


// Arrays
let students : string[] = ["John", "Mary", "Jane"]
let scores : number[] = [90, 80, 70]
let marks : number[][] = [[90,100,80],[70,90,50],[80,90,100]]

// Tuples
let person : [number, string] = [101, "Jane"]


// Objects
let Student : {
    name : string,
    id : number,
    age : number
} = {
    name: "Jack",
    id: 101,
    age: 21
}

// Custom Types
type Student = {
    name: string,
    id: number,
    age: number
}

let student1 : Student = {age: 21, id: 101, name: "Jack"}


//Interfaces - more used
interface Candidate {
    name: string,
    id: number,
    age: number
}
let candidate1 : Candidate = {age: 21, id: 101, name: "Jack"}


//Unions
let result : string | number = "A+"

type ispassing = "pass" | "fail"
let johnStatus : ispassing = "pass"


//functions
function sum(num1 : number , num2 : number) : number {
    return num1 + num2
}

function getFirstElement <ArrType>(arr: ArrType[]) {
    return arr[0]
}
getFirstElement<number>([2,3,4])
getFirstElement<string>(["ab","bc","ca"])
getFirstElement<boolean>([true, false, true])


//Enums
enum Grade {
    freshman = "First year", 
    sophomore = "Second year", 
    junior = "third year", 
    senior = "final year"
}


interface StudentObject {
    name: string,
    id: number,
    grade: Grade
}

function displayStudentInfo(student: StudentObject) : void {
    const StudentInfo : string = `Name: ${student.name}, ID: ${student.id}, Grade: ${student.grade}`
    document.body.innerHTML = StudentInfo
}

displayStudentInfo(
    name: "John",
    id: 101,
    grade: Grade.senior
)