$("form").submit(function() {
        var input_value = $('input').val();
        var li = $('<li><input type="checkbox"> ' + input_value + ' <button class="btn btn-primary delete" type="button">Delete</button></li>')
        $('#todo').append(li);

 


        li.children(":first").on('click', function() {
            if( $(this).is(':checked') ){	

	        	var myli = $(this).parent();
	        	myli.css('color', 'red');
	        	myli.css('text-decoration', 'line-through');
	        	$('#completed').append(myli);
	        } 
	        else {
	         	var myli = $(this).parent();
	        	myli.css('color', 'black');
	        	myli.css('text-decoration', 'none');
	        	$('#todo').append(myli);
	        };
	        	
        });

	    $('#todo_item').val('');
        return false;
});

$(document).on('click', '.delete', function(e){
	e.preventDefault();
	$(this).parent().remove();
});

