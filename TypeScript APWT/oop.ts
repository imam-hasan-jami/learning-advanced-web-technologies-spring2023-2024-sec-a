//Classes
class Employee {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    display(): void {
        console.log(`Id = ${this.id}, Name = ${this.name}`);
    }
}

let emp1 = new Employee(1,"Steve");
emp1.display();

//Access Modifiers (public, private, protected)
class Employee1 {
    private id: number;
    private name: string;
    private age: number;
    public isOKay: boolean;
    constructor(id: number, name: string, age: number, isOkay: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOKay = isOkay;
    }

    display(): void {
        console.log(`Id = ${this.id}, Name = ${this.name}, Age = ${this.age}, IsOkay = ${this.isOKay}`);
    }
}

let emp2 = new Employee1(1,"Steve",21,true);
emp2.display();