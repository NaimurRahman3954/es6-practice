 class Parent{
     constructor(){
         this.fatherName = "Schwarzenegger";
     }
 }
 class Child extends Parent{
     constructor(name){
        super();
        this.name = name;
     }

     // DON'T write "function" while declaring a function inside a class
     getFullName(){
         return this.name + " " + this.fatherName;
     }
 } 

 const baby = new Child("Arnold");
 const baby2 = new Child("Tom");
 console.log(baby);
 console.log(baby2);
 console.log(baby.getFullName()); //getFullName is a function/ method. So () must be added with it.
