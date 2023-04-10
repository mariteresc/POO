class Person {
    name="";
    email="";
    age=0;
    resume="";

    printInfo(){
        console.log(this.name, this.email, this.age, this.resume);
    }

}

let john =new Person();
john.name="John Doe";
john.age = 40;
john.email="jdoe@gmail.com";

john.printInfo();