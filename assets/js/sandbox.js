const toDos = $('#toDosContainer');
const toDosTitle = $('#toDosTitle');
let showToDos = false;

$(document).ready(function(){
	toDos.hide();
	toDosTitle.css('border-bottom', 'solid black 3px');
});

toDosTitle.click(function() {
	if (showToDos === false) {
		toDos.show();
		toDosTitle.css('border-bottom', 'solid black 0px');
		showToDos = true;
	} else {
		toDos.hide();
		toDosTitle.css('border-bottom', 'solid black 3px');
		showToDos = false;
	}
});