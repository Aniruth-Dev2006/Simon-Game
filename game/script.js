var arr = [];
var i = 0;
var p = 0;
var ans = 0;
var level = 1;
$(".finalbtnp").on("click",function(){
    $(".upper").hide();
    $(".finalbtnp").hide();
    clicks();
});

function clicks(){
    $(".levels").text("Level "+level);
    $(".levels").addClass("sizz");
    var a = (Math.random()*3)+1;
    a = Math.round(a);
    arr.push(a);
    if(a==1){
        $(".btnp").addClass("pressed");
        var audio = new Audio ("sounds/red.mp3");
        setTimeout(function(){
            $(".btnp").removeClass("pressed");
        },100);
        audio.play();
  
    }
    if(a==2){
        $(".btnp2").addClass("pressed");
        var audio = new Audio ("sounds/blue.mp3");
        setTimeout(function(){
            $(".btnp2").removeClass("pressed");
        },100);
        audio.play();
       
    }
    if(a==3){
        $(".btnp3").addClass("pressed");
        var audio = new Audio ("sounds/yellow.mp3");
        setTimeout(function(){
            $(".btnp3").removeClass("pressed");
        },100);
        audio.play();
  
    }
    if(a==4){
        $(".btnp4").addClass("pressed");
        var audio = new Audio ("sounds/green.mp3");
        setTimeout(function(){
            $(".btnp4").removeClass("pressed");
        },100);
        audio.play();

    }
}

$(".btnp").on("click",function(){
    $(".btnp").addClass("pressed");
        var audio = new Audio ("sounds/red.mp3");
        setTimeout(function(){
            $(".btnp").removeClass("pressed");
        },100);
    audio.play();
    ans = 1;
    checks();


});
$(".btnp2").on("click",function(){
    $(".btnp2").addClass("pressed");
    var audio = new Audio ("sounds/blue.mp3");
    setTimeout(function(){
        $(".btnp2").removeClass("pressed");
    },100);
    audio.play();
    ans = 2;
    checks();
});

$(".btnp3").on("click",function(){
    $(".btnp3").addClass("pressed");
    var audio = new Audio ("sounds/yellow.mp3");
    setTimeout(function(){
        $(".btnp3").removeClass("pressed");
    },100);
    audio.play();
    ans = 3;
    checks();
});

$(".btnp4").on("click",function(){
    $(".btnp4").addClass("pressed");
    var audio = new Audio ("sounds/green.mp3");
    setTimeout(function(){
        $(".btnp4").removeClass("pressed");
    },100);
    audio.play();
    ans = 4;
    checks();
})

function checks(){
    if(ans==arr[p]){
        p = p+1;
        i = i+1;
        if(i==(arr.length)){
            p = 0;
            i = 0;
            setTimeout(function(){
                level = level+1;
                clicks();
            },1000);
        }
        
    }else{
        var audio = new Audio("sounds/wrong.mp3");
        $("body").addClass("bb");
        setTimeout(function(){
            $("body").removeClass("bb");
        },100);
        audio.play();
        $(".levels").text("Press Start");
        arr = [];
        i = 0;
        p = 0;
        ans = 0;
        level = 1;
        $(".finalbtnp").show();
    }
}