document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    
    const phone = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin-number').value;
    
    const phoneNumber = parseFloat(phone);
    const pinNumber = parseFloat(pin);

    if (phoneNumber === 1234 && pinNumber === 1234) {
        window.location.href='home.html'
        
    } 
    else{
        alert("Mobile Number or Pin Number Error");
    }

    // Clear input fields after processing
    document.getElementById('phone-number').value = '';
    document.getElementById('pin-number').value = '';
});
