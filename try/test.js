function hello(name) {
    console.log(arguments)
    console.log("hello " + name);
    console.log(arguments[3]+1)
}
//hello();
hello("CSS", "HTML", "AAA", 4);