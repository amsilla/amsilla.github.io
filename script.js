function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
function param(type,v=true) {
	const url = String(window.location);
	var what = ""
	if (v == true) {
		what = "?" + type + "="
	} else {
		what = "&" + type + "="
	}
	const value = url.split(what)[1].split("&")[0]
	return value.split("&");
}
