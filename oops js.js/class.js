class vehicle{
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        // return('The name of the bike is ${this.name}')
        return (`The name of the bike is ${this.name}.`)
        // console.log(this.name);
    }
}
let bike1 = new vehicle('Hayabusa','suzuki','1340cc');
let bike2 = new vehicle('Ninja','Kawasaki','998cc');
// console.log(bike1.name); //Hayabusa
//  console.log(bike2.maker); //Kawasaki
 console.log(bike1.getDetails());