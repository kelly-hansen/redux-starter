function sayHello() {
  return "Hello World";
}

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);
