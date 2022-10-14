function compute() {
    document.getElementById("statement1").innerHTML = "hello";
    let c, a = 11, b = 5;
    c = a + b;
    document.getElementById("statement1").innerHTML = c;

    const person = { fistname: "Ajit", lastname: "Kumar", address: "Siwan Bihar" };
    
    document.getElementById("personfname").innerHTML = person.fistname;
    document.getElementById("personlname").innerHTML = person.lastname;
    document.getElementById("personaddress").innerHTML = person.address;
}