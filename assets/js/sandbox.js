const toDosContainer = $('#toDosContainer');
const toDosTitle = $('#toDosTitle');
const toDosSection = $('#toDosSection');
let showToDos = false;

if (showToDos === false) {
	toDosContainer.hide();
	toDosContainer.css('background-color', 'white');
	toDosTitle.css('border-bottom', 'solid black 3px');

	toDosSection.css('max-width', '100px');
	toDosSection.css('max-height', '30px');
}

toDosTitle.click(function() {
	if (showToDos === false) {
		showToDos = true;
		toDosContainer.show();
		
		toDosTitle.css('border-bottom', 'solid black 0px');
		toDosSection.css('max-width', '20%');
		toDosSection.css('max-height', '20%');
		toDosSection.css('background-color', 'white');
		
	} else {
		showToDos = false;

		toDosContainer.hide();
		toDosTitle.css('border-bottom', 'solid black 3px');
		toDosSection.css('max-width', '100px');
		toDosSection.css('max-height', '30px');
	}
});