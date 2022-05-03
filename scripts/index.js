import {header,footer} from "../component/navbar.js"

document.getElementById("header").innerHTML=header()


document.getElementById("footer").innerHTML=footer()



let slideimg=["https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg","https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg","https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg"]

function slidingimage()
{
    let i=0

    let slidingshow=document.getElementById("slidingshow")
    let image=document.createElement("img")
    setInterval(function(){
        if(slideimg.length==i)
        {
            i=0
        }
        image.src=slideimg[i]
        slidingshow.append(image)
        i++
    },2000)
}

slidingimage()

// Read more function

function myFunction() {
   
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }