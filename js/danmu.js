var arr = [];
var sendflag = false; 
$(document).ready(function(){
    var showscreen = $("#container");

    var showHeight = showscreen.height();
    var showWidth = showscreen.width();

    var topMin = showscreen.offset().top;
    var topMax = topMin+showHeight;
    var leftMin = showscreen.offset().left;
    var leftMax = leftMin+showWidth;

    $("input").keydown(function(event){
        if(event.keyCode == 13){
                $("#sent").trigger("click");
        }
    })

    
    var getRandomColor = function(){
        return '#'+('00000'+(Math.random()*0xffffff <<0).toString(16)).substr(-6);
    }

    
    $("#sent").click(function(){
        var text = $("#message").val();
        $("#message").val("");
        move_text(text);
    })

     var move_text = function(text){
        var obj=$("<div>"+text+"</div>");
        arr.push(obj);
        showscreen.append(obj);
         var top = Math.random()*(showHeight-obj.height());
         obj.css({
             color:getRandomColor(),   
             position:"relative",      
             height:25,                 
             margin:"-25px 0px",      
             left:showWidth,       
             top:top+20.67,             
         });

         
         var time = 10000 + Math.random()*10000;
         
         obj.animate({
             left:-obj.width()+"px"
         },time,function(){
            
             obj.remove();
         });
     };

    
    $("#clear").click(function(){
        arr.forEach(element => {
            element.remove();
        });
    });
     

    
    $("#sendmuch").click(function(){
        sendflag = !sendflag;
        if(sendflag){
            $("#sendmuch").html("关闭弹幕");
        }else{
            $("#sendmuch").html("开启弹幕");
             
             arr.forEach(element => {
                element.remove();
            });
        }
        autosend();
    });

    var autosend = function(){
        if(!sendflag){
            return;
        }else{
            var index = parseInt(Math.random()*str_add.length);
            move_text(str_add[index]);
            setTimeout(autosend, 60);   
        }
    }
})
