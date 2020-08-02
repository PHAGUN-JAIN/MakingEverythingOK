// JavaScript Document
$(document).ready(function () {
	$("div#main img.background").width($(window).width());
	$("div#main img.background").height($(window).height());
	$('div#show').height($(window).height());
	$("div#button").css("backgroundPosition","left top");
	$("div#progress").hide();
	$("div#answer").hide();
	$("div#show").hide();
	$("div#d form input[type='image']").attr("src","images/donate.gif");
	

	


	var text = $('p.names').text();
	var length = text.length;
	thanks(length);	
});  //ready

$(window).on('load', function(){
	$('div#d form input[type="image"]').hover(function(){$(this).attr("src","https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif");},function(){$(this).attr("src","images/donate.gif");});
	
	$("div#button").on('click', 
		function () {$("div#answer").hide(); $(this).animate({opacity:1},0,function(){$(this).css({backgroundPosition: 'left 50%'})}).delay(500).
		animate({opacity:1},0,function(){$(this).css({backgroundPosition: 'left top'})}).delay(500).
		animate({opacity:1},0,function(){$(this).css({backgroundPosition: 'left bottom'})},0,showprogress());}
	);
	
	$('div#answer p.button').click(function(){$('div#answer').fadeOut(300); $('div#show').fadeIn(300);});
	$('div#show div.close').click(function(){$('div#show').hide(); $("img.background").attr("src","images/background.jpg"); $("div#button").css({backgroundPosition: 'left top'})});
		
})

$(window).resize(function(){$("div#main img.background").width($(window).width()); $("div#main img.background").height($(window).height()); $('div#show').height($(window).height());});

function thanks(length)
{
	var x = '-'+Math.round(length*5.2)+'px';
	var time = length*250;
	$('p.names').animate({'marginLeft':x},time,function(){$(this).animate({'marginLeft':'0px'},0,function(){thanks(length);})});
}


function showprogress()
{
	$("div#progress").show(0).animate({opacity:0},0,function(){ }).delay(1200).animate({opacity:1},100,function(){$("img.background").attr("src","images/background-blur.jpg"); $("div#line").animate({width: '350px'},8000,function(){$("div#line").width("0px"); $("div#progress").hide(); $("div#answer").show(0);});});
}