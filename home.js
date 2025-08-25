const pinNumber = 1234;
const transectionsData = [];

// Get innerText to available balance
// function getInnerTex (id){
//     const element = document.getElementById(id)
//     const elementValue = parseInt(element.innerText)
// //     return elementValue;
// }

//function for Toggling section
function handletoggle(id){
    const forms = document.getElementsByClassName('form')
   for(const form of forms){
    form.style.display = 'none';
   }
   document.getElementById(id).style.display = 'block';
}

//Function for toggling handle button
function handletogglebtn(id){
    const formBtn = document.getElementsByClassName('form-btn')
   for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
   }
   document.getElementById(id).classList.remove('border-gray-300')
   document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
}

document.getElementById('btn-add-money').
addEventListener('click', function(){
    
    const bank = document.getElementById('bank').value
    const account = document.getElementById('account').value
    const amount = parseInt(document.getElementById('amount').value)
    const pin = document.getElementById('pin').value;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    if(account.length < 11 ){
        alert('Please input valid account number');
        return;
    }
    if(pin != pinNumber ){
        alert('Wrong account number or pin number')
        return;
    }

    const totalAvailableBalance = availableBalance + amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transectionsData.push(data);


})

// Cash Out Section
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const outAmout = parseInt(document.getElementById('out-amount').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const outAccount = document.getElementById('out-account').value
    const outPin = document.getElementById('out-pin').value;

    if(outAccount.length < 11){
        alert('Please Enter valid Account Number')
        return;
    }
    if(pinNumber != outPin ){
        alert('Wrong account number or pin number')
        return;
    }

    const totalAvailableBalance = availableBalance - outAmout;

    document.getElementById('available-balance').innerText = totalAvailableBalance;
    
    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transectionsData.push(data);
    
}) 


document.getElementById('transsaction-btn').addEventListener('click', function(){
    document.getElementById("transection-contrainer").addEventListener('click', function(){
        const transectionContrainer = document.getElementById("transection-contrainer")
        for(const transection of transectionsData){
            const div = document.createElement("div")
            div.innerHTML =`
            <div class="bg-white m-5 rounded-3xl p-3 flex justify-between   items-center">
                <div class="flex items-center">
                    <div>
                    <img class= "bg-[#f4f5f7] p-3 m-2 rounded-full" src="./photos/wallet1.png" alt="add money">
                </div>
                <div>
                    <h2>${data.name}</h2>
                    <p class="text-[#08080880]">${data.date}</p>
                </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            `
            transectionContrainer.appendChild(div)
        }
    })
})

// // Toggling feature

document.getElementById('add-money-btn').addEventListener('click', function(){
   handletoggle('addmoney-section');
   handletogglebtn('add-money-btn')
})

document.getElementById('cash-out-btn').addEventListener('click', function(){
     handletoggle('cashout-section')
        handletogglebtn('cash-out-btn')
})

document.getElementById('transfer-btn').addEventListener('click', function(){
     handletoggle('transfer-section')
     handletogglebtn('transfer-btn')
})

document.getElementById('bonus-btn').addEventListener('click', function(){
     handletoggle('bonus-section')
      handletogglebtn('bonus-btn')
})

document.getElementById('pay-btn').addEventListener('click', function(){
     handletoggle('bill-section')
      handletogglebtn('pay-btn')
})

document.getElementById('transsaction-btn').addEventListener('click', function(){
    handletoggle('transection-section')
    handletogglebtn('transsaction-btn')
})
