var p1L =document.querySelector("#page1-left img")
flag=0
p1L.addEventListener("click",function(){
   if(flag==0){
    p1L.style.scale = ".95"
    flag=1;
   } 
   else{
    p1L.style.scale = "1"
    flag=0

   }
    
})

var brand = document.querySelector("#page2-footer h1")

brand.addEventListener("mouseenter",function(){

    brand.innerHTML="BRAND AMBASSADOR <span>VK</span>"

})

brand.addEventListener("mouseleave",function(){

    brand.innerHTML="COLLABORATION <span>X</span> BMTH"

})


var p2r =document.querySelector("#page2-right img")

p2r.addEventListener("click",function(){
   if(flag==0){
    p2r.style.scale = ".75"
    flag=1;
   } 
   else{
    p2r.style.scale = "1"
    flag=0

   }
    
})