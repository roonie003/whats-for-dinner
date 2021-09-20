
const mealResult = document.getElementById('display-meals')
    randomMeal = document.getElementById('random-meal')
    moreMeals = document.getElementById('try-again')

randomMeal.addEventListener('click', getMeal);
moreMeals.addEventListener('click', );


function getMeal(){

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        mealResult.innerHTML = data.meals.map(meal =>
            `<h2 class="mt-5 text-center">Get inspired by : ${meal.strMeal} </h2>
            <div>
                <img src="${meal.strMealThumb}" class="rounded mx-auto d-block"/>
            </div>
        
            `)
    })
    .catch(function(err) {
        console.log(err);
    });
    
}

