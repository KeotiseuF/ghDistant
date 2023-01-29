function constantes () { 
    const helloWorldTitle = "HELLO WORLD";
    const helloWorldText =  "Hello world";
   
    localStorage.setItem("HELLO_WORLD_TITLE", helloWorldTitle);
    localStorage.setItem("HELLO_WORLD_TEXT", helloWorldText);
}

constantes();