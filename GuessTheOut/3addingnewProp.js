function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  const member = new Person('Lydia', 'Hallie');

  console.log(member.getFullName());
//   if we use below method we will not get any error because this method will be added to all instances of Person
// Person.prototype.getFullName = function() {
  // return `${this.firstName} ${this.lastName}`;
//}

  // O/p 
  //TypeError: member.getFullName is not a function
  //Because we are adding method to the Person Constructor after creating the member instance so it will throw TypeError because memeber instance does not have 
  //getFullName method