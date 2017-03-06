/**
 *
 * Created by lenovo on 2016/6/27.
 */

swell.require(['jquery','jquery-form',"underscore"],function (ns) {

    validator = $("#form").validate({
        rules : {
            phone : {
                required : true,
                minlength : 11,
                // 自定义方法：校验手机号在数据库中是否存在
                // checkPhoneExist : true,
                isMobile : true
            },
            code : {
                // digits : true,
                required : true,
                isContainsSpecialChar :  true
            }
        },
        messages : {
            phone : {
                required : "请输入手机号",
                minlength : "确认手机不能小于11个字符",
                isMobile : "请正确填写您的手机号码"
            },
            code : {
                required : "请输入验证码",
                // digits : "验证码应该输入数字",
                isContainsSpecialChar : "含有特殊字符"
            }
        }

    });

    var options = {
        type:"POST",//请求方式：get或post
        dataType:"json",//数据返回类型：xml、json、script
        beforeSerialize:function(){
            alert("表单数据序列化前执行的操作！");
            //$("#txt2").val("java");//如：改变元素的值
        },
        //data:{'txt':"JQuery"},//自定义提交的数据
        beforeSubmit:function(){
            alert("表单提交前执行的操作！");
            return validator.valid();

            //if($("#txt1").val()==""){return false;}//如：验证表单数据是否为空
        },
        success:function(json){//表单提交成功回调函数
            // alert("表单操作完成！操作结果："+json.msg);
        },
        error:function(err){
            alert("表单提交异常！"+err.msg);
            return false;
        }
    };

    log = function (i) {
        console.log(i+"++++");
    };

    $("#form").ajaxForm(options);



    $("#submitbtn").click(function () {
        _.each({one: 1, two: 2, three: 3},log);

        $("#form").submit();
    });
});