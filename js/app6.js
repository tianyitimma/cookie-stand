'use strict'

const openHour = 6;
const closeHour = 20;
const Seattle = {
  location: "Seattle",
  hourlyMin: 23,
  hourlyMax: 65,
  avgSale: 6.3,
  sales: [],
  getSales: function(open, close){
    for (let i = open; i < close; i++) {
      this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
    }
  }
};
// Seattle.getSales(openHour, closeHour);
//Seattle.getDailyTotal();
//Seattle.getDailyTotal(this.sales);

console.log('this is Seattle', Seattle);

const Tokyo = {
  location: "Tokyo",
  hourlyMin: 3,
  hourlyMax: 24,
  avgSale: 1.2,
  sales:[],
  getSales: function(open, close){
    for (let i = open; i < close; i++) {
      this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
    }
  }
};

const Dubai = {
  location: "Dubai",
  hourlyMin: 11,
  hourlyMax: 38,
  avgSale: 3.7,
  sales:[],
  getSales: function(open, close){
    for (let i = open; i < close; i++) {
      this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
    }
  }
};

const Paris = {
  location: "Paris",
  hourlyMin: 20,
  hourlyMax: 38,
  avgSale: 2.3,
  sales:[],
  getSales: function(open, close){
    for (let i = open; i < close; i++) {
      this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
    }
  }
};

const Lima = {
  location: "Lima",
  hourlyMin: 2,
  hourlyMax: 16,
  avgSale: 4.6,
  sales:[],
  getSales: function(open, close){
    for (let i = open; i < close; i++) {
      this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
    }
  }
  
};

// function to calculate the number of cookies are sold hourly
function hourlySales(min, max, avg) {
  let result = 0;
  result = Math.ceil((Math.random() * (max - min) + min) * avg);
  return result;
}





let cities = [Seattle, Tokyo, Dubai, Paris, Lima];


const storeSecElem = document.getElementById('store');

// <!-- <div>
//           <h3> location</h3>
//           <ul>
//             <li>time: number of cookies</li>
//           .
//           .
//           .
//             <li>total: number of cookies</li>
//           </ul> 
//       </div> -->

function storeInput(city){

  // create a div element and attach to section #store
  const divElem = document.createElement('div');
  storeSecElem.appendChild(divElem);

  // create h3 element and attach to div 
  const h3Elem = document.createElement('h3');
  h3Elem.textContent = city.location;
  divElem.appendChild(h3Elem);

  // create unordered list and attach to div
  const ulElem = document.createElement('ul');
  divElem.appendChild(ulElem);

  // create li and attach to ul by using for loop
  let dailyTotal = 0;
  for (let i = 0; i < city.sales.length; i++){
    const liElem = document.createElement('li');
    dailyTotal = dailyTotal + city.sales[i];
    if (i < (12 - openHour)){
      liElem.textContent = `${(openHour + i)}am: ${city.sales[i]} cookies`;
    } else if (i === (12 - openHour)){
      liElem.textContent = `${(openHour + i)}pm: ${city.sales[i]} cookies`;
    } else if (i > (12 - openHour)){
      liElem.textContent = `${(openHour + i - 12)}pm: ${city.sales[i]} cookies`;
    }
    ulElem.appendChild(liElem);
  }

  // create the last li that has the daily total sales
  
  const liElem = document.createElement('li');
  liElem.textContent = `Total: ${dailyTotal} coolies`;
  ulElem.appendChild(liElem);



}

for (let i =0; i < cities.length; i++){
  let currentCity = cities[i];
  currentCity.getSales(openHour, closeHour);
  storeInput(currentCity);
}