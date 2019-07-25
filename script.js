$(function(){
	const flkrApiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
	$.getJSON(flkrApiUrl,{
		tags: 'guitar, drums',
		tagmode:'any',
		format:'json'
	}).done(function(data){	
		// console.log(data);
		for (var i = 0; i < 6; i++) {
			const item = data.items[i];
			const link = item.media.m;
			document.getElementById('content').innerHTML += '<img src="'+link+'" alt="foto api">';
		}
	}).fail(function(){
		alert('Deu merda!');
	});
});
