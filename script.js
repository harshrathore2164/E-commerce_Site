function Redirect() {
    window.open("index.html");
  }
  
  var data = [
    {
      id: 0,
      name: "product0",
      url: "img/products/f1.jpg",
      price: "78",
    },
    {
      id: 1,
      name: "product1",
      url: "img/products/f2.jpg",
      price: "80",
    },
    {
      id: 2,
      name: "product2",
      url: "img/products/f3.jpg",
      price: "82",
    },
    {
      id: 3,
      name: "product3",
      url: "img/products/f2.jpg",
      price: "85",
    },
    {
      id: 4,
      name: "product4",
      url: "img/products/f5.jpg",
      price: "90",
    },
    {
      id: 5,
      name: "product5",
      url: "img/products/f6.jpg",
      price: "95",
    },
    {
      id: 6,
      name: "product6",
      url: "img/products/f4.jpg",
      price: "100",
    },
    {
      id: 7,
      name: "product7",
      url: "img/products/f8.jpg",
      price: "120",
    },
  ];
  
  showProductDetailData = () => {
    let productData = localStorage.getItem("data");
    var data = JSON.parse(productData);
  
    document.getElementById(
      "prodetails"
    ).innerHTML = `<div class="single-pro-image">
    <img src="${data.url}" width="100%" id="Mainimg" alt="">
  
  <div class="small-img-group">
      <div class="small-img-col">
          <img src="img/products/f1.jpg"  width="100%" id="small-img" alt="">
      </div>
      <div class="small-img-col">
          <img src="img/products/f4.jpg"  width="100%" id="small-img" alt="">
      </div>
      <div class="small-img-col">
          <img src="img/products/f5.jpg"  width="100%" id="small-img" alt="">
      </div>
      <div class="small-img-col">
          <img src="img/products/f6.jpg"  width="100%" id="small-img" alt="">
      </div>
  </div>
  </div>
  
  <div class="single-pro-details">
    <h6>Home / T-Shirt</h6>
    <h4>${data.name}</h4>
    <h2>$${data.price}</h2>
    <select>
        <option value="">Select Size</option>
        <option value="">XL</option>
        <option value="">XXL</option>
        <option value="">Small</option>
        <option value="">Large</option>
    </select>
    <input type="number" value="1" min="1">
    <button class="normal ">Add to cart</button>
    <h4>Product Details</h4>
    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sapiente quasi veritatis facilis voluptas modi nobis illum maxime, 
        quam nam et iusto debitis ex ipsam, libero dignissimos nisi possimus 
        deleniti eaque impedit odit, eius explicabo officia consequatur. Cum 
        veniam sed et eum doloribus officiis corporis animi, dolor nobis dolorum quod rem, 
        perferendis harum aspernatur consectetur vel natus molestiae similique velit libero. 
    </span>
  </div>`;
  };
  
  var cart = [];
  deleteCartdetails = (i) => {
    var getCartList = JSON.parse(localStorage.cart);
    getCartList.pop(i);
    localStorage.cart = JSON.stringify(getCartList);
  
    location.reload();
    for (let i = 0; i < getCartList.length; i++) {
      document.getElementsByClassName("details")[0].innerHTML = `<tr>
        <!-- <td><i class="far fa-times-cirle"><a href="#"></a></i></td> -->
        <td><i class="fad fa-trash" onclick=deleteCartdetails(${i})></i></td>
        <td><img src="${getCartList[i].url}" alt=""></td>
        <td>${getCartList[i].name}</td>
        <td>${getCartList[i].price}</td>
      </tr>`;
    }
  };
  
  cartDetails = () => {
    var getCartList = JSON.parse(localStorage.cart);
  
    // let productData = localStorage.getItem("data");
    // var data = JSON.parse(productData);
    // cart.push({ id: data.id, name: data.name, img: data.url, price: data.price });
  
    for (let i = 0; i < getCartList.length; i++) {
      document.getElementsByClassName("details")[0].innerHTML += `<tr>
        <!-- <td><i class="far fa-times-cirle"><a href="#"></a></i></td> -->
        <td><i class="fad fa-trash" onclick=deleteCartdetails(${i})></i></td>
        <td><img src="${getCartList[i].url}" alt=""></td>
        <td>${getCartList[i].name}</td>
        <td>${getCartList[i].price}</td>
      </tr>`;
    }
  
    // console.log(getCartList);
  };
  
  productDetailPage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    location.assign("sproduct.html");
    console.log(data.name);
  };

  
  addToCart = (data) => {
    // localStorage.setItem("data", JSON.stringify(data));
    cart.push(data);
    localStorage.cart = JSON.stringify(cart);
    alert(`${data.name} is added to cart`);
  };

  total= ()=>{
      var getCartList = JSON.parse(localStorage.cart);
      localStorage.cart = JSON.stringify(getCartList);
      console.log(localStorage.cart);
      var tot=0;
      for (let i = 0; i < getCartList.length; i++) {
        console.log(getCartList[i].price);
        var num = parseInt(getCartList[i].price);
        tot+=num;
      };
      // console.log(tot);
      var str = tot.toString();
      // console.log(str);
      document.getElementById("finale").innerHTML="&#8377;" + str;
      document.getElementById("finale2").innerHTML="&#8377;" + str;
  }
  
  getData = () => {
    for (let i = 0; i < data.length; i++) {
      document.getElementsByClassName(
        "pro-container"
      )[0].innerHTML += `<div class="pro" >
          <img onclick="productDetailPage(data[${i}])" src="${data[i].url}" alt="" />
          <div class="des">
            <span>${data[i].name}</span>
            <h5>${data[i].name}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>${data[i].price}Rs</h4>
          </div>
          <!-- <a href="#"><i class="fal fa-shopping cart"></i></a> -->
          <!-- <a href="#" onclick="productDetailPage()"><i class="fal fa-shopping-cart cart"></i></a> -->
          <button onclick="addToCart(data[${i}])"><i class="fal fa-shopping-cart cart"></i></button>
        </div>`;
    }
  };
