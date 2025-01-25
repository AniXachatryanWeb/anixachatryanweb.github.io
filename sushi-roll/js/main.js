"use strict";
let menu=document.querySelector(".menu");
let menuIcon=document.querySelector(".menu-icon");
let faBars=document.querySelector(".fa-bars");
let faXmark=document.querySelector(".fa-xmark");

menuIcon.addEventListener("click",function(){
    menu.classList.toggle("menu-show");
    faBars.classList.toggle("menu-show");
    faXmark.classList.toggle("menu-show");
    faBars.classList.toggle("hibeen");
})

let scrolBtn=document.querySelector(".scrolBtn");
let scrolBtnBy=document.querySelector(".scrolBtnBy")


// scrolBtnBy.addEventListener("click",function(){
//     window.scrollTo(0,0)
//     });
//     scrolBtn.addEventListener("click",function(){
//         window.scrollBy(0,200)
//         });
 







let rolls=[
    {
        name:"Унаги ролл",
        price:199,
        img:"./img/image1.jpg",
        recipe:"Лосось, кунжут, рис, 4 шт.",
        countRoll:4
    },
    {
        name:"Яки хамачи",
        price:299,
        img:"./img/image2.jpg",
        recipe:"Лосось, латук, авакадо, мягкий сыр, .",
        countRoll:4

    },
    {
        name:"Окинава ролл",
        price:299,
        img:"./img/image3.jpg",
        recipe:"Креветка темпура, огурец, мягкий сыр, кунжу.",
        countRoll:4
    },
    {
        name:"Чиз угорь",
        price:399,
        img:"./img/image4.jpg",
        recipe:"Лосось, авокадо, майонез, огурцец и тобико, ",
        countRoll:6
    },
       
        {
            name:"Кинуки",
            price:299,
            img:"./img/image4.jpg",
            recipe:"Креветки, огурец, лук зеленый, нори, кунжут,",
            countRoll:6
    
        },
    
        {
            name:"Филадельфия",
            price:299,
            img:"./img/image6.jpg",
            recipe:"Лосось, сыр сливочный, рис, нори",
            countRoll:6
    
        }
    
]






let rollcontainer=document.querySelector(".roll-container");
 let result=document.querySelector(".result")
 let allCountContainer=document.querySelector(".all-count-container");
 let allPriceContainer=document.querySelector(".all-price-container");
 let basket=document.querySelector(".basket");


