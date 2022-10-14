function download(filename, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/pdf;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
}
document.getElementById("btn").addEventListener("click", function () {
    var text = document.getElementById("text").value;
    var filename = document.getElementById('text').files[0].name;
    download(filename, text);
}, false);

