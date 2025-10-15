//fetch - function used to make HTTP requests yo fetch resources
//        (JSON style data , images , files)
//        Simplifies asynchronous data fetching in js and is ued for
//        interacting with APIs to retrieve and send data asynchronously
//        over the web interface
//        fetch(url , {options});

//METHODS- fetch(url,method:<method_name>)
//GET - to get some resoruce (default)
//POST - to send some resource
//PUT - to replace some resource
//DELETE - to delete some resource


//we will fetch data from https://pokeapi.co



async function fetchPoke(){
    
    try{
        const poke = document.getElementById("pokemon").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        if(!response.ok){
            throw new Error("Could not fetch Pokemon");
        }
        const data = await response.json();
        const pokeimg = data.sprites.front_shiny;
        const img = document.getElementById("pokemonsprite");
        img.src = pokeimg;
        img.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
}
