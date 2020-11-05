const checkBilling = document.querySelector("input[name=billing");
const billingAddressForm = document.querySelector("#billing");

checkBilling.addEventListener('change', function () {
    if(!this.checked) {
        billingAddressForm.classList.remove('hide');
    } else {
        billingAddressForm.classList.add('hide');
    }
})

const addButton = document.querySelector("#addToCart");
const cart = document.querySelector("#cart");
const totalDisplay = document.querySelector("#totalDisplay")
const totalDisplay2 = document.querySelector("#totalDisplay2")

numOfItems = 0

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    const newLi = document.createElement("li");
    const choice1 = document.querySelector("#scentSelect1");
    const choice2 = document.querySelector("#scentSelect2");
    const newContent = document.createTextNode(`The Smell Eraser Dispenser with: ${choice1.value}, and ${choice2.value} included`);
    newLi.appendChild(newContent);
    cart.append(newLi);

    const listItems = cart.childElementCount;
    const subtotal = listItems * 29.99;

    totalDisplay.textContent = `$${subtotal}`;
    totalDisplay2.textContent = `$${subtotal}`;

})