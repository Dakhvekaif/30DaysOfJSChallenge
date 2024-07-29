class Person{
    constructor(name,age,firstName,lastName){
        this.name = name
        this.age = age
        this.firstName = firstName
        this.lastName = lastName
    }   
    greet(){
    console.log(`Hi! my name is ${this.name} and my age is ${this.age}`)
    }
    static generic_greet(){
        return "Hello everyone how are you all doing"
    }

    get name(){
        const fullname = `${this.firstName} ${this.lastName}`
        return fullname
    }
    set name(value){
        
    }


}       // task 1

const Samay = new Person("samay",34)
const Harry = new Person("Harry",25)  // task 2
Harry.greet()

class Student extends Person{
    static instanceCount = 0;
    constructor(name,age,std_id){   
        super(name,age);
        Student.instanceCount++
        this.std_id = std_id;

    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.std_id}.`);
      }

      static getInstanceCount(){
        return Student.instanceCount
      }
}

const student1 = new Student("Travis",29,"user101")
const student2 = new Student("Jarvis",29,"user102")
const student3 = new Student("Eminem",29,"user103")
console.log(student1.std_id);  // task 3

student1.greet()    // task 4

console.log(Person.generic_greet());  // task 5
console.log(Student.getInstanceCount());  // task 6

const newPerson = new Person("harry",101,"Travis","Scott")
console.log(newPerson.name);

