var alinia1 = document.getElementById("alinia1");
var alinia2 = document.getElementById("alinia2"); 
var alinia3 = document.getElementById("alinia3"); 
var alinia4 = document.getElementById("alinia4");
var alinia5 = document.getElementById("alinia5");
var alinia6 = document.getElementById("alinia6");
var alinia62 = document.getElementById("alinia62");
var alinia7 = document.getElementById("alinia7");
var alinia8 = document.getElementById("alinia8");
var alinia9 = document.getElementById("alinia9");

var alinia1Audio = new Audio('./public/audio/alinea1.mp3');
var gymzaal1Audio = new Audio('./public/audio/gymzaal1.mp3');
var fysio1Audio = new Audio('./public/audio/fysio1.mp3');
var stokAudio = new Audio('./public/audio/stok.mp3');
var uitgaanAudio = new Audio('./public/audio/uitgaan.mp3');
var utrechtAudio = new Audio('./public/audio/utrecht.mp3');
var fietsenAudio = new Audio('./public/audio/fietsen.mp3');
// vanaf hier moet de auido nog naar mp3 gezet worden en harder gemaakt worden
var verhaalAudio = new Audio('./public/audio/verhaal.mp3');
var keuzesAudio = new Audio('./public/audio/keuzes.mp3');
var eindeAudio = new Audio('./public/audio/einde.mp3');


var geluid2 = new Audio('./public/audio/backgroundnoice.wav');
var geluid3 = new Audio('./public/audio/backgroundnoice2.wav');

// geluid2.play()
// geluid3.play()

alinia1.addEventListener('click', () => {
	console.log('alinia1 audio')

	alinia1Audio.play()
})

alinia2.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	gymzaal1Audio.play()
})

alinia3.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	fysio1Audio.play()
})

alinia4.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	stokAudio.play()
})
alinia5.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	uitgaanAudio.play()
})
alinia6.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	utrechtAudio.play()
})
alinia62.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	fietsenAudio.play()
})
alinia7.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	verhaalAudio.play()
})
alinia8.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	keuzesAudio.play()
})
alinia9.addEventListener('click', () => {
	console.log('gymzaal1 audio')

	eindeAudio.play()
})