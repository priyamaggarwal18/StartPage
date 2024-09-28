let userName = localStorage.getItem("github-username");
// let userName = "navjot369";

if(!userName) {
	document.getElementById("github-err-message").innerHTML = "Add github username to fetch records"; 
}
else {
fetch(`https://api.github.com/users/${userName}`, {})
  .then(response => {
	if (!response.ok) {
		throw new Error();
	  }
	return response.json()

}).then(data => {
	document.getElementById("github-err-cont").style.display = "none";
    document.getElementById("github-dp").setAttribute("src", data.avatar_url);
    document.getElementById("github-full-name").innerHTML = data.name;
    document.getElementById("github-username").innerHTML = "@" + data.login;
    document.getElementById("github-username").href = data.url;
    document.getElementById("github-followers").innerHTML = data.followers;
    document.getElementById("github-followings").innerHTML = data.following;
	document.getElementById("github-link").href = data.html_url;
	document.getElementById("repo-link").href = `${data.html_url}?tab=repositories`;
}).catch(err => {
	console.log("Here it is: " + err);
	document.getElementById("github-err-message").innerHTML = "Error fetching Github data..!"; 
});
}
  