var name1=getCookie("user"),box=document.querySelector(".product"),url=location.href,cartList=localStorage.getItem("cartList1");function show(){var t,i="";0<cartList.length?(cartList.forEach(t=>{str2=`
                <div class="product_msg">
                    <ul>
                        <li><img src="${t.sony_list_imgs}" alt="">
                            <h1>${t.sony_list_title}</h1>
                        </li>
                        <li>${t.sony_list_price}</li>
                        <li>
                            <button data-id=${t.id} ${t.sony_car_number<=1?"disabled":""}>-</button>
                            <input type="text" name="shuliang" id="shuliang" value="${t.sony_car_number}">
                            <button data-id=${t.id}>+</button>
                        </li>
                        <li><span>RMB:${t.sony_list_price.split(" ")[2].replace(/,/gi,"")*t.sony_car_number}</span></li>
                        <li data-id=${t.id}>移除</li>
                    </ul>
                </div>
            `,i+=str2}),t=`
        <div class="total">
            <div class="wrap">
            <div class="totalCal">
                <button>结算</button>
                <span>RMB:${total()[1]}</span>
            </div>
            </div>
        </div>
        `,box.innerHTML=i,$(".main").append(t)):box.innerHTML=`
            <h1>购物车没有东西</h1>
        `}function total(){var i=0;return cartList.forEach(t=>{i+=t.sony_car_number*t.sony_list_price.split(" ")[2].replace(/,/gi,"")}),[0,i]}cartList=JSON.parse(cartList)||[],name1?show():(alert("还未登录"),location="./login.html?pathUrl="+url),box.onclick=function(){var i,t=window.event,t=t.target||t.srcElement;"+"==t.innerHTML&&(i=t.getAttribute("data-id"),cartList.forEach(t=>{t.id==i&&t.sony_car_number++}),localStorage.setItem("cartList1",JSON.stringify(cartList)),show()),"-"==t.innerHTML&&(i=t.getAttribute("data-id"),cartList.forEach(t=>{t.id==i&&t.sony_car_number--}),localStorage.setItem("cartList1",JSON.stringify(cartList)),show()),"移除"==t.innerHTML&&(i=t.getAttribute("data-id"),cartList=cartList.filter(t=>t.id!=i),localStorage.setItem("cartList1",JSON.stringify(cartList)),show())};