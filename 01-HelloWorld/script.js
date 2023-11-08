const helloWorld = createHelloWorld();

function createHelloWorld() {
  return function() { return "Hello World" }
}

console.log(helloWorld);
