
const mealResult = document.getElementById('display-meal'),
      mealResults = document.getElementById('display-meals'),
      randomMeal = document.getElementById('random-meal'),
      foodCategory = document.getElementById('category');

function getMeal(){

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        mealResult.innerHTML = data.meals.map(meal =>
            `
            <div class="card text-center card-body mt-3 mx-auto" style="width:40rem">
                <div class="row">
                    <div class="col-md">
                        <h2 class="mt-3">Get inspired by : ${meal.strMeal} </h2>
                    <div>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-fluid mb-5 rounded"/>
                    </div>
                </div>
            </div>

            
            `
            )       
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

                <div class="card-group style="width:40rem">
                    <div class="card">
                      <img class="card-img-top" src="${categories.strCategoryThumb}" alt="Card image cap"/>
                      <div class="card-body">
                        <h4 class="card-title">${categories.strCategory}</h4>
                      </div>
                    </div>
                </div>
            `}); 

        mealResults.innerHTML = output;
        })
    
    .catch(function(err) {
        console.log(err);
    });
}
randomMeal.addEventListener('click', getMeal);
foodCategory.addEventListener('click', categoryMeal);












