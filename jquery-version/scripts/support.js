var sg500=20,db=25,m4=30,aa12=20,incend=27,hmt301=20,pelletsg=7,pelletdb=12,pelletinc=9,pellethmt=6,pelletvlad=7,salv=.3,vlad=30,hz=20,pellethz=10,knifeli=32,knifehe=64,knifesta=15,plvl=$("#perkLVL").val();$("#perkLVL").on("keyup keydown",function(l){console.log($(this).val()>25),$(this).val()>25&&46!=l.keyCode&&8!=l.keyCode&&(l.preventDefault(),$(this).val(25))}),$(function(){plvl=$("#perkLVL").val(),plvl*=.01,calc1=sg500+plvl*sg500,calc2=db+plvl*db,calc3=m4+plvl*m4,calc4=sg500+plvl*sg500,calc5=incend+plvl*incend,calc6=sg500+plvl*sg500,calc7=vlad+plvl*vlad,calc8=hz+plvl*hz,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),calc5=Math.ceil(calc5),calc6=Math.ceil(calc6),calc7=Math.ceil(calc7),calc8=Math.ceil(calc8),$(".sg1").html(calc1),$(".dbs1").html(calc2),$(".mcs1").html(calc3),$(".aa121").html(calc4),$(".tg1").html(calc5),$(".hm1").html(calc6),$(".ng1").html(calc7),$(".hz1").html(calc8),calc1b=calc1*pelletsg,calc2b=calc2*pelletdb,calc3b=calc3*pelletsg,calc4b=calc4*pelletsg,calc5b=calc5*pelletinc,calc6b=calc6*pellethmt,calc7b=calc7*pelletvlad,calc8b=calc8*pellethz,$(".sg2").html(calc1b),$(".dbs2").html(calc2b),$(".mcs2").html(calc3b),$(".aa122").html(calc4b),$(".tg2").html(calc5b),$(".hm2").html(calc6b),$(".ng2").html(calc7b),$(".hz2").html(calc8b)}),$("#perkLVL, #chkSalvo").on("click change blur focus",function(){$("#chkSalvo").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,calc1=sg500+plvl*sg500+salv*sg500,calc2=db+plvl*db+salv*db,calc3=m4+plvl*m4+salv*m4,calc4=sg500+plvl*sg500+salv*sg500,calc5=incend+plvl*incend+salv*incend,calc6=sg500+plvl*sg500+salv*sg500,calc7=vlad+plvl*vlad+salv*vlad,calc8=hz+plvl*hz+salv*hz,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),calc5=Math.ceil(calc5),calc6=Math.ceil(calc6),calc7=Math.ceil(calc7),calc8=Math.ceil(calc8),$(".sg1").html(calc1),$(".dbs1").html(calc2),$(".mcs1").html(calc3),$(".aa121").html(calc4),$(".tg1").html(calc5),$(".hm1").html(calc6),$(".ng1").html(calc7),$(".hz1").html(calc8),calc1b=calc1*pelletsg,calc2b=calc2*pelletdb,calc3b=calc3*pelletsg,calc4b=calc4*pelletsg,calc5b=calc5*pelletinc,calc6b=calc6*pellethmt,calc7b=calc7*pelletvlad,calc8b=calc8*pellethz,$(".sg2").html(calc1b),$(".dbs2").html(calc2b),$(".mcs2").html(calc3b),$(".aa122").html(calc4b),$(".tg2").html(calc5b),$(".hm2").html(calc6b),$(".ng2").html(calc7b),$(".hz2").html(calc8b)):(plvl=$("#perkLVL").val(),plvl*=.01,calc1=sg500+plvl*sg500,calc2=db+plvl*db,calc3=m4+plvl*m4,calc4=sg500+plvl*sg500,calc5=incend+plvl*incend,calc6=sg500+plvl*sg500,calc7=vlad+plvl*vlad,calc8=hz+plvl*hz,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),calc5=Math.ceil(calc5),calc6=Math.ceil(calc6),calc7=Math.ceil(calc7),calc8=Math.ceil(calc8),$(".sg1").html(calc1),$(".dbs1").html(calc2),$(".mcs1").html(calc3),$(".aa121").html(calc4),$(".tg1").html(calc5),$(".hm1").html(calc6),$(".ng1").html(calc7),$(".hz1").html(calc8),calc1b=calc1*pelletsg,calc2b=calc2*pelletdb,calc3b=calc3*pelletsg,calc4b=calc4*pelletsg,calc5b=calc5*pelletinc,calc6b=calc6*pellethmt,calc7b=calc7*pelletvlad,calc8b=calc8*pellethz,$(".sg2").html(calc1b),$(".dbs2").html(calc2b),$(".mcs2").html(calc3b),$(".aa122").html(calc4b),$(".tg2").html(calc5b),$(".hm2").html(calc6b),$(".ng2").html(calc7b),$(".hz2").html(calc8b))});