# OOP's & SOLID

1) Object-oriented programming (OOP) is a programming paradigm fundamental to many programming languages, OOPs, help in creating a working method and variable that can be reused without compromising on security. The emphasis of OOPs concepts is on data rather than on functions and is mainly used in different object-oriented programming languages such as Java, C#, C++, java,javascipt 
* Class
* Object
* Abstraction
* Encapsulation
* Inheritance
* Polymorphism

2) In software development, Object-Oriented Design plays a crucial role when it comes to writing flexible, scalable, maintainable, and reusable code. There are so many benefits of using OOD but every developer should also have the knowledge of the SOLID principle for good object-oriented design in programming. The SOLID principle was introduced by Robert C. Martin, also known as Uncle Bob and it is a coding standard in programming
Expecting a submission on Github/Gitlab in Markdown Format.
* Single Responsibility Principle (SRP)
* Open/Closed Principle
* Liskov’s Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)



## Examples : 
1) Class 
* Classes were introduced in EcmaScript 2015 (ES6) to provide a cleaner way to follow object-oriented programming patterns. In terms of OOP, we often call classes as a ‘blueprint’ of an object
<img width="608" alt="image" src="https://user-images.githubusercontent.com/84218281/192931144-9e4c3752-d3e8-4c24-95fb-3bb4cdf0452f.png">

2) Inheritance
* Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more. Using class inheritance, a class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability.
<img width="482" alt="image" src="https://user-images.githubusercontent.com/84218281/192933032-e5567e96-74c0-4258-9c86-26d3869ad67c.png">

3) Abstraction
* Abstraction hides certain details and only show the essential features of the object. It tries to reduce and factor out details so that the developer can focus on a  few concepts at a time. This approach improves understandability as well as maintainability of the code. Abstraction helps us to reduce code duplication.
<img width="530" alt="image" src="https://user-images.githubusercontent.com/84218281/192933430-bd596158-86b0-4a99-9787-6bea69504def.png">

4) Polymorphism 
* Polymorphism is the presentation of one interface for multiple data types. Let's say we have an Animal class that implements the talk method. If class Dog and Cat inherit talk() from class Animal, object dog and object cat both will talk but in a different form.
 <img width="453" alt="image" src="https://user-images.githubusercontent.com/84218281/192933656-39d39935-f7e3-4ac4-ae66-21b539fd10c7.png">

5) Encapsulation
* What is encapsulation and its example?
Encapsulation is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates. Another way to think about encapsulation is, that it is a protective shield that prevents the data from being accessed by the code outside this shield.
 <img width="570" alt="image" src="https://user-images.githubusercontent.com/84218281/192935840-0ee93cf6-5172-487f-86a6-73b67c18a698.png">



## SOLID
1) Single Responsibility Principle (SRP) : "An object should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the object."

Traditionally when people talk about this principle they think about classes (although the original idea comes from UNIX development), they think about extracting behavior into multiple classes and handling a proper separation of concerns.
Although functional programming languages don't have classes the same principle holds true. Functions should be small reusable pieces of code that you can compose freely to create complex behavior.

This can be extracted to almost anything, once your functions are small, the modules where they are located they should also form a cohesive closure that does only one thing and does it well.

As long as your function or class or module has only one reason to change then you are applying this principle.
 
 2) Open/Closed Principle : "Software entities ... should be open for extension, but closed for modification."

This principle is usually instantly related to inheritance. A well-defined parent class that holds functionality and children of this class extend or reuse the mentioned functionality. In reality, it just means that we should be able to reuse and extend code without having to modify the original implementation.

Instead of using inheritance, Functional Programming achieves this by using two tools. Composition to create new behaviors from previously defined functions and higher-order functions to change functionality at runtime, btw if you are interested in reading more about these topics you can check my series Functional Programming for the object-oriented developer.
3) Liskov’s Substitution Principle (LSP) : "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."

Again when people generally think about this principle the first idea that comes to their head is that if the parent class has some behavior, their children should not break that behavior, but this is not the only applicable case, LSP also applies in case we use generic or parametric programming where we create functions that work on a variety of types, they all hold a common truth that makes them interchangeable.

This pattern is super common in functional programming, where you create functions that embrace polymorphic types (aka generics) to ensure that one set of inputs can seamlessly be substituted for another without any changes to the underlying code.

4) Interface Segregation Principle (ISP) : "Many client-specific interfaces are better than one general-purpose interface."

This is an easy one, but many people, including the ones that brought the topic to my attention, get too attached to the word "interface" and they automatically refer to the concept of interfaces in languages like C# or Java, they think that if you don't have interfaces then this principle cannot be applied.

In reality, every interaction between components is done by an interface. When you use functions from a module, you are using the disposed interface of that module, even if we are in a dynamically typed language, that interface still exists. The point of this is that the way you create modules(or classes or interfaces or API's or whatever) needs to be cohesive, you should provide one clear way of doing things instead of many, and you should expose only what is necessary for the users to perform the specific task.

5) Dependency Inversion Principle (DIP): "One should depend upon abstractions, [not] concretions."

In languages like C#, this is achieved by using two tools. One is to create interfaces to define contracts of a predefined functionality. The other is to use dependency injection so that users of that functionality don't manually instantiate the concrete class, instead, they receive an instance of the interface through their constructor and they just call the appropriate methods on the instance.

In functional programming, abstractions are the default way of handling code, functions are abstractions too, especially in functional programming where we care more about the "shape" of the data instead of to which specific type they are attached to. This creates the possibility to freely change the implementation at runtime by passing functions as parameters to other functions or even returning functions as results from the computation.
## References Section
* reference Link for OOP's : https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/
* reference Link for SOLID : https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/
* reference for code : https://github.com/akshayshetty744/Akshay_life_skils_track-/blob/main/OOP's.js


