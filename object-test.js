function Person(name, job) {
  this.name = name;
  this.job = job;
};

Person.prototype.intro = function() {
  console.log(`Hi, I'm ${this.name}, and I work as a ${this.job}.`);
};

let p = new Person('Testy McTesterson', 'Software Developer');
