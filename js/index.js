$(function(){
			//轮播图
		$('#banner').carousel({
			interval:200000
		})
		
	})
$('li.dropdown').mouseover(function() {   
 $(this).addClass('open');    
}).mouseout(function() { 
	$(this).removeClass('open');    
});

//		$(function(){
//			$('#HoverNav').find('a').mouseover(function(){
//				$(this).parent().addClass('open')
//			})
//			$('#HoverNav').find('.HoverNavLi>a').mouseout(function(){
//				$(this).parent().removeClass('open')
//			})
//		})
$('.ellipsis-tow').each(function(){
 //设置显示获取字符串的字数  这个根绝要求 看需要大概显示几行
    var maxwidth=26;   
    if($(this).text().length>maxwidth){
         //截取字符串
        $(this).text($(this).text().substring(0,maxwidth));
        //多余的用省略号显示
        $(this).html($(this).html()+'...');
    }
});
$('.ellipsis-three').each(function(){
 //设置显示获取字符串的字数  这个根绝要求 看需要大概显示几行
    var maxwidth=160;   
    if($(this).text().length>maxwidth){
         //截取字符串
        $(this).text($(this).text().substring(0,maxwidth));
        //多余的用省略号显示
        $(this).html($(this).html()+'...');
    }
});
//导航跳转对应的选线卡内容
var hash = location.hash;	
console.log(hash)
var tab = $('.click-nav li');
var con = $('.container>.tab-content>.tab-pane');	
for(var i=0;i<con.length;i++){
	var mm = con[i];
	var selectCon = "#"+ $(mm).attr('id');
	if(hash == selectCon){
		tab.siblings().removeClass('active');
		con.siblings().removeClass('active');
		$(tab[i]).addClass('active');
		$(con[i]).addClass('active in');
	}
}
//$('.ellipsis-small-tow').each(function(){
// //设置显示获取字符串的字数  这个根绝要求 看需要大概显示几行
//  var maxwidth=50;   
//  if($(this).text().length>maxwidth){
//       //截取字符串
//      $(this).text($(this).text().substring(0,maxwidth));
//      //多余的用省略号显示
//      $(this).html($(this).html()+'...');
//  }
//});

