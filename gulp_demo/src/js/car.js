var name1=getCookie('user')
var box = document.querySelector('.product')
var url=location.href
var cartList=localStorage.getItem('cartList1')
cartList=JSON.parse(cartList) || []
if(name1){
    show()
}else{
    alert('还未登录')
    location='./login.html?pathUrl='+url
}
function show(){
    var str3='';
    var str4;
    if(cartList.length>0){
        cartList.forEach(item=>{
            str2=`
                <div class="product_msg">
                    <ul>
                        <li><img src="${item.sony_list_imgs}" alt="">
                            <h1>${item.sony_list_title}</h1>
                        </li>
                        <li>${item.sony_list_price}</li>
                        <li>
                            <button data-id=${item.id} ${item.sony_car_number<=1?"disabled":''}>-</button>
                            <input type="text" name="shuliang" id="shuliang" value="${item.sony_car_number}">
                            <button data-id=${item.id}>+</button>
                        </li>
                        <li><span>RMB:${item.sony_list_price.split(' ')[2].replace(/,/gi,'')*item.sony_car_number}</span></li>
                        <li data-id=${item.id}>移除</li>
                    </ul>
                </div>
            `
            str3+=str2
        })
        str4=`
        <div class="total">
            <div class="wrap">
            <div class="totalCal">
                <button>结算</button>
                <span>RMB:${total()[1]}</span>
            </div>
            </div>
        </div>
        `
        box.innerHTML=str3
        $('.main').append(str4)
    }else{
        var str1=`
            <h1>购物车没有东西</h1>
        `
        box.innerHTML=str1
    }
}

box.onclick=function(){
    var e=e || window.event
    var target=e.target || e.srcElement
    if(target.innerHTML=='+'){
        var id=target.getAttribute('data-id')
        cartList.forEach(item=>{
            if(item.id==id){
                item.sony_car_number++
            }
        })
        localStorage.setItem('cartList1',JSON.stringify(cartList))
        show()
    }
    if(target.innerHTML=='-'){
        var id=target.getAttribute('data-id')
        cartList.forEach(item=>{
            if(item.id==id){
                item.sony_car_number--
            }
        })
        localStorage.setItem('cartList1',JSON.stringify(cartList))
        show()
    }
    if(target.innerHTML=='移除'){
        var id=target.getAttribute('data-id')
        cartList=cartList.filter(item=>{
            return item.id!=id
        })
        localStorage.setItem('cartList1',JSON.stringify(cartList))
        show()
    }
}
function total(){
    var num=0
    var price=0
    cartList.forEach(item=>{
        price+=item.sony_car_number*item.sony_list_price.split(' ')[2].replace(/,/gi,'')
    })
    return [num,price]
}