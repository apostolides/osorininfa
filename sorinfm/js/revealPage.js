document.getElementById("star-gif").addEventListener("click", ()=>{
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("star-gif").remove();
    startPlayer();
});