let vid = document.getElementById('video')
let currentTime = document.getElementById('current-time')
let duration = 0
let sec = 0
let min = 0


vid.addEventListener('click', () => {
	if (vid.paused || vid.ended) vid.play()
	else vid.pause()



})

// console.log(vid.duration)
let set = () =>{
	setInterval(() => {
		
		let time = Math.floor(vid.currentTime)
		console.log(time % 60)
	
		let tesMin = time % 60

		if (tesMin == 0 && time !== 0) {
			min += 1
		}
		let hour = Math.floor(time/60);
		let remainTime = Math.floor(vid.duration - time)
		console.log(time, remainTime)

		if(min < 10)
			if (hour === 0) 
				return currentTime.innerHTML = `0${min} : ${Math.floor(vid.currentTime)}`
			else
				currentTime.innerHTML = `${hour} : 0${min} : ${Math.floor(vid.currentTime)}`
		else
			currentTime.innerHTML = `${hour} : ${min}: ${Math.floor(vid.currentTime)}`
	}, 1000);
}

window.onload = () =>{
	duration = vid.duration
	set()
}