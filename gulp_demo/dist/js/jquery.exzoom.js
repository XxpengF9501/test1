!function(o,a){let l=null,s=null,h=null,c=null,r=null,u=null,d=0,p=0,m=0,f=null,v=null,g="current",x=null,w=null,_=null,y=null,z=null,I=0,W=0,H=[],$=null,M=null,P=null,b=null,B=null,j=null,k=0,q=0,N=0,T=0,C={},t={navWidth:60,navHeight:60,navItemNum:5,navItemMargin:7,navBorder:1,autoPlay:!0,autoPlayTimeout:2e3},e={init:function(n){n=o.extend({},t,n);l=this,s=l.find(".exzoom_img_box"),u=l.find(".exzoom_img_ul"),f=l.find(".exzoom_nav"),y=l.find(".exzoom_prev_btn"),z=l.find(".exzoom_next_btn"),c=h=l.outerWidth(),C.navWidth=n.navWidth,C.navHeight=n.navHeight,C.navBorder=n.navBorder,C.navItemMargin=n.navItemMargin,C.navItemNum=n.navItemNum,C.autoPlay=n.autoPlay,C.autoPlayTimeout=n.autoPlayTimeout,_=s.find("img"),I=_.length,function(e){let i=setInterval(function(){let n=0;var t=e.length;e.each(function(){this.complete&&n++}),n===t&&(clearInterval(i),function(){s.append("<div class='exzoom_img_ul_outer'></div>"),f.append("<p class='exzoom_nav_inner'></p>"),r=s.find(".exzoom_img_ul_outer"),v=f.find(".exzoom_nav_inner"),r.append(u);for(let t=0;t<I;t++){H[t]=G(_.eq(t));let n=u.find("li").eq(t);n.css("width",h),n.find("img").css({"margin-top":H[t][5],width:H[t][3]})}x=f.find("span"),w=2*C.navBorder+C.navHeight,C.exzoom_navWidth=(w+C.navItemMargin)*C.navItemNum,C.exzoom_nav_innerWidth=(w+C.navItemMargin)*I,x.eq(W).addClass(g),f.css({height:w+"px",width:h-y.width()-z.width()}),v.css({width:C.exzoom_nav_innerWidth+"px"}),x.css({"margin-left":C.navItemMargin+"px",width:C.navWidth+"px",height:C.navHeight+"px"}),p=h*I,m=h*(I-1),u.css("width",p),s.append(`
<div class='exzoom_zoom_outer'>
    <span class='exzoom_zoom'></span>
</div>
<p class='exzoom_preview'>
    <img class='exzoom_preview_img' src='' />
</p>
            `),$=s.find(".exzoom_zoom"),M=s.find(".exzoom_main_img"),P=s.find(".exzoom_zoom_outer"),b=s.find(".exzoom_preview"),B=s.find(".exzoom_preview_img"),s.css({width:c+"px",height:c+"px"}),r.css({width:c+"px",height:c+"px"}),b.css({width:c+"px",height:c+"px",left:c+5+"px"}),E(H[W]),D(),u.on("touchstart",function(n){n=Q(n);k=n.x,q=n.y;n=u.css("left");d=parseInt(n),a.clearInterval(j)}),u.on("touchmove",function(n){n=Q(n);let t;N=n.x,T=n.y,t=d+N-k,t=X(t),u.css("left",t)}),u.on("touchend",function(n){console.log(N<k),N<k?A():N>k&&S(),D()}),P.on("mousedown",function(n){n=Q(n);k=n.x,q=n.y;n=u.css("left");d=parseInt(n)}),P.on("mouseup",function(n){var t=l.offset();k-t.left<h/2?S():k-t.left>h/2&&A()}),l.on("mouseenter",function(){a.clearInterval(j)}),l.on("mouseleave",function(){D()}),P.on("mouseenter",function(){$.css("display","block"),b.css("display","block")}),P.on("mousemove",function(n){let t=$.width()/2,e=P.width()-t,i=P.height()-t,o=n.pageX-P.offset().left,a=n.pageY-P.offset().top,l=o-t,s=a-t;o<=t&&(l=0),o>=e&&(l=e-t),a<=t&&(s=0),a>=i&&(s=i-t),$.css({left:l+"px",top:s+"px"}),B.css({left:-l*b.width()/$.width()+"px",top:-s*b.width()/$.width()+"px"})}),P.on("mouseleave",function(){$.css("display","none"),b.css("display","none")}),b.on("mouseenter",function(){$.css("display","none"),b.css("display","none")}),z.on("click",function(){A()}),y.on("click",function(){S()}),x.hover(function(){W=o(this).index(),Y(W)})}())},100)}(_)},prev:function(){S()},next:function(){A()},setImg:function(){var e=arguments[0];F(e,function(n,t){B.attr("src",e),M.attr("src",e),u.find("li").length===I+1&&u.find("li:last").remove(),u.append('<li style="width: '+h+'px;"><img src="'+e+'"></li>'),E(G(e,n,t))})}};function Q(n){n=n||a.event;let t=n,e,i;return void 0!==n.touches&&0<n.touches.length&&(t=n.touches[0]),e=t.clientX||t.pageX,i=t.clientY||t.pageY,{x:e,y:i}}function X(n){return-n>m?(n=-m,W=0):0<n&&(n=0),n}function Y(n){void 0===n&&alert("exzoom 中的 move 函数的 direction 参数必填"),W>H.length-1&&(W=0),x.eq(W).addClass(g).siblings().removeClass(g);var t=f.width();let e=0;n=(C.navItemMargin+C.navWidth+2*C.navBorder)*(W+1);t<n&&(e=h-n),v.css({left:e});n=X(n=-h*W);u.stop().animate({left:n},500),E(H[W])}function A(){W++,W>I&&(W=I),Y("right")}function S(){W--,W<0&&(W=0),Y("left")}function D(){C.autoPlay&&(j=a.setInterval(function(){W>=I&&(W=0),W++,Y("right")},C.autoPlayTimeout))}function E(n){void 0!==n&&(B.attr("src",n[0]),M.attr("src",n[0]).css({width:n[3]+"px",height:n[4]+"px"}),P.css({width:n[3]+"px",height:n[4]+"px",top:n[5]+"px",left:n[6]+"px",position:"relative"}),$.css({width:n[7]+"px",height:n[7]+"px"}),B.css({width:n[8]+"px",height:n[9]+"px"}))}function F(n,t){let e=new Image;if(e.src=n,void 0===t)return{width:e.width,height:e.height};e.complete?t(e.width,e.height):e.onload=function(){t(e.width,e.height)}}function G(n,t,e){let i,o=[];"string"==typeof n?i=n:(i=n.attr("src"),t=(n=F(i)).width,e=n.height),o[0]=i,o[1]=t,o[2]=e;t=o[1]/o[2];return 1==t?(o[3]=c,o[4]=c,o[5]=0,o[6]=0,o[7]=c/2,o[8]=2*c,o[9]=2*c,v.append(`<span><img src="${i}" width="${C.navWidth}" height="${C.navHeight}"/></span>`)):1<t?(o[3]=c,o[4]=c/t,o[5]=(c-o[4])/2,o[6]=0,o[7]=o[4]/2,o[8]=2*c*t,o[9]=2*c,e=(C.navHeight-C.navWidth/t)/2,v.append(`<span><img src="${i}" width="${C.navWidth}" style='top:${e}px;' /></span>`)):t<1&&(o[3]=c*t,o[4]=c,o[5]=0,o[6]=(c-o[3])/2,o[7]=o[3]/2,o[8]=2*c,o[9]=2*c/t,t=(C.navWidth-C.navHeight*t)/2,v.append(`<span><img src="${i}" height="${C.navHeight}" style="left:${t}px;"/></span>`)),o}o.fn.extend({exzoom:function(n,t){if(0===arguments.length||"object"==typeof n&&!t){if(0!==this.length)return e.init.apply(this,arguments);o.error("Selector is empty when call jQuery.exzomm")}else{if(e[n])return e[n].apply(this,Array.prototype.slice.call(arguments,1));o.error("Method "+n+"does not exist on jQuery.exzomm")}}})}(jQuery,window);