var dt,id,search=location.search,main_left=document.querySelector(".main_left"),main_right=document.querySelector(".main_right");search?(id=search.split("=")[1],async function(){var i=`
            <div class="exzoom" id="exzoom">
                <div class="exzoom_img_box">
                    <ul class='exzoom_img_ul'>
                        <li><img src="${(dt=await promiseAjax({url:"../php/xiangqing.php",data:"id="+id,datatype:"json"})).sony_xiangqing_small_1}"/></li>
                        <li><img src="${dt.sony_xiangqing_small_2}"/></li>
                        <li><img src="${dt.sony_xiangqing_small_3}"/></li>
                        <li><img src="${dt.sony_xiangqing_small_4}"/></li>
                        <li><img src="${dt.sony_xiangqing_small_5}"/></li>
                    </ul>
                </div>
                <div class="exzoom_nav"></div>
                <p class="exzoom_btn">
                    <a href="javascript:void(0);" class="exzoom_prev_btn"> < </a>
                    <a href="javascript:void(0);" class="exzoom_next_btn"> > </a>
                </p>
            </div>
        `,t=`
            <ul>
                <li>${dt.sony_list_title}</li>
                <li>价格<span>${dt.sony_list_price}</span></li>
                <li>数量
                <button>-</button>
                <input type="text" value="1">
                <button>+</button>
                </li>
                <li>
                <button>加入购物车</button>
                </li>
                <li><a href="./car.html">进入购物车</a></li>
            </ul>
        `;main_left.innerHTML=i,main_right.innerHTML=t,$("#exzoom").exzoom(),defaults={navWidth:60,navHeight:60,navItemNum:5,navItemMargin:7,navBorder:1,autoPlay:!1,autoPlayTimeout:5e3}}()):(alert("还未选中商品"),location="./list.html"),main_right.onclick=function(i){var t;"加入购物车"==((i=i||window.event).target||i.srcElement).innerHTML&&((i=localStorage.getItem("cartList1"))?(i=JSON.parse(i),t=0,i.forEach(i=>{i.id==dt.id&&(t++,i.sony_car_number++,console.log(111))}),0==t&&(dt.sony_car_number=1,i.push(dt)),localStorage.setItem("cartList1",JSON.stringify(i))):(dt.sony_car_number=1,localStorage.setItem("cartList1",JSON.stringify([dt]))))};