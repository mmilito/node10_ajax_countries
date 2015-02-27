// CLIENT SIDE CODE

// all countries in a list
var allCountries = function(){
	$.get('/countreez',function(data){
		//console.log(data);
		for (var i=0;i<data.length;i++){
		// console.log(data[i]);
		 $('.big-country-list')
		 	.append('<li>'+data[i].name+
		 	// <span class="glyphicon glyphicon-certificate" aria-hidden="true"></span>+
		 	// <span class="glyphicon-class">glyphicon glyphicon-certificate</span>+
		 	'</li>');
		 }
	});
};

var searchCountry = function(e){
	e.preventDefault();
	var searchValue = $('#search-name').val();
	var searchValfromForm = {
		name: searchValue
	};
	$.post('/searchClick',searchValfromForm,function(dataFromServer){
		//console.log('datafromServer',dataFromServer);

		if (dataFromServer.length<1){
			$('.country-list').prepend('<p id="sorry"> Sorry, we didnt find your country </p>');
		} else {
			$('#sorry').remove();
			$('#indiv-list')
		 		.append('<li class="indiv-country"> Name:'+dataFromServer[0].name+'<br>'+
		 			'French Name: '+dataFromServer[0].frenchName+'<br>'+
		 			'Region: '+dataFromServer[0].region+
		 			'</li>');
		}			 	
	});
};

$(document).on('ready',function(){

	$('#btn-load').on('click',function(){
		allCountries();	
	});

	$('#search-btn').on('click',function(e){
		searchCountry(e);
	});


}); // doc on ready