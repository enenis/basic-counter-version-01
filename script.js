
let counter=localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
let counterDOM=document.querySelector("#counter")
let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector("#decrease")

counterDOM.innerHTML=counter

increaseDOM.addEventListener("click",ClickEvent)
decreaseDOM.addEventListener("click",ClickEvent)

/*function ClickEvent(){
    console.log(this.id)
    if(this.id=="increase"){
        counterDOM.innerHTML=counter+=1
    }
    else{
        counterDOM.innerHTML=counter-=1
    }
}*/
function ClickEvent(){
    this.id=="increase" ? counter+=1 : counter-=1
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML=counter
}