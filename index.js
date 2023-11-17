
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = 'You are subscribed!';
    } else {
        subResult.textContent = 'You are NOT subscribed!';
    }

    if(sewNewsBtn.checked & threadsBtn.checked & classicSewingBtn.checked){
        paymentResult.textContent = 'You have subscribed to all three Magazines.';
    }
    else if(sewNewsBtn.checked & threadsBtn.checked){
        paymentResult.textContent = 'You have subscribed to Sew News and Threads Magazines.';
    }
    else if(sewNewsBtn.checked & classicSewingBtn.checked){
        paymentResult.textContent = 'You have subscribed to Sew News and Classic Sewing Magazines.';
    }
    else if(threadsBtn.checked & classicSewingBtn.checked){
        paymentResult.textContent = 'You have subscribed to Threads and Classic Sewing Magazines.';
    }

    else if(sewNewsBtn.checked){
        paymentResult.textContent = 'You have subscribed Sew News Magazine.';
    }
    else if(threadsBtn.checked){
        paymentResult.textContent = 'You have subscribed to Threads Magazine.';
    }
    else if(classicSewingBtn.checked){
        paymentResult.textContent = 'You have subscribed to Classic Sewing Magazine.';
    }
    else{
        paymentResult.textContent = 'Oops! You forgot to make a selection!';
    }
}