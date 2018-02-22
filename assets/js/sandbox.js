// TO DOS SECTION
//------------------------------------------//

// HIDE/SHOW/RESTYLE
const toDosContainer = $('#toDosContainer');
const toDosTitle = $('#toDosTitle');
const toDosSection = $('#toDosSection');
let showToDos = false;

if (showToDos === false) {
	toDosContainer.hide();

	toDosTitle.css('border-bottom', 'solid black 3px');
	toDosContainer.css('background-color', 'white');
	toDosSection.css('width', '0px');
	toDosSection.css('max-height', '20%');
}

toDosTitle.click(function() {
	if (showToDos === false) {
		showToDos = true;
		toDosContainer.show();
		
		toDosTitle.css('border-bottom', 'solid black 0px');
		toDosSection.css('width', '20%');
		toDosSection.css('height', '20%');
	} else {
		showToDos = false;
		toDosContainer.hide();
		
		toDosTitle.css('border-bottom', 'solid black 3px');
		toDosContainer.css('background-color', 'white');
		toDosSection.css('width', '0px');
		toDosSection.css('max-height', '20%');
	}
});

// DRAG AROUND TO DOS
toDosSection.mousedown(handle_mousedown);

function handle_mousedown(e){
    window.dragDiv = {};
    dragDiv.pageX0 = e.pageX;
    dragDiv.pageY0 = e.pageY;
    dragDiv.elem = this;
    dragDiv.offset0 = $(this).offset();
    
    function handle_dragging(e){
        var left = dragDiv.offset0.left + (e.pageX - dragDiv.pageX0);
        var top = dragDiv.offset0.top + (e.pageY - dragDiv.pageY0);
        $(dragDiv.elem)
        .offset({top: top, left: left});
    };

    function handle_mouseup(e){
        $('body')
        .off('mousemove', handle_dragging)
        .off('mouseup', handle_mouseup);
    };

    $('body')
    .on('mouseup', handle_mouseup)
    .on('mousemove', handle_dragging);
};
