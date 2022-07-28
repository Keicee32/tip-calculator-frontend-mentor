'use strict'

let bills = document.getElementById('bills')
let custom = document.getElementById('custom')
let people = document.getElementById('people')
let btnValue = document.querySelectorAll('.btn-accent')
let tipValue = document.getElementById('tip-value')
let totalValue = document.getElementById('total-value')
let btnReset = document.querySelector('.btn-reset')
let errors = document.querySelector('.error')
let result = ''

let error = (input) => {
    if(input.value === '') {
        input.style.border = '2px solid crimson'
        errors.classList.remove('hide')
    }
    
}

let success = (input) => {
    if(input.value !== '') {
        input.style.border = '2px solid hsl(172, 67%, 45%)'
        errors.classList.add('hide')
    }
}

let checkInput = (x) => {
    if(bills.value !== '' && people.value !== '') {
        result = (x / 100) * bills.value
        let tip = result / people.value
        let total = tip + (bills.value / people.value)
        tipValue.textContent = `$${tip.toFixed(2)}`
        totalValue.textContent = `$${total.toFixed(2)}`
    } 
}

btnValue.forEach(btn => {
    btn.addEventListener('click', () => {
        let x = btn.textContent.replace('%', '')
        error(people)
        error(bills)
        checkInput(x)
    })
})

custom.addEventListener('keyup', () => checkInput(custom.value))

people.addEventListener('keyup', () => success(people))

bills.addEventListener('keyup', () => success(bills))

btnReset.addEventListener('click', () => {
    tipValue.textContent = '$0.00'
    totalValue.textContent = '$0.00'
    custom.value = bills.value = people.value = ''
    bills.style.border = people.style.border = ''
    errors.classList.add('hide')
})
