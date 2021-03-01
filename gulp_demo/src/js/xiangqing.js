var search=location.search
var main_left=document.querySelector('.main_left')
var main_right=document.querySelector('.main_right')
var dt;
if(search){
    var id=search.split('=')[1];
    (async function(){
        dt=await promiseAjax({
            url:'../php/xiangqing.php',
            data:'id='+id,
            datatype:'json'
        })
        var str=`
            <div class="exzoom" id="exzoom">
                <div class="exzoom_img_box">
                    <ul class='exzoom_img_ul'>
                        <li><img src="${dt.sony_xiangqing_small_1}"/></li>
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
        `
        var str2=`
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
        `
        main_left.innerHTML=str
        main_right.innerHTML=str2
        $("#exzoom").exzoom();
       defaults = {
           "navWidth": 60,//列表每个宽度,该版本中请把宽高填写成一样
           "navHeight": 60,//列表每个高度,该版本中请把宽高填写成一样
           "navItemNum": 5,//列表显示个数
           "navItemMargin": 7,//列表间隔
           "navBorder": 1,//列表边框，没有边框填写0，边框在css中修改
           "autoPlay": false,//是否自动播放
           "autoPlayTimeout": 5000,//播放间隔时间
       }
    })()
}else{
    alert('还未选中商品')
    location='./list.html'
}

main_right.onclick=function(e){
    var e = e || window.event
    var target=e.target || e.srcElement
    if(target.innerHTML=='加入购物车'){
        var cartList=localStorage.getItem('cartList1')
        if(cartList){
            cartList=JSON.parse(cartList)
            var a=0
            cartList.forEach(item=>{
                if(item.id==dt.id){
                    a++
                    item.sony_car_number++
                    console.log(111)
                }
            })
            if(a==0){
                dt.sony_car_number=1
                cartList.push(dt)
            }
           localStorage.setItem('cartList1',JSON.stringify(cartList))
        }else{
            dt['sony_car_number']=1
            localStorage.setItem('cartList1',JSON.stringify([dt]))
        }
    }
}
