let player = document.getElementById("main-player");
let trackInfo = document.getElementById("track-info");
let listenersInfo = document.getElementById("listeners-info");

function startPlayer(){
    player.play();
}

function pausePlayer(){
    player.pause();
}

async function getTrackInfo(){
    let response = await fetch("https://osorin.net:8443/status-json.xsl");
    response = await response.json();
    console.log(response);
        for(const source of response.icestats.source){
            if(source.listenurl === "http://osorin.net:8443/mansion.ogg"){
                trackInfo.innerHTML = `${source.artist} - ${source.title}`;
            }
        }
}

async function getListenersInfo(){
    let response = await fetch("https://osorin.net:8443/status-json.xsl");
    response = await response.json();
        for(const source of response.icestats.source){
            if(source.listenurl === "http://osorin.net:8443/mansion.ogg"){
                listenersInfo.innerHTML = `Current listeners: ${source.listeners}`;
            }
        }
}

getTrackInfo();
getListenersInfo();

setInterval(getTrackInfo, 3000);
setInterval(getListenersInfo, 3000);
