var boneB=.2,boneBal=.5,rack=0,_9mm=15,rev18=30,m1911=50,deagle=91,mag500=150,winch=80,spx=180,hmtp=20,grenp=30,knifeli=32,knifehe=64,knifesta=15;$(function(){$("#rackem").hide(),plvl=$("#perkLVL").val(),plvl*=.01,calc1=rev18+plvl*rev18,calc2=m1911+plvl*m1911,calc3=deagle+plvl*deagle,calc4=mag500+plvl*mag500,calc5=winch+plvl*winch,calc6=hmtp+plvl*hmtp,calc7=grenp+plvl*grenp,calc8=_9mm+plvl*_9mm,calc9=spx+plvl*spx,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),calc5=Math.ceil(calc5),calc6=Math.ceil(calc6),calc7=Math.ceil(calc7),calc8=Math.ceil(calc8),calc9=Math.ceil(calc9),$(".rev1858").html(calc1),$(".m19").html(calc2),$(".de1").html(calc3),$(".mag500").html(calc4),$(".winc").html(calc5),$(".hmt").html(calc6),$(".hx25").html(calc7),calc7*=7,$(".hx25a").html(calc7),$(".9mm").html(calc8),$(".spx").html(calc9)}),$("#perkLVL").on("keyup keydown",function(c){$(this).val()>25&&46!=c.keyCode&&8!=c.keyCode&&(c.preventDefault(),$(this).val(25))}),$("#rackem").on("keyup keydown",function(c){$(this).val()>5&&46!=c.keyCode&&8!=c.keyCode&&(c.preventDefault(),$(this).val(5))}),$("#perkLVL, #chkBone, #rackemchk, #rackem").on("click change blur focus",function(){$("#chkBone").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,calc1=rev18+plvl*rev18+rev18*boneB,calc2=m1911+plvl*m1911+m1911*boneB,calc3=deagle+plvl*deagle+deagle*boneB,calc4=mag500+plvl*mag500+mag500*boneB,calc5=winch+plvl*winch+winch*boneB,calc6=hmtp+plvl*hmtp+hmtp*boneB,calc7=grenp+plvl*grenp+grenp*boneB,calc8=_9mm+plvl*_9mm+_9mm*boneB,calc9=spx+plvl*spx+spx*boneB,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),calc5=Math.ceil(calc5),calc6=Math.ceil(calc6),calc7=Math.ceil(calc7),calc8=Math.ceil(calc8),calc9=Math.ceil(calc9),$(".rev1858").html(calc1),$(".m19").html(calc2),$(".de1").html(calc3),$(".mag500").html(calc4),$(".winc").html(calc5),$(".hmt").html(calc6),$(".hx25").html(calc7),calc7*=7,$(".hx25a").html(calc7),$(".9mm").html(calc8),$(".spx").html(calc9)):$("#rackemchk").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,rack=$("#rackem").val(),rack*=.1,$("#rackem").show(),calc1=rev18+plvl*rev18+rack*rev18,calc2=m1911+plvl*m1911+rack*m1911,calc3=deagle+plvl*deagle+rack*deagle,calc4=mag500+plvl*mag500+rack*mag500,calc5=winch+plvl*winch+rack*winch,calc6=hmtp+plvl*hmtp+rack*hmtp,calc7=grenp+plvl*grenp+rack*grenp,calc8=_9mm+plvl*_9mm+rack*_9mm,calc9=spx+plvl*spx+rack*spx,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),calc5=Math.ceil(calc5),calc6=Math.ceil(calc6),calc7=Math.ceil(calc7),calc8=Math.ceil(calc8),calc9=Math.ceil(calc9),$(".rev1858").html(calc1),$(".m19").html(calc2),$(".de1").html(calc3),$(".mag500").html(calc4),$(".winc").html(calc5),$(".hmt").html(calc6),$(".hx25").html(calc7),calc7*=7,$(".hx25a").html(calc7),$(".9mm").html(calc8),$(".spx").html(calc9)):(plvl=$("#perkLVL").val(),plvl*=.01,$("#rackem").hide(),calc1=rev18+plvl*rev18,calc2=m1911+plvl*m1911,calc3=deagle+plvl*deagle,calc4=mag500+plvl*mag500,calc5=winch+plvl*winch,calc6=hmtp+plvl*hmtp,calc7=grenp+plvl*grenp,calc8=_9mm+plvl*_9mm,calc9=spx+plvl*spx,calc1=Math.ceil(calc1),calc2=Math.ceil(calc2),calc3=Math.ceil(calc3),calc4=Math.ceil(calc4),calc5=Math.ceil(calc5),calc6=Math.ceil(calc6),calc7=Math.ceil(calc7),calc8=Math.ceil(calc8),calc9=Math.ceil(calc9),$(".rev1858").html(calc1),$(".m19").html(calc2),$(".de1").html(calc3),$(".mag500").html(calc4),$(".winc").html(calc5),$(".hmt").html(calc6),$(".hx25").html(calc7),calc7*=7,$(".hx25a").html(calc7),$(".9mm").html(calc8),$(".spx").html(calc9))});