let divEmployees= document.getElementById("divEmployees");
class Person {
    name="";
    email="";
    age=0;
    resume="";
    id=0;
    static total =0;
    constructor(name,email,age,resume){
        this.name=name;
        this.email=email.toLowerCase();
        this.age=(age<18)?18:age;
        this.resume=resume;
        Person.total ++;
        this.id = Person.total;
    }// constructor
    static printTotal(){
        console.log(Person.total);
    }

    printInfo(div){
        div.insertAdjacentHTML("beforeend",
    
    `
    <div id="card_${this.id}" class="card text-bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">${this.name}</div>
  <div class="card-body">
    <h5 class="card-title">${this.email}</h5>
    <p class="card-text">${this.resume}</p>
    <p class="card-text"><strong>${this.age}</strong></p>
  </div>
</div>`);

    // printInfo(){
    //     console.log(this.name, this.email, this.age, this.resume);
    // }//printInfo

}// class Person

}
// let john = new Person("John Doe","jdoe@gmail.com", 17,"Desconocido");
// let jane = new Person("Jane Doe","jane.DOE@GMAIL.com", 26, "Jane");
// john.resume="Otra cosa";
// jane.printInfo();
// john.printInfo();

class Employee extends Person{
    department ="";
    salary = 0.0;
    constructor(name, email, age, resume, department, salary){
        super(name, email, age, resume);
        this.department=department;
        this.salary=salary;
    }
    calculateSalary(){
        return((this.salary*30) * 1.16).toFixed(2);
    }
    printInfo(div){
        super.printInfo(div);
        let cardBody = document.getElementById(`card_${this.id}`)
          .getElementsByClassName("card-body")[0];
          cardBody.insertAdjacentHTML("beforeend",`
          <p class="card-text">${this.department}</p>
          <p class="card-text text-end"><strong>${this.calculateSalary()}</strong></p>`

          );
        // console.log(this.department, this.salary, this.calculateSalary());
    }
} // class Employee

// let maritere = new Employee("Maritere","maritere@gmail.com", 21,"Java FullStack Developer","IT",1255.20);
// let dora = new Employee("Dora Garcia","dora.garcia@GMAIL.com", 21, "FullStack Developer", "Development",1115.25);
// let vale = new Employee("Valeria", "valeria.arquieta@gmail.com",21, "FullStack Java Developer", "Development",1205.12);
// maritere.printInfo(divEmployees);
// dora.printInfo(divEmployees);
// vale.printInfo(divEmployees);

let employees = [];
employees.push(
    new Employee("Maritere","maritere@gmail.com", 21,"Java FullStack Developer","IT",1255.20),
    new Employee("Dora Garcia","dora.garcia@GMAIL.com", 21, "FullStack Developer", "Development",1115.25),
    new Employee("Valeria", "valeria.arquieta@gmail.com",21, "FullStack Java Developer", "Development",1205.12),
    new Employee("Carolina","caro@gmail.com",21,"FullStack Developer","Development",1225.12)
);

employees.forEach( e => e.printInfo(divEmployees));

// let john =new Person();
// john.name="John Doe";
// john.age = 40;
// john.email="jdoe@gmail.com";

// john.printInfo(); // En lugar de esto , se hace el procedimiento de arriba