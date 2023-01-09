var keys=document.querySelectorAll("#keyboard>div");
var bag="";
for(var i=0; i<keys.length; i++){
    keys[i].addEventListener("click", myCal)
}
function myCal(){
    var targetNumber = event.target.innerText;

    if(targetNumber=="C"){
        bag="";
        document.getElementById("display").innerText=""
    }
    else if(targetNumber=="="){
        console.log(eval(bag));
        document.getElementById("display").innerText=eval(bag)
    }
    else{
        bag=bag+targetNumber;
        document.getElementById("display").innerText=bag
    }
}