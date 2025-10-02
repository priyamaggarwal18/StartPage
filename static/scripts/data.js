let data = {
    "Social": {
        "icon": "./icons/social-icon.svg",
        "cont": {
            "Instagram": {
                "icon": "./icons/instagram-logo.svg",
                "link": "https://www.instagram.com"
            },
            "X": {
                "icon": "./icons/x-logo.svg",
                "link": "https://www.x.com"
            },
            "Facebook": {
                "icon": "./icons/facebook-logo.svg",
                "link": "https://www.facebook.com"
            },
            "YouTube": {
                "icon": "./icons/youtube-logo.svg",
                "link": "https://www.youtube.com"
            },
            "LinkedIn": {
                "icon": "./icons/linkedin-logo.svg",
                "link": "https://www.linkedin.com"
            },
            "Pinterest": {
                "icon": "./icons/pinterest-logo.svg",
                "link": "https://www.pinterest.com"
            },
            "Reddit": {
                "icon": "./icons/reddit-logo.svg",
                "link": "https://www.reddit.com"
            }
        }
    },
    "Coding": {
        "icon": "./icons/coding-icon.svg",
        "cont": {
            "LeetCode": {
                "icon": "./icons/leetcode-logo.svg",
                "link": "https://leetcode.com"
            },
            "HackerRank": {
                "icon": "./icons/hackerrank-logo.svg",
                "link": "https://www.hackerrank.com"
            },
            "Codeforces": {
                "icon": "./icons/codeforces-logo.svg",
                "link": "https://codeforces.com"
            },
            "CodeChef": {
                "icon": "./icons/codechef-logo.svg",
                "link": "https://www.codechef.com"
            },
            "AtCoder": {
                "icon": "./icons/atcoder-logo.svg",
                "link": "https://atcoder.jp"
            },
            "TopCoder": {
                "icon": "./icons/topcoder-logo.svg",
                "link": "https://www.topcoder.com"
            }
        }
    },
    "Developer": {
        "icon": "./icons/developer-logo.svg",
        "cont": {
            "GitHub": {
                "icon": "./icons/github-logo.svg",
                "link": "https://github.com"
            },
            "Stack Overflow": {
                "icon": "./icons/stackoverflow-logo.svg",
                "link": "https://stackoverflow.com"
            },
            "Codecademy": {
                "icon": "./icons/codecademy-logo.svg",
                "link": "https://www.codecademy.com"
            },
            "FreeCodeCamp": {
                "icon": "./icons/freecodecamp-logo.svg",
                "link": "https://www.freecodecamp.org"
            },
            "Coursera": {
                "icon": "./icons/coursera-logo.svg",
                "link": "https://www.coursera.org"
            },
            "Udemy": {
                "icon": "./icons/udemy-logo.svg",
                "link": "https://www.udemy.com"
            },
            "edX": {
                "icon": "./icons/edx-logo.svg",
                "link": "https://www.edx.org"
            }
        }
    },
    "Documentation": {
        "icon": "./icons/documentation-logo.svg",
        "cont": {
            "Python": {
                "icon": "./icons/python-logo.svg",
                "link": "https://docs.python.org/3/"
            },
            "C": {
                "icon": "./icons/c-logo.svg",
                "link": "https://en.cppreference.com/w/cpp/language"
            },
            "Java": {
                "icon": "./icons/java-logo.svg",
                "link": "https://docs.oracle.com/en/java/javase/19/docs/api/"
            },
            "JavaScript": {
                "icon": "./icons/javascript-logo.svg",
                "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
            },
            "C++": {
                "icon": "./icons/cpp-logo.svg",
                "link": "https://en.cppreference.com/w/cpp/language"
            },
            "PHP": {
                "icon": "./icons/php-logo.svg",
                "link": "https://www.php.net/manual/en/index.php"
            },
            "Go": {
                "icon": "./icons/go-logo.svg",
                "link": "https://go.dev/doc/"
            }
        }
    }
};

// async function fetchData() {
//     try {
//         const response = await fetch('/getData');
//         data = await response.json(); 

//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

let OuterCont;

