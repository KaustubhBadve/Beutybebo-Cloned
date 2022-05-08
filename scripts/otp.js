
        sendOtp();
    let otp;
    function sendOtp(){
        setTimeout(()=>{
            otp = Math.floor(Math.random() * 900000) + 99999;
            alert(otp);
        },3000)
    }
 


    var priceotp=(localStorage.getItem("Totalprice"))

   

        document.querySelector("#priceTotal").innerText=": ₹ "+" "+priceotp
   



    document.querySelector("#btnpay").addEventListener("click",funbtn)

   function funbtn () {
    var enteredOtp = document.getElementById("input1").value;

    if(otp == enteredOtp){
            document.getElementById("errorMsg").textContent = "";
            document.getElementById("loadinggifdiv").style.display="block"
            document.getElementById("totaldiv").style.opacity="0.2"
            setTimeout(function(){
              
                window.location.href="confirmed.html"
            },4000)
            
}
else{
            document.getElementById("errorMsg").textContent = "Invalid OTP";
         }
        }



    