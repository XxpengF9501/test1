var news_lis=$('.part1').children().last().children()
var news_uls=$('.news').find('ul');
console.log(news_uls);
(async function(){
  var dt=await promiseAjax({
    url:'../php/homepage.php',
    datatype:'json',
  })
  for(let i=0;i<=4;i++){
    var str=`
    <li>
    <div class="img"><a href="#"><img src="${dt[i].homepage_img}" alt=""></a></div>
    <div class="news_left">
      <div class="date">${dt[i].homepage_time}</div>
      <div class="msg">${dt[i].homepage_title}</div>
    </div>
    </li>
  `
  news_uls[0].innerHTML+=str
  }
  for(let i=5;i<=9;i++){
    var str=`
    <li>
    <div class="img"><a href="#"><img src="${dt[i].homepage_img}" alt=""></a></div>
    <div class="news_left">
      <div class="date">${dt[i].homepage_time}</div>
      <div class="msg">${dt[i].homepage_title}</div>
    </div>
    </li>
  `
  news_uls[1].innerHTML+=str
  }
  for(let i=10;i<=14;i++){
    var str=`
    <li>
    <div class="img"><a href="#"><img src="${dt[i].homepage_img}" alt=""></a></div>
    <div class="news_left">
      <div class="date">${dt[i].homepage_time}</div>
      <div class="msg">${dt[i].homepage_title}</div>
    </div>
    </li>
  `
  news_uls[2].innerHTML+=str
  }
})()
$('.left>ul').children().on('mouseover',function(){
  $('.product').css('display','block')
})
$('.product').on('mouseout',function(){
  $('.product').css('display','none')
})
console.log($('.left>ul').children())


