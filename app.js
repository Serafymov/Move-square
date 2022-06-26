let start = confirm("Хотите начать играть?");
if(start){

	let moveArea = document.querySelector(".moveArea");
	let moveElement;
	let amountMoveElement;
	let maxHeight;
	let maxWidth;
	let offsetX;
	let offsetY;
	let move;
	maxHeight = moveArea.clientHeight - 80;
	maxWidth = moveArea.clientWidth - 80;

	while(true){
		amountMoveElement = +prompt("Введите количество квадратов, которое вы хотите перемещать",1);
		if(!isNaN(amountMoveElement))
			break;
	}

	for(let i = 0; i < amountMoveElement; i++){
		moveArea.prepend(createElement());
	}

	moveArea.addEventListener("mouseup", function(e) {move = false});
	moveArea.addEventListener("mousedown", function(e) {
		if(e.target.className == "moveElement")
			move = true
			offsetX = e.offsetX;
			offsetY = e.offsetY;
			moveElement = e.target;
			console.log(e);
		});
		
	moveArea.addEventListener("mousemove",function(e) {
		if(move){
			let x = e.clientX - offsetX;
			let y = e.clientY - offsetY;
			moveElement.style.top = y + "px";
			moveElement.style.left = x + "px";
		}
	});

	function createElement(){
		let div = document.createElement("div");
		div.className = "moveElement";
		div.style.backgroundColor = getRandomColor();
		div.style.top = getRandomValue(maxHeight) + "px";
		div.style.left = getRandomValue(maxWidth) + "px";
		return div;
	}

	function getRandomColor() {
		return `rgb(${getRandomValue(255)},${getRandomValue(255)},${getRandomValue(255)})`;
	}

	function getRandomValue(max) {
		return Math.floor(Math.random() * max);
	}
}