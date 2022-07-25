// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Employee {
    code: number,
    name: string
};

const employeeObj: Employee = {
    code: 7,
    name: "Strong"
};

const employeeObj2 = {} as Employee
employeeObj2.code = 5;
employeeObj2.name = "Strimg";

const employee1: {code: number, name: string} = {
    code : 1,
    name : "Stramg"
}