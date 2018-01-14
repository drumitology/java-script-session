var mystring = "crt/r2002_2";

String.prototype.replaceAt = function (index, char) {
    console.log(char.length);
    return this.substr(0, index) + char + this.substr(index + 1);
}

console.log(mystring.replaceAt(4, ''))
