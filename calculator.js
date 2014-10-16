var first=0;
var second=0;
var total=0;
var msg="";
var txt1="";
var eq="";
$(document).ready(function(){

$(".unlimited").on("click","button",function(){
    first=+$(this).val();
    $(".txt").val(first);

if(msg=="+"){
    total=second+first;

}
if(msg=="-"){
    total=second-first;

}
if(msg=="*"){
    total=second*first;

}
if(msg=="/"){
    total=second/first;

}





    second=first;


});


$(".action").on("click","button",function(){



msg=$(this).val();
if(msg=="="){
  $(".txt").val(total);
      if (total!=0 ){
      second=total;
      msg="";
}
}

 if (msg=="clr"){
$(".txt").val("");
first=0;
second=0;
total=0;
 }


    });

});













