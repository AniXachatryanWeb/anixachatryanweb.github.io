"use strict";

let kits=[
    {
        name:"Унаги мини сет",
        price:899,
        img:"./img/img8.png",
        recipe:"32 ролла",
        countRoll:6

    },
    {
        name:"Калифорния сет",
        price:1999,
        img:"./img/img9.jpeg",
        recipe:"28 роллов",
        countRoll:8
    },
    {
        name:"Сяке сет",
        price:1499,
        img:"./img/imj10.jpg",
        recipe:"24 роллов",
        countRoll:6
    }
]



let kistContain=document.querySelector(".kist-container"); 
kits.forEach(function(kit){
    let kistContainer=document.createElement("div");
    kistContainer.className="sushiroll";
    kistContain.append(kistContainer);





let kitsImg=document.createElement("div");
    kitsImg.className="kitsImg";
    kistContainer.append(kitsImg);
    kitsImg.style.backgroundImage=`url(${kit.img})`



let kistInfo=document.createElement("div");
    kistInfo.className="kistInfo";
    kistContainer.append(kistInfo);
    kistInfo.innerHTML=`
    <h1>${kit.name}</h1>
    <p>${kit.recipe}</p>
    <strong>${kit.recipe}</strong>   
    
    `

let kitsBtn=document.createElement("button");
    kitsBtn.className="kitsBtn";
    kistContainer.append(kitsBtn);
    kitsBtn.innerHTML="Заказать"


    kitsBtn.addEventListener("click",function(){
        let sushiHeader=document.querySelector(".sushiHeader");      
        sushiHeader.classList.add("show");
        document.body.style.overflow = "hidden";
        let closes=document.querySelector(".closes");
        closes.addEventListener("click", function(){
        sushiHeader.classList.remove("show")
        document.body.style.overflow = "auto";
        })
      

    let sushiContainer=document.querySelector(".sushiContainer")
    sushiContainer.innerHTML=""

       
let sushiImg=document.createElement("div");
    sushiImg.className=("shushiImg");
    sushiContainer.append(sushiImg);
    sushiImg.style.backgroundImage=`url(${kit.img})`


let sushiInfo=document.createElement("div");
    sushiInfo.className=("sushiInfo");
    sushiContainer.append(sushiInfo);
    sushiInfo.innerHTML=`
    <h1>${kit.name}</h1>
    <p>${kit.recipe}</p>
    <strong>${kit.price}</strong> <br>
    
    `
    let sushiBigBtn=document.createElement("button");
        sushiBigBtn.className="sushiBigBtn";
        sushiInfo.append(sushiBigBtn);
        sushiBigBtn.innerHTML="карзинка"
        let sushiRegistration=document.querySelector(".sushiRegistration")
  


 sushiBigBtn.addEventListener("click",function(){   
    sushiRegistration.classList.add("show");




    let closes=document.querySelector(".closes");

    closes.addEventListener("click", function(){
        sushiRegistration.classList.remove("show")
        document.body.style.overflow = "auto";
        console.log("ok")
    })





    let shushicontainerimg=document.createElement("div");
    sushiContainer.append(shushicontainerimg);



    


})
})


})


let boxHeader=document.querySelector(".box-header");
let box=document.querySelector(".box");
let sushiContainer=document.querySelector("sushi-container");





