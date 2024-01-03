document
	.getElementById("generateBtn")
	.addEventListener("click", generateRandomMeal)

async function generateRandomMeal() {
	try {
		const response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/random.php"
		)
		const data = await response.json()

		const meal = data.meals[0]
		displayMeal(meal)
	} catch (error) {
		console.error("Error fetching random meal:", error)
	}
}

function displayMeal(meal) {
	const mealImage = document.getElementById("mealImage")
	const mealName = document.getElementById("mealName")
	const ingredientList = document.getElementById("ingredientList")

	mealImage.src = meal.strMealThumb
	mealName.textContent = meal.strMeal

	ingredientList.innerHTML = ""

	for (let i = 1; i <= 10; i++) {
		const ingredient = meal[`strIngredient${i}`]
		const measure = meal[`strMeasure${i}`]

		if (ingredient && measure) {
			const listItem = document.createElement("li")
			listItem.textContent = `${measure} ${ingredient}`
			ingredientList.appendChild(listItem)
		}
	}
}

const generateButton = document.getElementById("generateBtn")
const ingredientsHeading = document.getElementById("ingredientsHeading")
const container = document.querySelector(".container")

let isGenerateButtonClicked = false

generateButton.addEventListener("click", () => {
	if (!isGenerateButtonClicked) {
		isGenerateButtonClicked = true
		ingredientsHeading.style.display = "block"
	}
})

generateButton.addEventListener("click", () => {
	container.style.width = "800px"
	container.style.height = "600px"
})
