// CLIENT SIDE CODE


$(document).on('ready',function(){

	$('#btnLoad').on('click',function(){
		$.get('/countreez',function(data){
			for (var i=0;i<10;i++){
			// console.log(data.countries[i]);
			
			$('#indiv-list')
				.append('<li>'+data.countries[i].name+'</li>');

			}
		});
			
	});

	$('#search-btn').on('click',function(e){
		e.preventDefault();
		var searchValue = $('#search-name').val();
		var searchValfromForm = {
			valueFromClient: searchValue
		};
		$.post('/searchClick',searchValfromForm,function(){
			console.log(searchvalue);
			console.log(searchValfromForm);
		});
		
	});


}); // doc on ready