function showSubLinks(title) {
    //if that sublinks are already opened
    let titleEle = document.querySelector(".sub-link-title-text");
    if(titleEle?.innerHTML == title) {
        return;
    }

    let prevEle = document.querySelector(".sub-links-inner");
    
    let fragment = new DocumentFragment();
    let links=  data[title].cont;
    let delay = 100;
    for(let site in links) {
        let outerA = document.createElement("a");
        outerA.className = "link-outer-a";
        outerA.href = links[site].link;

        let innerA = document.createElement("div");
        innerA.className = "link-inner-cont";

        let imgCont = document.createElement("div");
        imgCont.className = "link-icon-cont";
        let imgEle = document.createElement("img");
        imgEle.alt = "Icon";
        imgEle.className = "link-icon";
        imgEle.src= links[site].icon;
        imgCont.appendChild(imgEle);

        let nameEle = document.createElement("div");
        nameEle.className = "link-name";
        nameEle.innerText = site;

        innerA.appendChild(imgCont);
        innerA.appendChild(nameEle);

        outerA.appendChild(innerA);
        outerA.style.animationDelay = delay + "ms";
        delay += 30;

        fragment.appendChild(outerA);
    }


    if(prevEle) { //if it is already there
        let nodeList = prevEle.childNodes;
        Array.from(nodeList).forEach((ele) => {
            if(ele.nodeName == "A") {
                prevEle.removeChild(ele);
            }
        })
        titleEle.innerHTML = title;
        prevEle.append(fragment);


    }else{ //to add from whole new context
        let mainCont = document.getElementById("main-container");
        mainCont.style.gridTemplateColumns = "1fr 1fr 2fr";
        let subLinkCont = document.getElementById("sub-links-cont");

        let outerCont = document.createElement("div");
        outerCont.className = "sub-links-inner";

        let subTitle = document.createElement("div");
        subTitle.className = "sub-title";

        let backButton = document.createElement("back-button");
        backButton.className = "back-button";
        let backImg = document.createElement("img");
        backImg.src = "./icons/arrow-next.svg";
        backImg.className = "sub-link-back-icon";
        backImg.alt = "Back button";
        backImg.onclick = () => {
            subLinkCont.removeChild(outerCont);
            mainCont.style.gridTemplateColumns = "2fr 1fr 3fr";
        }
        backButton.appendChild(backImg);

        let titleCont = document.createElement("span");
        titleCont.innerHTML = title;
        titleCont.className = "sub-link-title-text";

        subTitle.appendChild(backButton);
        subTitle.appendChild(titleCont);

        fragment.prepend(subTitle);

        outerCont.appendChild(fragment);

        subLinkCont.appendChild(outerCont);
    }



}

// fetchData().then(() => {
    const container = document.getElementById("links-main-container");


    // Arrow icons to appendChild in each button
    let arrowEle = document.createElement("div");
    arrowEle.className="arrow-outer";
    let arrowImg = document.createElement("img");
    arrowImg.src = "./icons/arrow-next.svg";
    arrowImg.className = "arrow-inner";
    arrowImg.alt = "Arrow ->";
    arrowEle.appendChild(arrowImg);

    let fragment = new DocumentFragment();


    for(let title in data) {
        let curr = data[title];
        let buttonOuter = document.createElement("button");
        buttonOuter.className = "link-outer-button";

        let outerCont = document.createElement("div");
        outerCont.className = "link-inner-cont";

        let iconCont = document.createElement("div");
        iconCont.className = "link-icon-cont";
        let imgEle = document.createElement("img");
        imgEle.src=  curr.icon;
        imgEle.alt = "Icon";
        imgEle.className = "link-icon";
        let nameDiv = document.createElement("div");
        nameDiv.className = "link-name";
        nameDiv.innerText = title;
        iconCont.appendChild(imgEle);

        
        outerCont.appendChild(iconCont);
        outerCont.appendChild(nameDiv);

        buttonOuter.appendChild(outerCont);
        buttonOuter.appendChild(arrowEle.cloneNode(true));

        buttonOuter.id = title;
        buttonOuter.onclick = function(e) {
                showSubLinks(title);
        }

        fragment.append(buttonOuter);
    };

    container.append(fragment);

    // Final output to append
        // <button class="link-outer-button" onclick="showCont(${ele.title})">
        //         <div class="link-inner-cont">
        //             <div class="link-icon-cont"><img src=${ele.icon} alt="Icon" class="link-icon">
        //             </div>
        //             <div class="link-name">${ele.title}</div>
        //         </div>
        //         <div class="arrow-outer">
        //             <img src="./icons/arrow-next.svg" class="arrow-inner" alt="arrow">
        //         </div>
        //     </button>
    
// });

let user = localStorage.getItem("user-name");
if(user) {
    document.getElementById("greeting-message").innerHTML = `Hello, ${user} 👋`;
}