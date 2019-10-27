<html>
<head>
	<title>Template example</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Zykin Yuriy, yurazsoft@gmail.com">
	<link href="css/test.css?t=<?php echo(microtime(true));?>" rel="stylesheet" media="screen">
	<script src="js/jquery-3.2.1.min.js" type="text/javascript" charset="UTF-8"></script>
	<script src="js/js.js?t=<?php echo(microtime(true));?>" type="text/javascript" charset="UTF-8"></script>
</head>
<body>

<div id="top"></div>
<div class="floatDiv" id="divPercent"></div>
<div id="infoblocks"></div>
<div class="floatDiv" id="divMenuBtn">Menu<div id="menuLink"></div></div>

<script>


var blocksCount=15;

let s='';
for(var i=1;i<=blocksCount;i++){s+=generateLink(i);}
$('#top').html(s);

s='';
for(var i=1;i<=blocksCount;i++){s+=generateLinkMenu(i);}
$('#menuLink').html('<hr>'+s+'<hr><br>');

s='';
for(var i=1;i<=blocksCount;i++){s+=generateInfoblock(i);}
$('#infoblocks').html(s);

$('.animate-link').click(function(e) {
	e.preventDefault();
	var aid = $(this).attr("href");
	let num=parseInt(aid.substr(10,3));
	let a=0;
	for(var i=1;i<num;i++){
		a=a+$('#infoblock'+i).height();
		}
	$('#infoblocks').animate({scrollTop: a},1000);
});

$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

$('#infoblocks').scrollEnd(function(){
		$("#divPercent").hide(250);
}, 1000);

$('#infoblocks').scroll(function() {
	let a=0;
	for(var i=1;i<=blocksCount;i++){
		a=a+$('#infoblock'+i).height();
		}
	var scrollPercent = roundTo0(100 * $('#infoblocks').scrollTop() / (a-$('#infoblocks').height()));
	$('#divPercent').html(scrollPercent+' %');
	$('#divPercent').css("display","block");
	if ($('#divPercent').is(":hidden")){
		$('#divPercent').show(150);
	}
});

$('#divMenuBtn').mouseover(function(){
	$('#menuLink').show();
});

$('#divMenuBtn').mouseout(function(){
	$('#menuLink').hide();
});

</script>

</body>
</html>