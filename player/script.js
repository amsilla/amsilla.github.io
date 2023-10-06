function changetheme(backgroundl, colorl) {
	document.body.style.background = backgroundl;
	document.body.style.color = colorl;
}
function custom() {
	changetheme(prompt("Background? Can be color or hex"), prompt("Text color? Can be color or hex"))
}

function handleFiles(event) {
	var files = event.target.files;
	$("#src").attr("src", URL.createObjectURL(files[0]));
	document.getElementById("audio").load();
}

document.getElementById("upload").addEventListener("change", handleFiles, false);
function reset() {
	window.location.reload()
}
function sub() {
	const currentv = document.getElementById("audio").innerHTML;
	const urlfor = prompt("Enter URL for subtitles");
	document.getElementById("audio").innerHTML = currentv + '<track src="' + urlfor + '" id="trackers" label="English" kind="captions" srclang="en-us" default >'
	alert("DONE!")
}
