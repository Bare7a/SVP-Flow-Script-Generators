function createHeader(){
	var ul = $('<ul>');

	for(var index in headerParameters){
		ul.append($('<a/>').attr('href',headerParameters[index].link).append($('<li/>').attr('class','button').text(headerParameters[index].name)));
	}

	$('#header').append(ul);
}

function createFooter(){
	$('#footer').append($('<p/>').html('&copy; 2018 Bare7a').append($('<a/>').attr({'href':'https://github.com/Bare7a/SVP-Flow-Script-Generator', 'target':'_blank'}).text(' GitHub')));
}