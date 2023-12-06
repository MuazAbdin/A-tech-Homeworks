class Document {
  EmployeeName = "";
  constructor(name) {
    this.EmployeeName = name;
  }
}

class Employee {
  name = "";
  constructor(name) {
    this.name = name;
  }

  work(office) {
    for (let i = 0; i < 10; i++) office.documents.push(new Document(this.name));
  }
}

class Manager {
  name = "";
  employees = [];

  constructor(name) {
    this.name = name;
  }

  hireEmployee(name) {
    this.employees.push(new Employee(name));
  }

  askEmployeesToWork(office) {
    this.employees.forEach((e) => e.work(office));
  }
}

class Cleaner {
  name = "";
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  documents = [];
  managers = [];
  cleaners = [];

  hireManager(name) {
    this.managers.push(new Manager(name));
  }
  hireCleaner(name) {
    this.cleaners.push(new Cleaner(name));
  }

  startWorkDay() {
    this.managers.forEach((m) => m.askEmployeesToWork(this));
    this.cleaners.forEach((c) => c.clean());
  }
}
