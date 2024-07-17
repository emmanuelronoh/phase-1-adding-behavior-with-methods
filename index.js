// Your code here
// Cat class 
class Cat {
    constructor(name, gender) {
      this.name = name || "Unknown";
      this.gender = gender || "Unknown";
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Dog class 
  class Dog {
    constructor(name, gender) {
      this.name = name || "Unknown";
      this.gender = gender || "Unknown";
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  //bird class
  class Bird {
    constructor(name, gender) {
      this.name = name || "Unknown";
      this.gender = gender || "Unknown";
    }
  
    speak() {
      if (this.gender === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else if (this.gender === "female") {
        return `${this.name} says squawk!`;
      } else {
        return "Unknown bird says squawk!";
      }
    }
  }
  
 //exporting classes
  module.exports = {
    Cat,
    Dog,
    Bird
  };
  