rolls.forEach(function(roll){
    let product=document.createElement("div");
    product.className="product";
    rollcontainer.append(product);


  

    let  productImg=document.createElement("div");
    productImg.className="productImage";
    product.append(productImg);
    productImg.style.backgroundImage=`url(${roll.img})`

    let productInfo=document.createElement("div");
    productInfo.className="productInfo";
    product.append(productInfo);
    productInfo.innerHTML=`
    <h1>${roll.name}</h1>
    <p>${roll.recipe},${roll.countRoll} sht.</p>
    <strong>${roll.price}p.</strong>,
     `
    let orderBtn = document.createElement("button");
    orderBtn.className="orderBtn";
    product.append(orderBtn);
    orderBtn.innerHTML="Заказать";


    

    orderBtn.addEventListener("click",function(){
        let productBig=document.querySelector(".productBig");
        document.body.style.overflow = "hidden";
        productBig.classList.add("show");

    

        let close=document.querySelector(".close");

        close.addEventListener("click", function(){

        productBig.classList.remove("show")
        document.body.style.overflow = "auto";
        })

        let productBigContainer=document.querySelector(".product-big-container")

        productBigContainer.innerHTML=""

  let productBigImg=document.createElement("div");
        productBigImg.className="productBigImg";
        productBigContainer.append(productBigImg);
        productBigImg.style.backgroundImage=`url(${roll.img})`;

  let productBigText=document.createElement("div");
     productBigText.className="productBigText";
     productBigContainer.append(productBigText);
     productBigText.innerHTML=`
     <h2>${roll.name}</h2>
     <strong>${roll.price}</strong>
     <p>${roll.recipe}</p>
     `
let orderBigBtn = document.createElement("button");
    orderBigBtn.innerHTML="Корзина";
    orderBigBtn.className="orderBigBtn";
    productBigText.append(orderBigBtn); 
    orderBigBtn.addEventListener("click",function(){
        let orderContainer=document.querySelector(".order-container")
        orderContainer.classList.add("show");
        productBig.classList.remove("show");
        basket.classList.add("show");


        let closeorderContainer=orderContainer.querySelector(".close")
            closeorderContainer.addEventListener("click",function(){
            orderContainer.classList.remove("show")
            document.body.style.overflow = "auto";
        })
        let orders=document.querySelector(".orders");
        let orderSmall=document.createElement("div");
            orders.append(orderSmall);
            orderSmall.className="orderSmall";

        let orderSmallImg=document.createElement("div");
        orderSmall.append(orderSmallImg);
        orderSmallImg.className="orderSmallImg";
        orderSmallImg.style.backgroundImage=`url(${roll.img})`;

        let orderSmallInfo=document.createElement("div");
        orderSmall.append(orderSmallInfo);
        orderSmallInfo.className="orderSmallInfo";
        let count=1
        orderSmallInfo.innerHTML=`
              <span class=""rollName${roll.name}></span>
              <button class="minus">-</button>
              <span class="countContainer">${count}</span>
              <button class="plus">+</button>
              <span class="price">${roll.price}</span>p.

              <button class="remove">X</button>           
              `

        let removeBtn=orderSmallInfo.querySelector(".remove");
        removeBtn.addEventListener("click",removeTimer)
            function removeTimer(){
            // setTimeout(function(){
            //     removeBtn.parentElement.parentElement.remove();
            //       allPriceCall()
            //       allCountCall()
            // },5000)
            let i=5
            let timerId=setInterval(function(){
                removeBtn.innerHTML=i;
                i--;
                removeBtn.addEventListener("click",function(){
                    clearInterval(timerId);
                    removeBtn.innerHTML="X";
                    removeBtn.removeEventListener("click",removeTimer)
                })
                if(i<0){
                    clearInterval(timerId)
                    removeBtn.parentElement.parentElement.remove();
                    allPriceCall()
                    allCountCall()

                }


            },1000)
                    allPriceCall()
                    allCountCall()
        }
        
            removeBtn.addEventListener("click",function(){
            removeBtn.removeEventListener("click",removeTimer)
           })
           allPriceCall()
           allCountCall()

        let plus=orderSmallInfo.querySelectorAll(".plus") 
           console.log(plus) ;

           let countContainer=orderSmallInfo.querySelector(".countContainer")
            let priceContainer=orderSmallInfo.querySelector(".price")
            let minus=orderSmallInfo.querySelector(".minus") ;

           plus.forEach(function(item){
           item.addEventListener("click",function(){
           count++;
           countContainer.innerHTML=count;
           priceContainer.innerHTML=count*roll.price
           allPriceCall()
           allCountCall()



        })    

   })
   minus.addEventListener("click",function(){
    if(count>1){

    
    count--;
    countContainer.innerHTML=count;
    priceContainer.innerHTML=count*roll.price
    allPriceCall()
    allCountCall()
}

   })
   
})
})
})
function allPriceCall(){

let allPrice=document.querySelectorAll(".price");
 
let sum=0;
console.log(allPrice)
for(let i=0; i<allPrice.length;i++){
    sum=sum+ +allPrice[i].innerHTML

}
console.log(sum);
result.innerHTML=sum+"p.";
allPriceContainer.innerHTML=`=${sum}p.`
}
function allCountCall(){
    let allCount=document.querySelectorAll(".countContainer");
    let sum=0;
    for(let i=0;i<allCount.length;i++){
        sum=sum+ +allCount[i].innerHTML
}   
allCountContainer.innerHTML=sum
if(sum==0){
    basket.classList.remove("show")
}
}