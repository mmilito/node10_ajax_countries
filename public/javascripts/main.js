// CLIENT SIDE CODE

// all countries in a list
var allCountries = function(){
	$.get('/countreez',function(data){
		//console.log(data);
		for (var i=0;i<data.length;i++){
		// console.log(data[i]);
		 	$('.big-country-list')
		 		.append('<li id=list-'+i+'>'+data[i].name+'</li>');
		 	$('#list-'+i).append('<button type="button" data-id='+data[i]._id+' class="btn btn-default"'+
				'aria-label="glyphicon-plane">Been Here!')
		  	if (data[i].hasTraveled){
 				$('#list-'+i).append('<span class="glyphicon glyphicon-plane"'+
				'aria-hidden="true"></span></button>');
				$('#list-'+i+' .btn').addClass("btn-success");
		 	}
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
		 			'Region: '+dataFromServer[0].region+'<br>'+
		 			'Been There: '+dataFromServer[0].hasTraveled+
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

	$(document).on('click','.btn',function(e){
		e.preventDefault();
		var targetID=$(this).attr('data-id');
		$.get('/beenHere/'+targetID,function(dataBackServer){
			//console.log(targetID);
 			$('[data-id="'+targetID+'"]').after('<span class="glyphicon glyphicon-plane"'+
				'aria-hidden="true"></span></button>');
			$('[data-id="'+targetID+'"]').addClass("btn-success");
		});
	});


}); // doc on ready