var submit=document.querySelector('button')
var user=document.querySelector('[type="text"]')
var pass=document.querySelector('[type="password"]')
var search=location.search
submit.onclick=function(){
    var u1=user.value
    var p1=pass.value
    Ajax({
        url:'../php/login.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
            console.log(dt)
            if(dt==1){
                if(search){
                    var new_url=search.split('=')[1]
                    location.href=new_url
                }else{
                    location.href='./list.html'
                }
                setCookie('user',u1)
            }else{
                alert('登录失败')
            }
        }
    })
    return false
}
