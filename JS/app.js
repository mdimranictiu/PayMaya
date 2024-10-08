// Logout button

let logoutbtn=document.getElementById('btn-logout');
logoutbtn.addEventListener('click',function(e){
e.preventDefault();
window.location.href='index.html'
})



// Avaialbale Balance Section
let availableBalance=document.getElementById('availableBalance').innerText;
let availableBalanceNumber=parseFloat(availableBalance);


// Addmoney

document.getElementById('addMoneyBtn').addEventListener('click',(e)=>{
    e.preventDefault();
    const amountADD=document.getElementById('addAmount').value ;
    const addAmountNumber=parseFloat(amountADD);
    const pin = document.getElementById('pin-number').value;
    const pinNumber = parseFloat(pin);
    if(pinNumber!==1234 || addAmountNumber<0){
        document.getElementById('error').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('error').classList.add('hidden');
        }, 3000);
    }
    else{
        availableBalanceNumber=availableBalanceNumber+addAmountNumber;
        document.getElementById('availableBalance').innerText=availableBalanceNumber;
    }
    document.getElementById('pin-number').value="";
    document.getElementById('addAmount').value ="";
})
// cashout section

document.getElementById('CashoutBtn').addEventListener('click',(e)=>{
    e.preventDefault();
    const cashout=document.getElementById('cashoutAmount').value ;
    const cashoutNumber=parseFloat(cashout);
    const cashoutpin = document.getElementById('pin-number-cashout').value;
    const pinNumbercashout = parseFloat(cashoutpin);
    if(pinNumbercashout!==1234 || cashoutNumber<0 || cashoutNumber>availableBalanceNumber){
        document.getElementById('error-cashout').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('error-cashout').classList.add('hidden');
        }, 3000);
    }
    else{
        availableBalanceNumber=availableBalanceNumber-cashoutNumber;
        document.getElementById('availableBalance').innerText=availableBalanceNumber;
    }
    document.getElementById('pin-number-cashout').value="";
    document.getElementById('cashoutNumber').value ="";
})