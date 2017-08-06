function main(){
    //定义
        //文本提示
    var text = document.getElementById("text"),
        //操作确认
        confirm = document.getElementById("confirm"),
        //图片展示
        imgage = document.getElementById("imgage"),
        //表单填写
        form = document.getElementById("form"),
        //弹出框
        popbBox = document.getElementById("popbBox"),
        //主界面
        main = document.getElementsByTagName("main")[0];
    var str = "";
    //文本提示
    text.onclick = function(){
        popbox(popbBox,main,{
            type: "text",
            showClose: true,
            title: "黑猫",
            content: "动漫作品《我的妹妹哪有这么可爱！》中人物。网络昵称“黑猫”，身为人类时的名字是“五更琉璃”。五更家的长女，是有着漂亮黑长发、皮肤白皙的和风美人，平时一身哥特萝莉装打扮。但是性格阴沉，外表给人的感觉相当难以接近，是相当毒舌、中二病的电波女孩。不坦率，超容易害羞；不善言辞，但在自己的领域里却非常话多；自尊心很强。擅长游戏和料理，喜欢Cosplay、动画、游戏以及同人创作。"
        })
    }
    //操作确认
    confirm.onclick = function(){
        popbox(popbBox,main,{
            type: "confirm",
            showClose: false,
            title: "确认要更换背景图片吗？",
            content: "动漫作品《我的妹妹哪有这么可爱！》中人物。网络昵称“黑猫”，身为人类时的名字是“五更琉璃”。五更家的长女，是有着漂亮黑长发、皮肤白皙的和风美人，平时一身哥特萝莉装打扮。但是性格阴沉，外表给人的感觉相当难以接近，是相当毒舌、中二病的电波女孩。不坦率，超容易害羞；不善言辞，但在自己的领域里却非常话多；自尊心很强。擅长游戏和料理，喜欢Cosplay、动画、游戏以及同人创作。",
            confirm: function() {
                // 获取当前的背景图class
                var currentBgiClass = main.classList;
                // 转化为一个数组
                currentBgiClass = Array.prototype.slice.call(currentBgiClass);
                // 如果是背景图1
                if(currentBgiClass.indexOf("bg-1") != -1) {
                    // 更换为背景图2
                    main.classList.remove("bg-1");
                    main.classList.add("bg-2");
                }
                // 如果是背景图2
                else if(currentBgiClass.indexOf("bg-2") != -1) {
                    // 更换为背景图1
                    main.classList.remove("bg-2");
                    main.classList.add("bg-1");
                }
		    }
        })
    }
    //图片展示
    imgage.onclick = function(){
        popbox(popbBox,main,{
            type: "imgage",
            showClose: true,
            title: "南小鸟",
            url: "img/popbox-imgage-1.jpg"
        })
    }
    //表单填写
    form.onclick = function(){
        popbox(popbBox,main,{
            type: "form",
            showClose: false,
            title: "QQ",
            login: function() {
                // 判断当前输入的账号和密码
                var userName = document.getElementById("userName"),
                    nameVal = userName.value;
                var userPwd = document.getElementById("userPwd"),
                    pwdVal = userPwd.value;
                if(nameVal != "123" || pwdVal != "123") {
                    if(nameVal != "123") {
                        var erroNode = userName.parentElement.firstElementChild;
                        if(erroNode.tagName.toLowerCase() == "p") {
                            return;
                        }
                        var errorNode = document.createElement("p");
                        var errorTxt = document.createTextNode("用户名输入错误，请检查");
                        errorNode.appendChild(errorTxt);
                        errorNode.setAttribute("class", "errInfo");
                        // 当前的DIV节点
                        var formLine = userName.parentElement;
                        // 错误信息插入容器
                        var insertPos = formLine.firstChild;
                        // 在这行div的开头插入错误信息
                        formLine.insertBefore(errorNode,insertPos);
                    }
                    if(pwdVal != "123") {
                        var erroNode = userPwd.parentElement.firstElementChild;
                        if(erroNode.tagName.toLowerCase() == "p") {
                            return;
                        }
                        var errorNode = document.createElement("p");
                        var errorTxt = document.createTextNode("密码输入错误，请检查");
                        errorNode.appendChild(errorTxt);
                        errorNode.setAttribute("class", "errInfo");
                        // 当前的DIV节点
                        var formLine = userPwd.parentElement;
                        // 错误信息插入容器
                        var insertPos = formLine.firstChild;
                        // 在这行div的开头插入错误信息
                        formLine.insertBefore(errorNode,insertPos);
                    }
                    // 清除错误信息
                    userName.onfocus = function() {
                        var erroNode = this.parentElement.firstElementChild;
                        if(erroNode.tagName.toLowerCase() == "p") {
                            erroNode.remove();
                        }
                    }
                    userPwd.onfocus = function() {
                        var erroNode = this.parentElement.firstElementChild;
                        if(erroNode.tagName.toLowerCase() == "p") {
                            erroNode.remove();
                        }
                    }
                    return;
                }
                else {
                    // 获取main标签
                    var main = document.getElementsByTagName("main")[0];
                    // 获取当前弹出框组件
                    var popupMain = document.getElementsByClassName("blocknone")[0];
                    // 隐藏弹框
                    close(popupMain,main);
                }
            }
        })
    }
}

main();