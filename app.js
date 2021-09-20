
const mealResult = document.getElementById('display-meals')
      randomMeal = document.getElementById('single-meal')
      foodCategory = document.getElementById('food-category')

randomMeal.addEventListener('click', getMeal);
category.addEventListener('click', categoryMeal);


function getMeal(){

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        mealResult.innerHTML = data.meals.map(meal =>
            `<h2 class="mt-5 text-center">Get inspired by : ${meal.strMeal} </h2>
            <div>
                <img src="${meal.strMealThumb}" class="rounded d-block mx-auto"/>
            </div>
        
            `)       
    })
    .catch(function(err) {
        console.log(err);
    });     
}

function categoryMeal(){

    fetch('meals.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data);

        let output = '';

        data.forEach(function(categories){
                    output += `
            <h3 class="text-center">${categories.strCategory}</h3>
            <div>
                <img src="${categories.strCategoryThumb}" class="img-fluid"/>
            </div>
            `}); 

        foodCategory.innerHTML = output;
        })
    
    .catch(function(err) {
        console.log(err);
    });

    
}

