var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function(){
//when user changes value in celsius
let c = this.value;

//celsius to farhenite
let f = (c * 9/5) + 32;
//checking decimal digits
if(!Number.isInteger(f)){
    f = f.toFixed(4);
}
fah.value = f;

});

fah.addEventListener('input', function(){
let f = this.value;
let c = (f-32)*5/9;

if(!Number.isInteger(c)){
    f = f.toFixed(4);
}

cel.value = c;
});