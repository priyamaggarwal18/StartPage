let nameEle = document.getElementById("name-input");
let githubEle = document.getElementById("github-input");
let latiEle = document.getElementById("latitude-input");
let longEle = document.getElementById("longitude-input");

nameEle.value = localStorage.getItem("user-name") || null;
githubEle.value = localStorage.getItem("github-username") || null;
latiEle.value = localStorage.getItem("latitude") || null;
longEle.value = localStorage.getItem("longitude") || null;


document.getElementById("form-info").addEventListener("submit", (e) => {
    e.preventDefault();
    if(!/[-+]?[0-9]{1,2}\.[0-9]+/.test(latiEle.value) || !/[-+]?[0-9]{1,3}\.[0-9]+/.test(longEle.value) ) {
        showErr("Location coordinates are not correct.");
        return;
    }
    localStorage.setItem("user-name", nameEle.value);
    localStorage.setItem("github-username", githubEle.value);
    localStorage.setItem("latitude", latiEle.value);
    localStorage.setItem("longitude", longEle.value);
    window.location.href = "./";
});

document.getElementById("auto-location").addEventListener("click", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            latiEle.value = pos.coords.latitude;
            longEle.value = pos.coords.longitude;
        }, showLocationErr);
    }else{
        showErr("Geolocation permission is not enabled by this browser.");
    }
});

function showLocationErr(error) {
    switch(error.code) {
    case error.PERMISSION_DENIED:
      showErr("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      showErr("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      showErr("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      showErr("An unknown error occurred.");
      break;
    }
}

function showErr(message) {
    let ele = document.getElementById("form-desp");
    ele.innerHTML = message;
    ele.style.color = "red";

    setTimeout(() => {
        ele.innerHTML = "Customize your homepage by providing the following details";
        ele.style.color = "white";
    }, 4000);
}