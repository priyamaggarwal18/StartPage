fetch("https://api.github.com/users/navjot369", {
    headers: {
        'Authorization' : "token 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"
    }
})
  .then(response => response.json())
  .then(data => {
    document.getElementById("github-dp").setAttribute("src", data.avatar_url);
    document.getElementById("github-full-name").innerHTML = data.name;
    document.getElementById("github-username").innerHTML = "@" + data.login;
    document.getElementById("github-username").href = data.url;
    document.getElementById("github-followers").innerHTML = data.followers;
    document.getElementById("github-followings").innerHTML = data.following;
});
  