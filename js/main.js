"use strict";



let width=0
let knowledges=document.querySelector(".knowledge-container");
let knowledgeHtml=document.querySelector(".knowledge-html");
let knowledgeCss=document.querySelector(".knowledge-css");
let knowledgeJs=document.querySelector(".knowledge-js");


let indicator=setInterval(function(){
    knowledgeHtml.style.width=width+"%";   
    width++;
    if(width>80){
        clearInterval(indicator)
    }
},50)
let indicatorCss=setInterval(function(){
    knowledgeCss.style.width=width+"%";   
    width++;
    if(width>70){
        clearInterval( indicatorCss)
    }
},60)

let knowledge=setInterval(function(){
    knowledgeJs.style.width=width+"%";   
    width++;
    if(width>50){
        clearInterval(knowledge)
    }
},40)











