function popbox(popbBox,main,objParam){
    var type = objParam.type;
    //关闭按钮
    var showClosestr = "<i id=\"del\"></i>";
    //html字符串
    var str = "";
    //是否显示关闭按钮
    if(!objParam.showClose){
        showClosestr = "";
    }
    //文本提示框
    if("text" == type){
        //给str赋值
        popbBox.innerHTML = '<div class="box text"><div class="textCon"><div><a>'+objParam.title+'</a>'+showClosestr+'<p>' + objParam.content + '</p></div></div></div>';
    }
    //操作确认提示框
    else if("confirm" == type){
        popbBox.innerHTML = '<div class="box confirm"><div class="firmCon"><div><a>'+objParam.title+'</a>'+showClosestr+'</div><div><button id="confirmbtn">确认</button><button id="cancelbtn">取消</button></div></div></div>';
        var confirmbtn = document.getElementById("confirmbtn"),
            cancelbtn = document.getElementById("cancelbtn");
        confirmbtn.onclick = function(){
            objParam.confirm = objParam.confirm === undefined ? function(){} : objParam.confirm;
            objParam.confirm();
            close(popbBox,main);
        }
        cancelbtn.onclick = function(){
            close(popbBox,main);
        }
    }
    //图片
    else if("imgage" == type){
        popbBox.innerHTML = '<div class="box imgage"><div><a>'+objParam.title+'</a><i id=\"del\"></i></div><div><img src="'+objParam.url+'"></div></div>';
    }
    //表单
    else if("form" == type){
        popbBox.innerHTML = '<div class="box formCon"><div><a>'+objParam.title+'</a>'+showClosestr+'</div><div><label>账号：</label><input id="userName" type="text" placeholder="请输入账号"></div><div><label>密码：</label><input id="userPwd" type="password" placeholder="请输入密码"></div><div><button id="login" type="button">登录</button><button id="cancelbtn" type=\"button\">取消</button></div></div>';
        var inp = document.getElementById("userName");
        inp.focus();
        objParam.login = objParam.login === undefined ? function(){} : objParam.login;
        var login = document.getElementById("login"),
            cancelbtn = document.getElementById("cancelbtn");
        login.onclick = function(){
            objParam.login();
        }
        cancelbtn.onclick = function(){
            close(popbBox,main);
        }
    }
    //显示
    add(popbBox,main);
    //隐藏
    del(popbBox,main);
}

//显示
function add(popbBox,main){
        popbBox.classList.add("blocknone");
        main.classList.add("blur");
}
//隐藏
function close(popbBox,main){
    popbBox.classList.remove("blocknone");
    main.classList.remove("blur");
}
function del(popbBox,main){
    var del = document.getElementById("del");
    if(!del){
        return;
    }
    del.onclick = function(){
        close(popbBox,main);
        popbBox.innerHTML = "";
    }
}




