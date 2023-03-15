let logged_member = JSON.parse(localStorage.getItem('logged_member'));

let total = localStorage.getItem("total")
document.querySelector('.cart-counter').innerHTML = total;
if (logged_member) {
let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);
let cart_content = "";
cart.forEach(item => {
    //more icons at https://icons.getbootstrap.com/
    cart_content += `<tr>
                <td>${item.product.productTitle}</td>
                <td><input type="text" value='${item.quantity}' /></td>
                <td><a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></a></td>
                </tr>`;
});
    cart_content+= `<tr>
    <td>grand total</td>
    <td id="total">${total} </td>

</tr>`
document.querySelector('tbody').innerHTML = cart_content;
} else {
//the member is not logged in redirect to registration
window.location.replace('/customer.html');
}

//Q10 from script.js to load frome the local storage and display 
welcomeLoggedUser();
function welcomeLoggedUser() {
    let logged_member = JSON.parse(localStorage.getItem('logged_member'));
    if (logged_member) {
        document.getElementById('logged_member').innerHTML = `Welcome ${logged_member.name} `;
    }
}
