
//for product management page.
let stored_products = JSON.parse(localStorage.getItem('products'));
console.log(stored_products);
const loadForEdit = () => {
    let html_format = stored_products.map(item => {
      let color = `${item.previousPrice > item.productPrice ? "#B9FAA8;" : "white;"}`
     
        return `<tr style="background : ${color}">
        <th scope="row">${item.id}</th>
        <td>${item.productTitle}</td>
        <td>${item.previousPrice ? item.previousPrice : item.productPrice}</td>
        <td>${item.productPrice}</td>
        <td>${item.rating}</td>
        <td><a href="/edit-product.html?id=${item.id}">Edit</a></td>
        
      </tr>`
      
    });
    // if(item.previousPrice > item.productPrice){
    //   console.log('price is grater')
    //   document.querySelector(".tablerow").style.background = "#B9FAA8"
    // }
    document.getElementById('content_holder').innerHTML = 
    `<table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Prev Price</th>
        <th scope="col">Price</th>
        <th scope="col">Rating</th>
        <th scope="col">Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr>`
    + html_format.reduce( (acc, format) => {
      console.log(format)
       if(acc.previousPrice > acc.productPrice){
      console.log(acc)
    //  document.querySelector(".tablerow").style.background = "#B9FAA8"
    }
       return acc + format}

    ); 
      `</tr>   
  </table>`
}

document.getElementById("year").innerHTML = new Date().getFullYear();
let total = localStorage.getItem("total")
document.querySelector('.cart-counter').innerHTML = total;
loadForEdit();
//Q10 from script.js to load frome the local storage and display 
welcomeLoggedUser();
function welcomeLoggedUser() {
    let logged_member = JSON.parse(localStorage.getItem('logged_member'));
    if (logged_member) {
        document.getElementById('logged_member').innerHTML = `Welcome ${logged_member.name} `;
    }
}