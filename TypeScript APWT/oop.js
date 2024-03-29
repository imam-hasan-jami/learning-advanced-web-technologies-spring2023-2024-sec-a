//Classes
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name));
    };
    return Employee;
}());
var emp1 = new Employee(1, "Steve");
emp1.display();
//Access Modifiers (public, private, protected)
var Employee1 = /** @class */ (function () {
    function Employee1(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOKay = isOkay;
    }
    Employee1.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name, ", Age = ").concat(this.age, ", IsOkay = ").concat(this.isOKay));
    };
    return Employee1;
}());
var emp2 = new Employee1(1, "Steve", 21, true);
emp2.display();
