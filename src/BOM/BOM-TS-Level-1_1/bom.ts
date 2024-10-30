window.setTimeout(() => {
    console.log("3 Sekunden später");
}, 3000); 
let counter = 0; 
function countdown() {
    counter = 11; 
    const interval = setInterval(() => {
        counter--; 
        document.body.style.fontSize = "4rem";
        document.body.innerText = counter.toString();

        if(counter === -1){
            document.body.innerText = "Feierabend";
            clearInterval(interval);
        }
    }, 1000);
}
countdown(); 

// livecoded with Daniel_aka_Griezmann07