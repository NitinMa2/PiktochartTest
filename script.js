var count = 0;	//To help in naming div ids
set_interaction()		//Calling function at beginning of execution

// To handle the addition of divs when user uplloads images
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        	// Adding images in the sidepane
            $('ul')
            	.append("<li><img src=\""+e.target.result+"\" class=\"img-rounded\" alt=\"Damn\"/></li>" );
            // Adding images in the canvas
        	$('#containerDiv')
      			.append("<div id=\"draggableDiv"+(++count)+"\" class=\"divClass\"><img class=\"user_img\" src="+e.target.result+"></div>")
        };

        reader.readAsDataURL(input.files[0]);

        // Timeout to enable above functionality
        setTimeout(set_interaction, 100);
    }
}

// To make the divs draggable and resizeable
function set_interaction(){
	$(document).ready(function() {
		$('.user_img').parent().draggable({
			containment: '#containerDiv',
			cursor: "grabbing"
		});
		$('.user_img').resizable({
			aspectRatio : true,
			containment : '#containerDiv',
			minHeight : 50,
			minWidth : 50
		});
		$('.user_text').parent().draggable({
			containment: '#containerDiv',
			cursor: "grabbing"
		});
		$('.user_text').resizable({
			aspectRatio : true,
			containment : '#containerDiv',
			minHeight : 50,
			minWidth : 50
		});
		// To make the text resizable
		jQuery(".user_text").fitText(0.3, { minFontSize: '35px', maxFontSize: '150px' });
	});
}