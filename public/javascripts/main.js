// CLIENT SIDE CODE


$(document).on('ready',function(){

	$('.btn').on('click',function(){
		$.get('/countreez',function(data){
			for (var i=0;i<10;i++){
			// console.log(data.countries[i]);
			
			$('#indiv-list')
				.append('<li>'+data.countries[i].name+'</li>');

			}
		});
			
	});




}); // doc on ready