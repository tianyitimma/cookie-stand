'use strict'

const openHour = 6;
const closeHour = 20;




// constructor function
function City(location, hourlyMin, hourlyMax, avgSale){
  this.location = location;
  this.hourlyMin = hourlyMin;
  this.hourlyMax = hourlyMax;
  this.avgSale = avgSale;
  this.cities.push(this);
}

// adding the sales array as a property of the prototype
City.prototype.cities = [];

// adding prototype method
City.prototype.getSales = function(open, close){
  this.sales = [];
  for (let i = open; i < close; i++) {
    this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
  }
}

// the hourlySales function
function hourlySales(min, max, avg) {
  let result = 0;
  result = Math.ceil((Math.random() * (max - min) + min) * avg);
  return result;
}




// declare cities
const Seattle = new City('Seattle',23, 65, 6.3);
const Tokyo = new City('Tokyo', 3, 24, 1.2);
const Dubai = new City('Dubai', 11, 38, 3.7);
const Paris = new City('Paris', 20, 38, 2.3);
const Lima = new City('Lima', 2, 16, 4.6);


console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);

const storeSecElem = document.getElementById('store');

// <!-- <table>
// <tr id="hours">
//   <th></th>
// </tr>
// <tr id="cities">
//   <td></td>
// </tr>
// <tr id="total">
//   <td></td>
// </tr>
// </table> -->

const table= document.createElement('table');
storeSecElem.appendChild(table);
const tableHeader = document.createElement('tr');
table.appendChild(tableHeader);
const headerCol1 = document.createElement('th');
tableHeader.appendChild(headerCol1);
let headerCol = [];

// build the table header
for (let i = 0; i < (closeHour - openHour + 1); i++){
  headerCol.push(document.createElement('th'));
  if (i < (12 - openHour)){
    headerCol[i].textContent = `${(i + openHour)}am`;
    tableHeader.appendChild(headerCol[i]);
  } else if (i === (12 - openHour)){
    headerCol[i].textContent = `${(i + openHour)}pm`;
    tableHeader.appendChild(headerCol[i]);
  } else if (i > (12 - openHour) && i < (closeHour - openHour)){
    headerCol[i].textContent = `${(i + openHour - 12)}pm`;
    tableHeader.appendChild(headerCol[i]);
  } else if (i === (closeHour - openHour)){
    headerCol[i].textContent = 'Daily Location Total';
    tableHeader.appendChild(headerCol[i]);
  }
}

// the body part
City.prototype.renderStore = function(){
  const row = document.createElement('tr');
  table.appendChild(row);
  const rowCol1 = document.createElement('td');
  rowCol1.textContent = this.location;
  row.appendChild(rowCol1);
  let rowCol = [];
  // for loop to put the hourly sales
  let dailyTotal = 0;
  for (let i = 0; i < this.sales.length; i++){
    rowCol.push(document.createElement('td'));
    rowCol[i].textContent = this.sales[i];
    row.appendChild(rowCol[i]);
    dailyTotal = dailyTotal + this.sales[i];
  }
  const rowColLast = document.createElement('td');
  rowColLast.textContent = dailyTotal;
  row.appendChild(rowColLast);

};



// global function
// render all the locations

function renderAllStores(){
  for (let i = 0; i < City.prototype.cities.length; i++){
    let currentCity = City.prototype.cities[i];
    currentCity.getSales(openHour, closeHour);
    currentCity.renderStore();
  }
}

// call the render all function

renderAllStores();

//console.log(City.prototype.cities[0].sales.length);
// the footer

const tableFooter = document.createElement('tfoot');
table.appendChild(tableFooter);
const footerCol1 = document.createElement('td');
footerCol1.textContent = 'Total';
tableFooter.appendChild(footerCol1);
let footerCol = [];
let overAllTotal = 0;
// hourly total accross all the locations
for(let i = 0; i < (closeHour - openHour); i++){
  footerCol.push(document.createElement('td'));
  let hourlyTotal = 0;
  for (let j = 0; j < City.prototype.cities.length; j++){
    hourlyTotal = hourlyTotal + City.prototype.cities[j].sales[i];
  }
  footerCol[i].textContent = hourlyTotal;
  tableFooter.appendChild(footerCol[i]);
  overAllTotal = overAllTotal + hourlyTotal;
}

