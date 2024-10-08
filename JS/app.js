// Logout button

let logoutbtn=document.getElementById('btn-logout');
logoutbtn.addEventListener('click',function(e){
e.preventDefault();
window.location.href='index.html'
})

const time=new Date();
const date=time.getDate();
const month=time.getMonth();
const year=time.getFullYear();
const hour=time.getHours();
const minute=time.getMinutes();
const second=time.getSeconds();

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
    if(pinNumber!==1234 || addAmountNumber<0 || isNaN(addAmountNumber) || addAmountNumber === "" ){
        document.getElementById('error').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('error').classList.add('hidden');
        }, 3000);
    }
    else{
        availableBalanceNumber=availableBalanceNumber+addAmountNumber;
        document.getElementById('availableBalance').innerText=availableBalanceNumber;
        const history_creation=document.createElement('div');
    history_creation.className='rounded p-2 border border-zinc-300 my-2';
    history_creation.innerHTML=
    `
    <p class="text-base font-semibold text-[#111111] mb-5">$${addAmountNumber} was Credited.  Transaction Created: ${date}/${month}/${year}, ${hour}:${minute}:${second} </p>
    `
    const history_parent=document.getElementById('history_parent');
    history_parent.appendChild(history_creation);
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
    if(pinNumbercashout!==1234 || cashoutNumber<0 || isNaN(cashoutNumber) || cashoutNumber === ""  || cashoutNumber>availableBalanceNumber){
        document.getElementById('error-cashout').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('error-cashout').classList.add('hidden');
        }, 3000);
    }
    else{
        availableBalanceNumber=availableBalanceNumber-cashoutNumber;
        document.getElementById('availableBalance').innerText=availableBalanceNumber;
        const history_creation=document.createElement('div');
    history_creation.className='rounded p-2 border border-zinc-300 my-2';
    history_creation.innerHTML=
    `
    <p class="text-base font-semibold text-[#111111] mb-5">$${cashoutNumber} was Debited.  Transaction Created: ${date}/${month}/${year}, ${hour}:${minute}:${second} </p>
    `
    const history_parent=document.getElementById('history_parent');
    history_parent.appendChild(history_creation);
    }
    document.getElementById('pin-number-cashout').value="";
    document.getElementById('cashoutNumber').value ="";
})

// transfer section
document.getElementById('transferBtn').addEventListener('click',(e)=>{
    e.preventDefault();
    const transferAmount=document.getElementById('transferAmount').value ;
    const transferAmountNumber=parseFloat(transferAmount);
    const transferpin = document.getElementById('pin-number-transfer').value;
    const pintransferNumber = parseFloat(transferpin);
    if(isNaN(transferAmountNumber) || transferAmountNumber === "" || pintransferNumber!==1234 || transferAmountNumber<0 || transferAmountNumber>availableBalanceNumber){
        document.getElementById('error-transfer').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('error-transfer').classList.add('hidden');
        }, 3000);
    }
    else{
        availableBalanceNumber=availableBalanceNumber-transferAmountNumber;
        document.getElementById('availableBalance').innerText=availableBalanceNumber;
        const history_creation=document.createElement('div');
    history_creation.className='rounded p-2 border border-zinc-300 my-2';
    history_creation.innerHTML=
    `
    <p class="text-base font-semibold text-[#111111] mb-5">$${transferAmountNumber} was Transfered.  Transaction Created: ${date}/${month}/${year}, ${hour}:${minute}:${second} </p>
    `
    const history_parent=document.getElementById('history_parent');
    history_parent.appendChild(history_creation);
    }
    document.getElementById('transferAmount').value="";
    document.getElementById('pin-number-transfer').value ="";
})
