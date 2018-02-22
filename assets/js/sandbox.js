// TO DOS SECTION
//------------------------------------------//

// HIDE/SHOW/RESTYLE
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

// DRAG AROUND
dragElement(toDosSection);

function dragElement(element) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	if (toDosTitle) {
		toDosTitle.onmousedown = dragMouseDown;
	} else {
		element.onmousedown;
	}
};

//dragMouseDown is not running

function dragMouseDown(e) {
	e = e || window.event;

	pos3 = e.clientX;
	pos4 = e.clientY;

	document.onmouseup = closeDragElement;
	document.onmousemove = elementDrag;
};

function elementDrag(e) {
	e = e || window.event;

	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;

	element.style.top = (element.offsetTop - pos2) + "px";
	element.style.left = (element.offsetLeft - pos1) + "px";
};

function closeDragElement() {
	document.onmouseup = null;
	document.onmousemove = null;
};

