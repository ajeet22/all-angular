console.log("Hello");
function multi(p1, p2) {
    document.getElementById("demo").innerHTML = p1 * p2;
}
multi(3, 5);

function Table(n) {
    for (j = 1; j <= n; j++) {
        for (i = 1; i <= 10; i++) {
            document.write(`${j} X ${i} = ${j * i}`);
            document.write("<br>");
            document.getElementById("tabl").innerHTML=j*i; // only last j=5 X i=10 prints 
        }
        document.write("<br>");
    }
}

Table(5); // function call