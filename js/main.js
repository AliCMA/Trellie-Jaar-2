const toBeClonedSection = document.getElementById("js--toBeCloned");

fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        //Krijgen we een main
        const main = document.querySelector('main');

        //Hier maken we een section
        let toBeAddedsection = document.createElement("section");
        toBeAddedsection.classList.add("tasks");
        main.appendChild(toBeAddedsection)

        //Hier maken we een header
        let toBeAddedheader = document.createElement("header");
        toBeAddedheader.classList.add("tasks__header");
        toBeAddedsection.appendChild(toBeAddedheader);

        //Hier maken we een h2
        let toBeAddedh2= document.createElement("h2");
        toBeAddedh2.classList.add("tasks__h2");
        toBeAddedh2.innerText = data.title
        toBeAddedheader.appendChild(toBeAddedh2);

        //Hier maken we een headerwrapper
        let toBeAddedheaderwrapper = document.createElement("div");
        toBeAddedheaderwrapper.classList.add("tasks__header__wrapper");
        toBeAddedheader.appendChild(toBeAddedheaderwrapper);

        //Hier maken we een number
        let toBeAddednumber = document.createElement("div");
        toBeAddednumber.classList.add("tasks__number");
        toBeAddednumber.innerText = data.activities.length
        toBeAddedheaderwrapper.appendChild(toBeAddednumber);

        //Hier maken we een button
        let toBeAddededit = document.createElement("button");
        toBeAddededit.classList.add("tasks__edit");
        toBeAddededit.innerText = "...";
        toBeAddedheaderwrapper.appendChild(toBeAddededit);

        //Hier maken we een UL
        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedsection.appendChild(toBeAddedUl);

        for (let i = 0; i < data.activities.length; i++){
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi)

            //label
            let toBeAddedlabel = document.createElement("label");
            toBeAddedlabel.classList.add("tasks__label");
            if (data.activities[i].extraClass !== "") {
                toBeAddedlabel.classList.add("tasks__label--" + data.activities[i].extraClass)
            }
            
            toBeAddedlabel.innerText = data.activities[i].label
            toBeAddedLi.appendChild(toBeAddedlabel)

            //description
            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description
            toBeAddedLi.appendChild(toBeAddedP)

            //We hebben een block element nodig
            let toBeAddedBlock = document.createElement("div")
            toBeAddedBlock.classList.add("tasks__listItem__Block");
            toBeAddedLi.appendChild(toBeAddedBlock)

            //Hier heb ik mijn author bol aangemaakt 
            let toBeAddedAuthor = document.createElement("p")
            toBeAddedAuthor.classList.add("tasks__listItem__Block__author");
            toBeAddedAuthor.innerText = data.activities[i].author
            toBeAddedBlock.appendChild(toBeAddedAuthor)
        }
    }
)