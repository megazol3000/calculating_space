

function raschitat() {
let weight = document.getElementById('weight').value;
let length = document.getElementById('length').value;
let height = document.getElementById('height').value;
let vertical = document.getElementById('vertical').value;
let quantity = document.getElementById('quantity').value;

let square = weight * length;
let commonSquare = square * quantity;
let commonHeight = height * vertical;

commonSquare = commonSquare / vertical;
if (commonSquare%square != 0) {
	commonSquare = commonSquare + (square-(commonSquare%square))
}


if (commonHeight > 15){
	document.getElementById('space').innerHTML = "Высота коробок превышает 15 метров, уменьшите вертикальное количество";
} else if (commonSquare > square){
	document.getElementById('space').innerHTML = "Площадь хранения составит: "+ Math.ceil(commonSquare) + " " +"м^2";
} else if (commonSquare <= square) {
	document.getElementById('space').innerHTML = "Площадь хранения составит: "+ Math.ceil(square) + " " +"м^2";
} else if (square > 0){
	document.getElementById('space').innerHTML = "Неверные данные";	
} else {
	document.getElementById('space').innerHTML = "Неверные данные";	
}
}