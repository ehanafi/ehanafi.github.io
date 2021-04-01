var vid =  document.getElementById("player1");
var vidVolume = document.querySelector("#volume");
var vidSpeed = 

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});




document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	vid.play();

	// vidVolume.innerHTML = vid.volume * 100
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	vid.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower Video");
	vid.playbackRate *= 0.95;
	console.log("Slowing Down - New Speed:" + vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster Video");
	vid.playbackRate /= 0.95;
	console.log("Speeding Up - New Speed:" + vid.playbackRate);
});

// document.querySelector("#skip").addEventListener("click", function() {
// 	console.log("Skip Video");
// 	vid.seek(vid.currentTime() + 15);
// });

// document.querySelector("#mute").addEventListener("click", function() {
// 	console.log("Mute Video");
// });

// document.querySelector("#slider").addEventListener("click", function() {
// 	console.log("Slinder Volume");
// });


// fix
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Video Style: Old School");
	console.log(vid.className);
	vid.className = "oldSchool";
});

// fix
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Video Style: Original");
	console.log(vid.className);
	vid.className = "video";
});
