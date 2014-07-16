$(function(){
	$(document).ready(function(){
		(function(){

			function bindSearchUDL(){
				for(var i = 0;i < 3 ;++i){
					(function(i){
						$($(".menuButton")[i]).on("tap",function(){
							$("#searchHdUnderline").css("left",i*33+"%")
						});
					}).call(this,i);
				}
			}

			function changeToResultPage(value){
				
			}

			window.onload = function(){
				bindSearchUDL();
			};
		})();
	});
});