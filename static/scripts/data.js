let data;

async function fetchData() {
    try {
        const response = await fetch('/getData');
        data = await response.json(); 

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function showCont() {
    document.getElementById("main-container").style.gridTemplateColumns = "1fr 1fr 2fr";
}


fetchData().then(() => {
    console.log(data);
    const container = document.getElementById("links-main-container");


    // Arrow icons to appendChild in each button
    let arrowEle = document.createElement("div");
    arrowEle.className="arrow-outer";
    let arrowImg = document.createElement("img");
    arrowImg.src = "./icons/arrow-next.svg";
    arrowImg.className = "arrow-inner";
    arrowImg.alt = "Arrow ->";
    arrowEle.appendChild(arrowImg);


    for(title in data) {
        let curr = data[title];
        let buttonOuter = document.createElement("button");
        buttonOuter.className = "link-outer-button";
        buttonOuter.onclick = (e) => {
             console.log(e);
        }

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

        container.appendChild(buttonOuter);

    }


    // Final output to append
    //     <button class="link-outer-button" onclick="showCont(${ele.title})">
    //             <div class="link-inner-cont">
    //                 <div class="link-icon-cont"><img src=${ele.icon} alt="Icon" class="link-icon">
    //                 </div>
    //                 <div class="link-name">${ele.title}</div>
    //             </div>
    //             <div class="arrow-outer">
    //                 <img src="./icons/arrow-next.svg" class="arrow-inner" alt="arrow">
    //             </div>
    //         </button>
    
});



