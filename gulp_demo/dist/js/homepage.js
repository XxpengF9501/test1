var news_lis=$(".part1").children().last().children(),news_uls=$(".news").find("ul");console.log(news_uls),async function(){var i=await promiseAjax({url:"../php/homepage.php",datatype:"json"});for(let e=0;e<=4;e++){var s=`
    <li>
    <div class="img"><a href="#"><img src="${i[e].homepage_img}" alt=""></a></div>
    <div class="news_left">
      <div class="date">${i[e].homepage_time}</div>
      <div class="msg">${i[e].homepage_title}</div>
    </div>
    </li>
  `;news_uls[0].innerHTML+=s}for(let e=5;e<=9;e++){s=`
    <li>
    <div class="img"><a href="#"><img src="${i[e].homepage_img}" alt=""></a></div>
    <div class="news_left">
      <div class="date">${i[e].homepage_time}</div>
      <div class="msg">${i[e].homepage_title}</div>
    </div>
    </li>
  `;news_uls[1].innerHTML+=s}for(let e=10;e<=14;e++){s=`
    <li>
    <div class="img"><a href="#"><img src="${i[e].homepage_img}" alt=""></a></div>
    <div class="news_left">
      <div class="date">${i[e].homepage_time}</div>
      <div class="msg">${i[e].homepage_title}</div>
    </div>
    </li>
  `;news_uls[2].innerHTML+=s}}(),$(".left>ul").children().on("mouseover",function(){$(".product").css("display","block")}),$(".product").on("mouseout",function(){$(".product").css("display","none")}),console.log($(".left>ul").children());