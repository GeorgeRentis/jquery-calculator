var first=500;
var second=0;
var total=0;
var msg;

$(document).ready(function(){

$(".unlimited").on("click","button",function(){
    first=+$(this).val();
    $(".txt").val(first);

if(msg=="+"){
    total=second+first;
    $(".txt").val(total);
}
if(msg=="-"){
    total=second-first;
    $(".txt").val(total);
}
if(msg=="*"){
    total=second*first;
    $(".txt").val(total);
}
if(msg=="/"){
    total=second/first;
    $(".txt").val(total);
}

if (total!=0 ){
    second=total;
    msg="";
}
else{
    second=first;
}


});


$(".action").on("click","button",function(){
msg=$(this).val();
if(msg=="clr"){
    total=0;
    msg="";
    $(".txt").val("0");
}
    });

});