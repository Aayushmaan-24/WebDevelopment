function toUpdate()
{
    const now  = new Date(); //gets current time
    const hours = now.getHours().toString().padStart(2,0); //gets hours -> converts to string -> pads with 0 at begin
    const minutes = now.getMinutes().toString().padStart(2,0);//gets minutes -> converts to string -> pads with 0 at begin
    const seconds = now.getSeconds().toString().padStart(2,0);//gets second -> converts to string -> pads with 0 at begin
    const time = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock").textContent = time; //shows on the webpage
}
toUpdate();
setInterval(toUpdate,1000); //calls the toUpdate() every 1s 
