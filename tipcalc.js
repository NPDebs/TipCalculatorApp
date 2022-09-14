const totalBill = document.getElementById('billInput')
const totalTip = document.getElementById('tipInput')
const totalPeople = document.getElementById('numberOfPeople')
const billPerPerson = document.getElementById('perPersonTotal')

//Get number of people
let noOfPeople = Number(totalPeople.innerText)

//Function to calc bill
const calculateBill = () => {
    //Receive and typecast bill from user input
    const bill = Number(billInput.value)
    
    //Get tip and convert to %
    const tipPercentage = Number(tipInput.value) / 100
    
    //Calc total tip amount
    const tipAmount = bill * tipPercentage

    //Total bill
    const total = bill + tipAmount

    //Per person total
    const perPersonTotal = total / noOfPeople

    //Alter and display perPersonTotal on DOM
    billPerPerson.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    //Increase no. and update the DOM with new amount
    noOfPeople += 1

    totalPeople.innerText = noOfPeople

    //Re-calc bill using new noOfPeople 
    calculateBill()
}

const decreasePeople = () => {
    //Ensure there is no -ve number of people
    if(noOfPeople <= 1) {
        alert('Hey! Atleast one person ate this meal, you sneaky little fox!')
        return
    }
    //Decrease no. and update the DOM
    noOfPeople -= 1

    totalPeople.innerText = noOfPeople

    calculateBill()
}







//.toLocaleString('en-US')