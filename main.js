const btndecrease =document.querySelector('.btn-decrease');
const btnincrease =document.querySelector('.btn-increase');
const shownumber =document.querySelector('.shownumber');
const price =document.querySelector('.pricedetails');
const coupons =document.querySelector('.coupons');
const btnadd =document.querySelector('.btnadd');
const Discountapply =document.querySelector('.Discountapply');
const displayprice =document.querySelector('.displayprice');
let count = 0
shownumber.innerHTML = count
price.innerHTML = count
Discountapply.innerHTML = `$ ${count.toFixed(1)}`

function decrease(){
    if(count > 0 ){
        price.innerHTML = `$ ${((count * 23.99)-23.99).toFixed(1)}`
        if(count == 1){
            displayprice.innerHTML =`$ ${(((count * 23.99)-23.99)).toFixed(1)}`
        }else{
            displayprice.innerHTML = `$ ${((4.99+((count * 23.99)-23.99)).toFixed(1))}`
        }
        count -= 1;
        shownumber.innerHTML = count ;
    }
}
function increase(){
    count += 1;
    shownumber.innerHTML = count ;
    price.innerHTML = `$ ${(count * 23.99).toFixed(1)}` 
    displayprice.innerHTML =`$ ${((count * 23.99)+4.99 ).toFixed(1)}`
}
btnadd.addEventListener("click",applycoupons)
function applycoupons(e){
    e.preventDefault();
    const couponsinput =document.querySelector(".couponsinput").value;

    console.log(couponsinput)
    if(couponsinput == "khmer21"){
        Discountapply.innerHTML = `-$${"2.00"}`
       const data = displayprice.innerHTML.trim();
       const cleanedData = data.replace(/[^0-9.]/g, "");
       let value = parseFloat(cleanedData)
       if(!isNaN(value)){
        let discountedValue = value - 2.00;
        displayprice.innerHTML = `$ ${ discountedValue.toFixed(2)}`;
        console.log(discountedValue);
       }else{
        console.error("Invalid price format after cleaning:", data);
       }
    }
}


