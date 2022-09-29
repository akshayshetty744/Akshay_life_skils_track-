// Class
    class User {

      constructor(name) {
        this.name = name;
      }

      sayHi() {
        alert(this.name);
      }

    }

    // Usage:
    let user = new User("John");
    user.sayHi();
//-----------------------------------------------------------------------------------------
// Inheritance 
    class Bike  {  
      constructor()  
      {  
        this.company="Honda";  
      }  
    }  
    class Vehicle extends Bike {  
      constructor(name,price) {  
       super();  
        this.name=name;  
        this.price=price;  
      }   
    }  
    var v = new Vehicle("Shine","70000");  
    console.log(v);
//--------------------------------------------------------------------------------------------
//Abstraction
class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is ${this.name},Address is: ${this.add}`);
    }
}
 
let person1 = new person('Mukul',21);
person1.add_Address('Delhi');
person1.getDetails();
    function Vehicle()  
    {  
        this.vehicleName= vehicleName;  
        throw new Error("An instance of Abstract class cannot be created");  

    }  
    Vehicle.prototype.display=function()  
    {  
        return this.vehicleName;  
    }  
    var vehicle=new Vehicle(); 

//-----------------------------------------------------------------------------------------------
//Polymorphism 
    class A
      {
         display()
        {
          document.writeln("space is invoked");
        }
      }
    class B extends A
      {
      }
    var b=new B();
    b.display();
//Encapsulation
    class person{
        constructor(name,id){
            this.name = name;
            this.id = id;
        }
        add_Address(add){
            this.add = add;
        }
        getDetails(){
            console.log(`Name is ${this.name},Address is: ${this.add}`);
        }
    }

    let person1 = new person('Mukul',21);
    person1.add_Address('Delhi');
    person1.getDetails();
