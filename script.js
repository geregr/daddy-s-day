alert("happy daddy day!")
alert(" press d on keyboard to play tom1")
alert("press r on keyboard to play tom2 ")
alert("press u on keyboard to play tom3")
alert("press m on keyboard to play tom4")
alert("press k on keyboard to play crash")
alert("press i on keyboard to play kick-bass")
alert("press t on keyboard to play snare")
alert("only d,r,u,m,k,i,t will work")
document.getElementById('ji').addEventListener("click",function(){
    document.getElementById("gf").style.color="red"
})
document.getElementById("hg").addEventListener("click",function(){
    document.getElementById("gf").style.color="blue"
})
document.getElementById("jh").addEventListener("click",function(){
    document.getElementById("gf").style.color="yellow"
})
document.getElementById("yt").addEventListener("click",function(){
    document.getElementById("gf").style.color="green"
})
document.getElementById("yu").addEventListener("click",function(){
    document.getElementById("gf").style.color="black"
})
document.addEventListener("keypress",function(p){
    if(p.key ==="d"){
        let gubr = new Audio("./sounds/tom-1.mp3")
        gubr.play()
    }
    if(p.key ==="r"){
        let bu = new Audio("./sounds/tom-2.mp3")
        bu.play()
        }
    if(p.key ==="u"){
        let du = new Audio("./sounds/tom-3.mp3")
        du.play()
    }
    if(p.key ==="m"){
        let fu = new Audio("./sounds/tom-4.mp3")
        fu.play()
    }
if(p.key ==="t"){
    let pu = new Audio("./sounds/snare.mp3")
    pu.play()
}
if(p.key==="k"){
    let eu = new Audio("./sounds/crash.mp3")
    eu.play()
}
if(p.key==="i"){
    let uu = new Audio("./sounds/kick-bass.mp3")
    uu.play()
}

})
