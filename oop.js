console.log("hello")

class  Student{
    constructor(name,age,roll,sclass){
      this.name=name,
      this.age=age,
      this.roll=roll,
      this.sclass=sclass
    }
    data (){
        console.log(`my name is ${this.name} and age is ${this.age}`)
    }
}
let user = new Student("Hafiz ","19")
user.data()

//abstraction

function area(length){
    return 5 * length

}
console.log(area(5))

function pi(radius){
    return Math.PI * radius * radius
}
console.log(pi(5))


class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;       // public property
    this._balance = balance;  // private-ish property (convention: _ prefix)
  }

  // Deposit method
  deposit(amount) {
    if(amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}, new balance: ${this._balance}`);
    }
  }

  // Withdraw method
  withdraw(amount) {
    if(amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrawn ${amount}, new balance: ${this._balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  // Check balance
  getBalance() {
    return this._balance;
  }
}

// Object create karo
let myAccount = new BankAccount("Ali", 1000);

// Methods use karo
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Balance:", myAccount.getBalance());

//Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating");
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  bark() {
    console.log(this.name + " is barking");
  }
}

let dog1 = new Dog("Tommy");
dog1.eat();  // inherited from Animal
dog1.bark(); // specific to Dog


//Polymorphism

class Shape {
  area() {
    console.log("Area method for generic shape");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    console.log("Circle area: " + (Math.PI * this.radius * this.radius));
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    console.log("Rectangle area: " + (this.width * this.height));
  }
}

let shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => shape.area());