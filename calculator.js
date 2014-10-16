var first=0;
var second=0;
var third=0;
var total=0;
var msg="";
var txt1="";
var eq="";
var i=0;
var total2=0;
var k=0;
$(document).ready(function(){

$(".unlimited").on("click","button",function(){
    first=+$(this).val();
    if (i>=1){
$(".txt").val(eq+first);
    eq=$(".txt").val();
    ;}

    if (i==0){
$(".txt").val(first);
    eq=$(".txt").val();

    }

i=i+1;



    second=+eq;

});


$(".action").on("click","button",function(){

if (k==0){
third=second;
k=1;
}
msg=$(this).val();
if(msg=="="){
  if(txt1=="+"){
    total=third+second;

}
if(txt1=="-"){
    total=third-second;

}
if(txt1=="*"){
    total=third*second;

}
if(txt1=="/"){
    total=third/second;

}
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
              third=0;
              eq="";
              k=0;
               }
i=0;
if(msg!="=")
{txt1=msg;}

    });

});