// overall total
const footerColLast = document.createElement('td');
footerColLast.textContent = overAllTotal;
tableFooter.appendChild(footerColLast);











// const Seattle = {
//   location: "Seattle",
//   hourlyMin: 23,
//   hourlyMax: 65,
//   avgSale: 6.3,
//   sales: [],
//   getSales: function(open, close){
//     for (let i = open; i < close; i++) {
//       this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
//     }
//   }
// };
// // Seattle.getSales(openHour, closeHour);
// //Seattle.getDailyTotal();
// //Seattle.getDailyTotal(this.sales);

// //console.log('this is Seattle', Seattle);

// const Tokyo = {
//   location: "Tokyo",
//   hourlyMin: 3,
//   hourlyMax: 24,
//   avgSale: 1.2,
//   sales:[],
//   getSales: function(open, close){
//     for (let i = open; i < close; i++) {
//       this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
//     }
//   }
// };

// const Dubai = {
//   location: "Dubai",
//   hourlyMin: 11,
//   hourlyMax: 38,
//   avgSale: 3.7,
//   sales:[],
//   getSales: function(open, close){
//     for (let i = open; i < close; i++) {
//       this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
//     }
//   }
// };

// const Paris = {
//   location: "Paris",
//   hourlyMin: 20,
//   hourlyMax: 38,
//   avgSale: 2.3,
//   sales:[],
//   getSales: function(open, close){
//     for (let i = open; i < close; i++) {
//       this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
//     }
//   }
// };

// const Lima = {
//   location: "Lima",
//   hourlyMin: 2,
//   hourlyMax: 16,
//   avgSale: 4.6,
//   sales:[],
//   getSales: function(open, close){
//     for (let i = open; i < close; i++) {
//       this.sales.push(hourlySales(this.hourlyMin,this.hourlyMax,this.avgSale));
//     }
//   }
  
// };

// // function to calculate the number of cookies are sold hourly
// function hourlySales(min, max, avg) {
//   let result = 0;
//   result = Math.ceil((Math.random() * (max - min) + min) * avg);
//   return result;
// }





// let cities = [Seattle, Tokyo, Dubai, Paris, Lima];


// //const storeSecElem = document.getElementById('store');

// // <!-- <div>
// //           <h3> location</h3>
// //           <ul>
// //             <li>time: number of cookies</li>
// //           .
// //           .
// //           .
// //             <li>total: number of cookies</li>
// //           </ul> 
// //       </div> -->

// function storeInput(city){

//   // create a div element and attach to section #store
//   const divElem = document.createElement('div');
//   storeSecElem.appendChild(divElem);

//   // create h3 element and attach to div 
//   const h3Elem = document.createElement('h3');
//   h3Elem.textContent = city.location;
//   divElem.appendChild(h3Elem);

//   // create unordered list and attach to div
//   const ulElem = document.createElement('ul');
//   divElem.appendChild(ulElem);

//   // create li and attach to ul by using for loop
//   let dailyTotal = 0;
//   for (let i = 0; i < city.sales.length; i++){
//     const liElem = document.createElement('li');
//     dailyTotal = dailyTotal + city.sales[i];
//     if (i < (12 - openHour)){
//       liElem.textContent = `${(openHour + i)}am: ${city.sales[i]} cookies`;
//     } else if (i === (12 - openHour)){
//       liElem.textContent = `${(openHour + i)}pm: ${city.sales[i]} cookies`;
//     } else if (i > (12 - openHour)){
//       liElem.textContent = `${(openHour + i - 12)}pm: ${city.sales[i]} cookies`;
//     }
//     ulElem.appendChild(liElem);
//   }

//   // create the last li that has the daily total sales
  
//   const liElem = document.createElement('li');
//   liElem.textContent = `Total: ${dailyTotal} coolies`;
//   ulElem.appendChild(liElem);



// }

// for (let i =0; i < cities.length; i++){
//   let currentCity = cities[i];
//   currentCity.getSales(openHour, closeHour);
//   storeInput(currentCity);
// }
