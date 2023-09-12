// DAY 7 TASK
// Solving problems using array functions on the rest countries data

// 1) Get all the countries from Asia continent/region using the filter function?
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

 request.onload=function(){

    var data = request.response;

    var result = JSON.parse(data);

    var result1 = result.filter((ele)=>ele.region == "Asia");

    var result2 = result1.map((ele)=>ele.name.common);

    console.log(result2);

 }



//-------------------------------------------------------------------------------------


// 2) Get all the countries with a population less than 2lakhs using Filter function?
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){

   var data = request.response;

   var res = JSON.parse(data);

   var result = res.filter((element)=>element.population < 200000);

   var result1 = result.map((element)=>`${element.name.common} : ${element.population}`)

   console.log(result1);

}


//---------------------------------------------------------------------------------------


// 3) Print the following details name, capital, flag using forEach function?
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

 request.onload=function(){

    var data = request.response;

    var result = JSON.parse(data);

    var result1 = result.forEach((element) => console.log(`${element.name.common} : ${element.capital} : ${element.flag}`));

  }


//---------------------------------------------------------------------------------------


// 4) Print the total population of countries using reduce function?
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

 request.onload=function(){

    var data = request.response;

    var result = JSON.parse(data);

    var res = result.reduce((acc,count)=>acc+count.population,0);

    console.log(res);

 }


//----------------------------------------------------------------------------------------


// 5) Print the country which uses US dollars as currency?
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all", true);

request.send();

 request.onload=function(){

    var data = request.response;

    var result = JSON.parse(data);

    var res = result.filter((element)=>{

      for(var i in element.currencies){

         if(element.currencies[i].code === "USD"){

            console.log(element.name);

         }

      }

    })
    
}
  
