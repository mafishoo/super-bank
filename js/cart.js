let logged_member = JSON.parse(localStorage.getItem('logged_member'));

let total = localStorage.getItem("total")
document.querySelector('.cart-counter').innerHTML = total;
let totalPrice = 0;
let productId = []
if (logged_member) {
let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);
let cart_content = "";

cart.forEach(item => {
    productId.push(item.product.id);
    totalPrice = totalPrice + item.product.productPrice * item.quantity 
    console.log(totalPrice )
    //more icons at https://icons.getbootstrap.com/
    cart_content += `<tr>
                <td>${item.product.productTitle}</td>
                <td><input type="text" value='${item.quantity}' /></td>
                <td><a href='#' onlick="SomeDeleteRowFunction()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></a></td>
                </tr>`;
});

cart_content += `<tr>
<td>grand total</td>
<td>${total}</td>

</tr>`
document.querySelector('tbody').innerHTML = cart_content;
} else {
//the member is not logged in redirect to registration
window.location.replace('/customer.html');
}

// question 12
let checkout = document.getElementById("checkout")
checkout.addEventListener("click" , function(){

    let loggedMember = JSON.parse(localStorage.getItem("logged_member"))
    
    if (loggedMember && parseInt(loggedMember.deposit) >= totalPrice){

       alert(`you have sufficient money. the total price = ${totalPrice}`)
      loggedMember = {
        name: loggedMember.name, 
        email: loggedMember.email,
        password: loggedMember.password, 
        deposit: loggedMember.deposit - totalPrice
      }
      
      let orders = [{productid: productId,email : loggedMember.email, amount : totalPrice, date: new Date() }]
      localStorage.setItem("orders",JSON.stringify(orders))
      
      localStorage.setItem("logged_member", JSON.stringify(loggedMember))
      
      localStorage.removeItem("cart") // we do this to empty cart after checkout
      localStorage.removeItem("total") // we do this to make total price zero after checkout
     // document.getElementById("myTable").deleteRow(0).closest();

    }
    else {
        alert(`you don't have sufficient money. the total price = ${totalPrice} but the deposit you is ${loggedMember.deposit}`)
    }
   
})
// document.getElementById("delete").addEventListener("click",function() {
//     // event.target will be the input element.
//     var td = event.target.parentNode; 
//     console.log(td)
//     var tr = td.parentNode.parentNode; // the row to be removed
//     tr.parentNode.removeChild(tr);
// })

//Q10 from script.js to load frome the local storage and display 
welcomeLoggedUser();
function welcomeLoggedUser() {
    let logged_member = JSON.parse(localStorage.getItem('logged_member'));
    if (logged_member) {
        document.getElementById('logged_member').innerHTML = `Welcome ${logged_member.name} `;
    }
}

