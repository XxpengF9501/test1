var row=document.querySelector('.row')
console.log(row)
var pagination1=document.querySelector('.pagination');
(async function(){
    var dt=await promiseAjax({
        url:'../php/list.php',
        datatype:'json'
    })
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:8,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/8)
        },
        textInfo:{
            first:'首页',
            prev:'上一页',
            next:'下一页',
            last:'尾页'
        },
        cb(m){
            var ar1=dt.slice((m-1)*8,m*8)
            var str=''
            ar1.forEach(item=>{
                str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                  <img src=${item.sony_list_imgs}>
                  <div class="caption">
                    <h3>${item.sony_list_title}</h3>
                    <p>${item.sony_list_price}</p>
                    <p><a href="#" class="btn btn-primary" role="button">加入购物车</a> <a href="../pages/xiangqing.html?id=${item.id}" class="btn btn-default" role="button">查看商品详情</a></p>
                  </div>
                </div>
              </div>
                `
            })
            row.innerHTML=str
        }
    })
})()

