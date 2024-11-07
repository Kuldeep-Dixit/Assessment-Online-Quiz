var questions =["What is Capital of France?","Which Planet is Known as the Red Planet","What is the largest Occean in the Earth?"]
var options = [["Berlin","Madrid","Paris","Rome"],["Earth","Mars","Jupiter","Saturn"],["Atlantic","Indian","Artic","Pacific"]]
var qus = document.querySelector("h4")
var opt = document.querySelectorAll("label")
var btn = document.querySelectorAll("btns")
console.log(opt)
var i=0
if(i==questions.length-1){
    var sub = document.createAttribute("button")
    sub.innerText="Submit"

}
function next(){
    if(i<questions.length-1){
        i+=1
        qus.innerText=questions[i]
        opt[0].innerText=options[i][0]
        opt[1].innerText=options[i][1]
        opt[2].innerText=options[i][2]
        opt[3].innerText=options[i][3]
    }
    
}
function previous(){
    if(i!=0){
       i -=1
        qus.innerText=questions[i]
        opt[0].innerText=options[i][0]
        opt[1].innerText=options[i][1]
        opt[2].innerText=options[i][2]
        opt[3].innerText=options[i][3]
    }
}