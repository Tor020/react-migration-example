var varm=30,ak47=40,LMG=30,scar=55,_9mm=15,knifeli=32,knifehe=64,knifesta=15,hpr=.3,clco=1.1,plvl=$("#perkLVL").val();$(function(){plvl=$("#perkLVL").val(),plvl*=.01,calc1=varm+plvl*varm,calc2=ak47+plvl*ak47,calc3=scar+plvl*scar,calc4=LMG+plvl*LMG,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),$(".res1").html(calc1),$(".res2").html(calc2),$(".res3").html(calc3),$(".LMG").html(calc4)}),$("#perkLVL").on("keyup keydown",function(c){$(this).val()>25&&46!=c.keyCode&&8!=c.keyCode&&(c.preventDefault(),$(this).val(25))}),$("#perkLVL, #chkHPR").on("click change blur focus",function(){$("#chkHPR").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,calc1=varm+hpr*varm+plvl*varm,calc2=ak47+hpr*ak47+plvl*ak47,calc3=scar+hpr*scar+plvl*scar,calc4=LMG+hpr*LMG+plvl*LMG,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),$(".res1").html(calc1),$(".res2").html(calc2),$(".res3").html(calc3),$(".LMG").html(calc4)):(plvl=$("#perkLVL").val(),plvl*=.01,calc1=varm+plvl*varm,calc2=ak47+plvl*ak47,calc3=scar+plvl*scar,calc4=LMG+plvl*LMG,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),$(".res1").html(calc1),$(".res2").html(calc2),$(".res3").html(calc3),$(".LMG").html(calc4))});