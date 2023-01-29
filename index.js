function exercice() {   
    const open = document.getElementById("open");
    
    const helloWordTitle =  localStorage.getItem("HELLO_WORLD_TITLE");
    const helloWorldText =  localStorage.getItem("HELLO_WORLD_TEXT");

    const title = document.querySelector("h1");
    title.innerHTML = helloWordTitle;

    const textLabel = document.querySelector("label");
    textLabel.innerHTML = helloWorldText;

    open.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.setAttribute("style", "display: flex");

        const main = document.querySelector("main");
        main.setAttribute("style", "filter: blur(4px)")
    })

    const close = document.getElementById("close");

    close.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.setAttribute("style", "display: none");

        const main = document.querySelector("main");
        main.setAttribute("style", "filter: blur(0px)")
    })
    
}

exercice();