function LoadCategories(){
    fetch("https://fakestoreapi.in/api/products")
    .then(function(response){
         return response.json();
    })
    .then(function(categories){
        categories.unshift("all");
        categories.map(function(category){
             var option = document.createElement("option");
             option.text = category.toUpperCase();
             option.value = category;
             document.getElementById("lstCategories").appendChild(option);
        })
    })
}

function LoadProducts(url){
    document.querySelector("main").innerHTML = "";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(products){
         products.map(function(product){
             
              var card = document.createElement("div");
              card.className = "card m-2 p-2";
              card.style.width = "200px";
              card.innerHTML = `
                 <img src=${product.image} height="120" class="card-img-top">
                 <div class="card-header overflow-auto" style="height:110px">
                     ${product.title}
                 </div>
                 <div class="card-body">
                   <dl>
                     <dt>Price</dt>
                     <dd>${product.price}</dd>
                     <dt>Rating</dt>
                     <dd>${product.rating.rate} <span class="bi bi-star-fill text-success"></span> [${product.rating.count}] </dd>
                   </dl>
                 </div>
                 <div class="card-footer">
                    <button onclick="AddToCartClick(${product.id})" class="btn btn-warning w-100 bi bi-cart4"> Add to Cart</button>
                 </div>
              `;
             document.querySelector("main").appendChild(card);

         })
    })
}

function bodyload(){
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
    GetCartCount();
}

function CategoryChange(){
    var categoryName = document.getElementById("lstCategories").value;
    if(categoryName==="all") {
        LoadProducts(`https://https://fakestoreapi.com/products`);
    } else {
        LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
}

var cartItems = [];
var cartItemsCount = 0;

function GetCartCount(){
    cartItemsCount = cartItems.length;
    document.getElementById("lblCount").innerHTML = cartItemsCount;
}

function AddToCartClick(id){
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(function(response){
         return response.json();
      })
      .then(function(product){
          cartItems.push(product);
          GetCartCount();
          alert(`${product.title}\nAdded Successfully to your cart`);
      })
}

function LoadCartItems(){
    var totalAmount = 0;
    document.querySelector("tbody").innerHTML = "";
    cartItems.map(function(item){
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        var tdImage = document.createElement("td");
        var tdPrice = document.createElement("td");
        var tdAction = document.createElement("td");

        tdTitle.textContent = item.title;
        tdImage.innerHTML = `<img width="50" height="50" src=${item.image}>`;
        tdPrice.textContent = item.price;
        tdAction.innerHTML = `<button class="btn btn-danger bi bi-trash"></button>`
       

        tr.appendChild(tdTitle);
        tr.appendChild(tdImage);
        tr.appendChild(tdPrice);
        tr.appendChild(tdAction);

        document.querySelector("tbody").appendChild(tr);

    })
    for(var item of cartItems){
          totalAmount+=item.price;
    }
    document.getElementById("total").innerHTML = totalAmount;
}