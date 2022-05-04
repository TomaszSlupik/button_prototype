const ice = document.querySelector(".ice");
const pizza = document.querySelector(".pizza");
const donut = document.querySelector(".donut");

function Food(name_food, price_food) {
	this.name_food = name_food;
	this.price_food = price_food;
}

Food.prototype.task = function () {
	const text = document.querySelector(".text");
	text.append(`${this.name_food} kosztuje ${this.price_food} zł`);
	console.log(`${this.name_food} kosztuje ${this.price_food} zł`);
};

foodOne = new Food("Lody", 6);
foodTwo = new Food("Pizza", 19);
foodThree = new Food("Pączek", 4);

ice.addEventListener("click", () => foodOne.task());
pizza.addEventListener("click", () => foodTwo.task());
donut.addEventListener("click", () => foodThree.task());
