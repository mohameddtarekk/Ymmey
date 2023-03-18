$(document).ready(function(){

  $("#loadeing").fadeOut(1000 , function()
  {
      $("body").css("overflow" , "auto");
      $("#loadeing").remove();
  })

  $(".open").click(function()
   {
      $(".sideNavbar").animate({left : `0px`} ,500)
      $(".sideNavbar").animate({left : `0px`} , 500)

      $(".list").show(800)

      document.querySelector(".open").style.display = "none"
      document.querySelector(".close").style.display = "block"

   })

$(".close").click(function()
{
   let width=  $(".sideNavbar").outerWidth(true)
    $(".sideNavbar").animate({left : `-${width}px`} ,500)

    let widthNav = $(".navHeader").outerWidth(true)
   $(".navHeader").animate({left : `${widthNav}px`} , 500)

   $(".list").hide(1000)

   document.querySelector(".open").style.display = "block"
   document.querySelector(".close").style.display = "none"

})

async function getMeal(meal)
{
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
   
    let response = await api.json()
 
  
    let hasalah = "";
    for (let i = 0; i < response.meals.length; i++)
     {
        hasalah+= ` <div class="col-md-3" id = "${response.meals[i].strMeal}">
  
       <div class="position-relative imgMeal overflow-hidden">
        <img class=" imgClick img-fluid rounded " src="${response.meals[i].strMealThumb}" alt="">
         
         <div class="overlay d-flex align-items-center  w-100 h-100 rounded">
           <p class= "nameMeal" >${response.meals[i].strMeal}</p>
         </div>
       </div>
       </div>`
       
    }
    document.querySelector(".meals").innerHTML=hasalah;

  

  let name 
  $(".col-md-3").click(function(){
    name = this.id
    infoMeal(name)
  })

  
}

let meal1 = [""]
  
getMeal([meal1[0]])

async function infoMeal(meal)  
{
   let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
   
   let response = await api.json()

   let hasalah = "";
   for (let i = 0; i < response.meals.length; i++) {
     hasalah+=` <div class="col-md-4">
     <div>
       <img class="img-fluid rounded" src=${response.meals[i].strMealThumb} alt="">
       <h3>${response.meals[i].strMeal}</h3>
     </div>
   </div>
   <div class="col-md-8">
     <div>
       <h3>Instructions</h3>
       <p>${response.meals[i].strInstructions}</p>
       <h3>Area : ${response.meals[i].strArea}</h3>
       <h3>Category : ${response.meals[i].strCategory}</h3>
       <h3>Recipes : <ul class="list-unstyled d-flex g-3 flex-wrap lead">
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient1}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient2}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient3}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient4}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient5}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient6}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient7}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient8}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient9}</li>
                         <li class="alert alert-info m-2 p-1">${response.meals[i].strIngredient10}</li>
                     </ul></h3>
       <h3>Tags : <ul class="list-unstyled d-flex lead flex-wrap">        
                    <li class="alert alert-danger m-2 p-1">${response.meals[i].strTags}</li>
                   </ul></h3>
       <a target="_blank" href="${response.meals[i].strSource}" class="btn btn-success">source</a>
       <a target="_blank" href="${response.meals[i].strYoutube}"  class="btn btn-danger">Youtube</a>

     </div>

   </div>`
      
   }

   document.querySelector(".mealInfo1").innerHTML = hasalah;
   
   document.querySelector("#mainMeals").style.display = "none"
   
   
}

$(".Categories").click(function()
{
  getCat()
  document.querySelector("#mainMeals").style.display = "none"
  document.querySelector("#search").style.display = "none"
  document.querySelector("#Ingredients").style.display = "none"
  document.querySelector("#Contact").style.display = "none"
  document.querySelector("#Area").style.display = "none"
  document.querySelector("#cat").style.display = "block"


  let width=  $(".sideNavbar").outerWidth(true)
  $(".sideNavbar").animate({left : `-${width}px`} ,500)

  let widthNav = $(".navHeader").outerWidth(true)
 $(".navHeader").animate({left : `${widthNav}px`} , 500)

 $(".list").hide(1000)

 document.querySelector(".open").style.display = "block"
 document.querySelector(".close").style.display = "none"
  
  
})

async function getCat()
{
  let api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  let response = await api.json()
  
 let hasalah = ""; 
 for (let i = 0; i < response.categories.length; i++) {
  hasalah+= `<div  class="col-md-3 position-relative overflow-hidden" id = "${response.categories[i].strCategory}">
  <div class="img-cat ">
    <img class=" img-fluid rounded" src="${response.categories[i].strCategoryThumb}" alt="">
    <div class="overlay-cat rounded position-absolute text-center p-2">
      <h3 >${response.categories[i].strCategory}</h3>
      <p>${response.categories[i].strCategoryDescription}</p>

    </div>
  </div>
</div>`

}
 document.querySelector(".catMeal11").innerHTML = hasalah;


 async function MealShow(meal)
 {
  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  let response = await api.json()
  
  let hasalah = "";
  for (let i = 0; i < response.meals.length; i++)
   {
      hasalah+= `<div class="col-md-3 " id ="${response.meals[i].strMeal}">
 
     <div class="position-relative imgMeal overflow-hidden">
      <img class=" imgClick img-fluid rounded " src="${response.meals[i].strMealThumb}" alt="">
       
       <div class="overlay d-flex align-items-center w-100 h-100 rounded">
         <p>${response.meals[i].strMeal}</p>
       </div>
     </div>
     </div>`
     
  }
 
  document.querySelector("#catM").innerHTML = hasalah;
  let name ;
  $(".col-md-3").click(function()
  {
    name =this.id
    infoMeal(name)
    document.querySelector("#catM").style.display="none"

  })

 }

let nameCat ;
 $(".col-md-3").click(function()
 {  
  nameCat = this.id

  document.querySelector("#Categories").style.display="none"
  MealShow(nameCat)

 })

}

///////////////////search/////////////////////////////////
$(".search").click(function()
{


  document.querySelector("#cat").style.display = "none"
  document.querySelector("#mainMeals").style.display = "none"
  document.querySelector("#Area").style.display = "none"
  document.querySelector("#Contact").style.display = "none"
  document.querySelector("#search").style.display = "block"
 
  
 

  let width=  $(".sideNavbar").outerWidth(true)
  $(".sideNavbar").animate({left : `-${width}px`} ,500)

  let widthNav = $(".navHeader").outerWidth(true)
 $(".navHeader").animate({left : `${widthNav}px`} , 500)

 $(".list").hide(1000)

 document.querySelector(".open").style.display = "block"
 document.querySelector(".close").style.display = "none"
})

let mealValueName = document.querySelector(".searchName")
let mealValueLetter = document.querySelector(".searchLetter")

async function mealByName(Name)
{
  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
  let response = await api.json()

  let hasalah = ""
  for (let i = 0; i < response.meals.length; i++)
  {
     hasalah+= ` <div class="col-md-3" id = "${response.meals[i].strMeal}">

    <div class="position-relative imgMeal overflow-hidden">
     <img class=" imgClick img-fluid rounded " src="${response.meals[i].strMealThumb}" alt="">
      
      <div class="overlay d-flex align-items-center  w-100 h-100 rounded">
        <p class= "nameMeal" >${response.meals[i].strMeal}</p>
      </div>
    </div>
    </div>`
    
 }
 document.querySelector(".searchMeal").innerHTML = hasalah

 let name ;
 $(".col-md-3").click(function()
 {
  name = this.id

  infoMeal(name)

  document.querySelector("#search").style.display = "none"

 })

}

$(".searchName").keydown(function()
{
   mealByName(mealValueName.value)
})


async function mealByLetter(letter)
{
  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  let response = await api.json()

  let hasalah = ""
  for (let i = 0; i < response.meals.length; i++)
  {
     hasalah+= ` <div class="col-md-3" id = "${response.meals[i].strMeal}">

    <div class="position-relative imgMeal overflow-hidden">
     <img class=" imgClick img-fluid rounded " src="${response.meals[i].strMealThumb}" alt="">
      
      <div class="overlay d-flex align-items-center  w-100 h-100 rounded">
        <p class= "nameMeal" >${response.meals[i].strMeal}</p>
      </div>
    </div>
    </div>`
    
 }
 document.querySelector(".searchMeal").innerHTML = hasalah

 let name ;
 $(".col-md-3").click(function()
 {
  name = this.id

  infoMeal(name)

  document.querySelector("#search").style.display = "none"

 })

}

$(".searchLetter").keyup(function()
{
   mealByLetter(mealValueLetter.value)
})

//////////////////////////////getArea///////////
$(".Area").click(function(){
  document.querySelector("#cat").style.display = "none"
  document.querySelector("#mainMeals").style.display = "none"
  document.querySelector("#search").style.display = "none"
  document.querySelector("#Contact").style.display = "none"
  document.querySelector("#Ingredients").style.display = "none"
  document.querySelector("#Area").style.display = "block"

 let width=  $(".sideNavbar").outerWidth(true)
  $(".sideNavbar").animate({left : `-${width}px`} ,500)

  let widthNav = $(".navHeader").outerWidth(true)
 $(".navHeader").animate({left : `${widthNav}px`} , 500)

 $(".list").hide(1000)

 document.querySelector(".open").style.display = "block"
 document.querySelector(".close").style.display = "none"

 displayArea()

 
})

async function getArea(country)
{
  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  let response = await api.json()
  
  let hasalah1 = "";
    for (let i = 0; i < response.meals.length; i++)
     {
        hasalah1+= ` <div class="col-md-3" id = "${response.meals[i].strMeal}">
  
       <div class="position-relative imgMeal overflow-hidden">
        <img class=" imgClick img-fluid rounded " src="${response.meals[i].strMealThumb}" alt="">
         
         <div class="overlay d-flex align-items-center text-dark  w-100 h-100 rounded">
           <p class= "nameMeal" >${response.meals[i].strMeal}</p>
         </div>
       </div>
       </div>`
       
    }
    document.querySelector(".getAreaCountry").innerHTML=hasalah1;

    let name ; 
    $(".col-md-3").click(function()
    {
      name = this.id
      document.querySelector(".getAreaCountry").style.display ="none"
      infoMeal(name)
      
    })

}

function displayArea()
{
  let countries = ["American" , "British" , "Canadian" , "Chinese" , "Croatian" , "Dutch" , "Egyptian" , "French" , "Greek" ,
  "Indian" , "Irish" , "Italian" , "Jamaican" , "Japanese" , "Kenyan" , "Malaysian" , "Mexican" , "Moroccan" , "Polish" , "Portuguese" , "Russian" , "Spanish" , "Thai" , "Tunisian", "Turkish" , "Vietnamese"]
 
  let hasalah ="";
  for (let i = 0; i < countries.length; i++)
  {
     hasalah+= ` <div class="col-md-3 CountryName" id = "${countries[i]}">
     <div class="area-meal">
       <i class="fa-solid fa-house-laptop fa-4x"></i>
       <h3>${countries[i]}</h3>
     </div>
   </div>
`
    
 }
 document.querySelector(".getArea").innerHTML = hasalah

 let countryName ; 
 $(".CountryName").click(function(){
  countryName = this.id
  getArea(countryName)
  document.querySelector(".getArea").style.display ="none"

 })

}

//////////////////////Ingredients//////////

$(".Ingredients").click(function()
{
  document.querySelector("#cat").style.display = "none"
  document.querySelector("#mainMeals").style.display = "none"
  document.querySelector("#search").style.display = "none"
  document.querySelector("#Area").style.display = "none"
  document.querySelector("#Contact").style.display = "none"
  document.querySelector("#Ingredients").style.display = "block"

  let width=  $(".sideNavbar").outerWidth(true)
  $(".sideNavbar").animate({left : `-${width}px`} ,500)

  let widthNav = $(".navHeader").outerWidth(true)
 $(".navHeader").animate({left : `${widthNav}px`} , 500)

 $(".list").hide(1000)

 document.querySelector(".open").style.display = "block"
 document.querySelector(".close").style.display = "none"

 getIngredients()


})

async function getIngredients()
{
  let api = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
  let response = await api.json()

  let hasalah = ""; 
  for (let i = 0; i < 20; i++) {
    hasalah+=` <div class="col-md-3" id = "${response.meals[i].strIngredient}">
    <div class="mealIngre text-center">
      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      <h3>${response.meals[i].strIngredient}</h3>
      <p>The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of </p>
    </div>
  </div>`
    
  }
  document.querySelector(".mealIngredients").innerHTML = hasalah

  let name
  $(".col-md-3").click(function()
  {
    name = this.id
    getMealIngredients(name)
    document.querySelector(".mealIngredients").style.display = "none"
  })


}
async function getMealIngredients(meal)
{
  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`)
  let response = await api.json()

  let hasalah = "";
  for (let i = 0; i < response.meals.length; i++)
   {
      hasalah+= ` <div class="col-md-3" id = "${response.meals[i].strMeal}">

     <div class="position-relative imgMeal overflow-hidden">
      <img class=" imgClick img-fluid rounded " src="${response.meals[i].strMealThumb}" alt="">
       
       <div class="overlay d-flex align-items-center  w-100 h-100 rounded">
         <p class= "nameMeal" >${response.meals[i].strMeal}</p>
       </div>
     </div>
     </div>`
     
  }
  document.querySelector(".grtMealIngredients").innerHTML=hasalah;

  let name 
  $(".col-md-3").click(function(){
    name = this.id
    infoMeal(name)
    document.querySelector("#Ingredients").style.display = "none"
  })


}

/////////////////////////contact/////////////
$(".Contact").click(function()
{
  document.querySelector("#cat").style.display = "none"
  document.querySelector("#mainMeals").style.display = "none"
  document.querySelector("#search").style.display = "none"
  document.querySelector("#Area").style.display = "none"
  document.querySelector("#Ingredients").style.display = "none"
  document.querySelector("#Contact").style.display = "block"


  let width=  $(".sideNavbar").outerWidth(true)
  $(".sideNavbar").animate({left : `-${width}px`} ,500)

  let widthNav = $(".navHeader").outerWidth(true)
 $(".navHeader").animate({left : `${widthNav}px`} , 500)

 $(".list").hide(1000)

 document.querySelector(".open").style.display = "block"
 document.querySelector(".close").style.display = "none"

})




})





