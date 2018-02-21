var showToDos = false;

$(document).ready(function(){
	$('#toDosContainer').hide();
});

$('#toDosTitle').click(function() {
	if (showToDos === false) {
		$('#toDosContainer').show();
		showToDos = true;
	} else {
		$('#toDosContainer').hide();
		showToDos = false;
	}
});