var row=document.querySelector(".row");console.log(row);var pagination1=document.querySelector(".pagination");!async function(){var i=await promiseAjax({url:"../php/list.php",datatype:"json"});new Pagination(pagination1,{pageInfo:{pagenum:1,pagesize:8,totalsize:i.length,totalpage:Math.ceil(i.length/8)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"},cb:function(t){var t=i.slice(8*(t-1),8*t),a="";t.forEach(t=>{a+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                  <img src=${t.sony_list_imgs}>
                  <div class="caption">
                    <h3>${t.sony_list_title}</h3>
                    <p>${t.sony_list_price}</p>
                    <p><a href="#" class="btn btn-primary" role="button">加入购物车</a> <a href="../pages/xiangqing.html?id=${t.id}" class="btn btn-default" role="button">查看商品详情</a></p>
                  </div>
                </div>
              </div>
                `}),row.innerHTML=a}})}();