var vid = document.querySelector('#videoplayer')


window.addEventListener("load", function() {
    vid.autoplay = false;
    vid.loop = false;
    vid.load();
});


//play video

document.querySelector('#play').addEventListener("click", function() {
    console.log('Play Video');
    vid.play();
});

//pause video//

document.querySelector('#pause').addEventListener("click", function() {
    console.log('Pause Video');
    vid.pause();
});

// slow down video//
document.querySelector('#slower').addEventListener("click", function() {
    if (vid.playbackRate === 0.5) {
         window.alert("Video is at slowest speed!");
    }  else if (vid.playbackRate === 1) {
        vid.playbackRate = 0.5;
    } else {
        vid.playbackRate = 1;
    }
    
});


//hurry up video// 
document.querySelector('#faster').addEventListener("click", function() {

    if (vid.playbackRate === 0.5) {
        vid.playbackRate = 1;
   }  else if (vid.playbackRate === 1) {
       vid.playbackRate = 2;
   } else if (vid.playbackRate = 2) {
       window.alert("Video is at fastest speed!")
   }
});


//skip ahead//
document.querySelector("#skip").addEventListener("click", function() {
    vid.currentTime += 15;
    if (vid.currentTime > vid.duration) {
        vid.currentTime = 0;
    }
});

//mute video//
document.querySelector("#mute").addEventListener("click", function() {
	if(vid.muted) {
		document.querySelector("#mute").innerHTML = "Mute";
		vid.muted = false;
	}
	else {
		document.querySelector("#mute").innerHTML = "Unmute";
		vid.muted = true;
	}
});

// change and update volume//

document.querySelector("#slider").addEventListener("change", function() {
	vid.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log(vid.volume);
});