// Class starts with a capital
class Department {
  // Defines the key
  /* private id: string;
  private name: string; */

  // protected makes this property accessible to classes which extend the base class
  protected employees: string[] = [];
  // Tied to this class, executed when object is being created. Initialisation work
  constructor(private readonly id: string, public name: string) { // short cut, so you dont repeat
    // Assigning the passed in parameter, name
    /* this.id = id;
    this.name = n; */
  }

  // this will always refer to an instance of Department class
  describe(this: Department) {
    // include this to access variables within the class
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

// Inheritance in JS
class ITDepartment extends Department {

  private helpDeskIssue: string;

  get mostRecentIssue() {
    // if truthy - so not undefined
    if (this.helpDeskIssue) {
      return this.helpDeskIssue;
    }
    throw new Error('No issue found')
  }

  set mostRecentIssue(value: string) {
    if(!value){
      throw new Error('Please pass in a valid value')
    }
    this.addIssue(value);
  }

  constructor(id: string, public admins: string[], private issues: string[]) {
    super(id, 'IT');
    // Whenever adding a constructor to a class that inherits another class, you need to add
    // super which calls the constructor of the base class
    this.helpDeskIssue = issues[0]
  }

  // Overriding base class implementation
  addEmployee(name: string) {
    if (name === 'Mik') {
      return;
    }
    this.employees.push(name);
  }

  addIssue(text: string){
    this.issues.push(text);
    this.helpDeskIssue = text;
  }
}

const informationTechnology = new ITDepartment('008', ['Mikaela'], ['computer wont start']);
informationTechnology.addEmployee('Mik');

const marketing = new Department('007', 'Marketing');
console.log(marketing)

marketing.addEmployee("Mikaela")
marketing.describe();