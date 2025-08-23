// Login Button function
document.getElementById('login').
addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 17399873330;
    const pin = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConv = parseInt(mobileNumberValue);

    const pinValue = document.getElementById('pin-number').value;
    const pinValueCon = parseInt(pinValue);
    
    if( mobileNumber === mobileNumberValueConv && pin === pinValueCon){
        console.log('All value match');
    }
    else{
        console.log('Invalid Credentials');
    }
})
