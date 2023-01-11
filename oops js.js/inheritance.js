class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    tostring(){
        return(`Name of person : ${this.name} `);
    }
}
class student extends person{
    constructor(name,id){
        //super keyword for calling the above class connstructor
        super(name);
        this.id = id;
    }
    tostring(){
        return(`${super.tostring()},student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.tostring());