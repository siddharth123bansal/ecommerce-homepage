var data=[]
var cred=[]
if(localStorage.getItem("cred") != null){
    cred=JSON.parse(localStorage.getItem("cred"));
}else{
    cred=[{"username":"sid","email":"sid@gmail.com","password":"test1"},
    {"username":"sid1","email":"sid@gmail.com","password":"test12"},
    {"username":"sid2","email":"sid@gmail.com","password":"test123"},]
}
if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem("data"));
} else {
    data = [
        {"id":"1","image":"https:\/\/shorturl.at\/cGKN1","name":"Guitar","price":"500","discount":"200"},
        {"id":"2","image":"https:\/\/shorturl.at\/bwBGI","name":"Television","price":"2000","discount":"5000"},
        {"id":"3","image":"https:\/\/shorturl.at\/bwBGI","name":"Television","price":"2000","discount":"5000"},
        {"id":"4","image":"https:\/\/shorturl.at\/bwBGI","name":"Television","price":"2000","discount":"5000"}
    ];
}
console.log(JSON.parse(localStorage.getItem("cred"))); 
console.log(localStorage.getItem("username"));

if(localStorage.getItem("username")!=null)
{
    document.getElementById('logindata').textContent=localStorage.getItem("username");
    document.getElementById('logindata').setAttribute('href', '#')
}   

const dataContainer = document.getElementById('product-list');
const search = document.getElementById('searchBox');

function renderDataList(dataArray) {
    let innerHTML = '';
    dataArray.forEach(item => {
        // Create a product card element
        let newElement = `
            <div class="product-card">
                <img style="height: 60%;" src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="discount-price">Price: ₹${item.price} <span class="original-price">₹${item.discount}</span></p>
                <button class="btn btn-secondary">Add to Cart</button>
            </div>
        `;
        innerHTML += newElement;
    });
    dataContainer.innerHTML = innerHTML;
}

function filterData(searchText) {
    const filteredData = data.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
    renderDataList(filteredData);
}

renderDataList(data);

search.addEventListener('input', () => {
    const searchText = search.value.trim();
    filterData(searchText);
});
    // renderDataList(data);
const openPopupButton = document.getElementById("openPopupButton");
const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("popupForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("proname").value;
        var price = document.getElementById("proprice").value;
        var discount = document.getElementById("prodis").value;
        data.push({"id":"2","image":"https:\/\/shorturl.at\/bwBGI","name":name,"price":price,"discount":discount})
        renderDataList(data);
        localStorage.setItem("data",JSON.stringify(data));
        var name = document.getElementById("proname").value='';
        var price = document.getElementById("proprice").value='';
        var discount = document.getElementById("prodis").value='';
        popup.style.display = "none";
        console.log("Name: " + name);
        console.log("Email: " + email);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var signup = document.getElementById("signupForm");
    signup.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        cred.push({"username":name,"email":email,"password":password})
        renderDataList(data);
        localStorage.setItem("cred",JSON.stringify(cred));
        localStorage.setItem("username",username);
        username='';
        email='';
        password='';
        console.log("Name: " + localStorage.getItem("username"));
    });
});