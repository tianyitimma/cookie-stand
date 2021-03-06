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

// attach to the HTML section
const storeSecElem = document.getElementById('store');

const formInputElem = document.getElementById('storeForm');

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

//const table= document.getElementById('table');
const table = document.createElement('table');
storeSecElem.appendChild(table);
const tableHeader = document.createElement('thead');
table.appendChild(tableHeader);


// build the table header
function renderHeaderElem(){
  const headerCol1 = document.createElement('th');
  tableHeader.appendChild(headerCol1);
  let headerCol = [];
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
}


// the body part
City.prototype.renderStore = function(){
  const row = document.createElement('tr');
  table.appendChild(row);
  const rowCol1 = document.createElement('td');
  rowCol1.textContent = this.location;
  row.appendChild(rowCol1);
  let dailyTotal = 0;
  for (let i = 0; i < this.sales.length; i++){
    const rowCol = document.createElement('td');
    rowCol.textContent = this.sales[i];
    row.appendChild(rowCol);
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

// handler function to add update new store

function storeUpdate(event){
  event.preventDefault();
  let location = event.target.location.value;
  let hourlyMin = parseFloat(event.target.hourlyMin.value);
  let hourlyMax = parseFloat(event.target.hourlyMax.value);
  let avgSale = parseFloat(event.target.avgSale.value);

  const newCity = new City(location, hourlyMin, hourlyMax, avgSale);
  newCity.getSales(openHour, closeHour);
  newCity.renderStore();
  
  console.log('new city is ', newCity);
  
  updateFooter();
  event.target.reset();

}
// creating the footer row
function renderFooter(){
  const tableFooter = document.createElement('tfoot')
  tableFooter.setAttribute("id", "tFoot");
  table.appendChild(tableFooter);
  const footerCol1 = document.createElement('td');
  footerCol1.textContent = 'Total';
  tableFooter.appendChild(footerCol1);
  
  let overAllTotal = 0;
  // hourly total accross all the locations
  for(let i = 0; i < (closeHour - openHour); i++){
    const footerCol = document.createElement('td');
    //footerCol.setAttribute("id", `${i}`)
    let hourlyTotal = 0;
    for (let j = 0; j < City.prototype.cities.length; j++){
      hourlyTotal = hourlyTotal + City.prototype.cities[j].sales[i];
    }
    footerCol.textContent = hourlyTotal;
    tableFooter.appendChild(footerCol);
    overAllTotal = overAllTotal + hourlyTotal;
  }

  // overall total
  const footerColLast = document.createElement('td');
  //footerColLast.setAttribute("id", "overAllTotal");
  footerColLast.textContent = overAllTotal;
  tableFooter.appendChild(footerColLast);
}

//update total values after adding new stores
function updateFooter(){
  let tableFooter = document.getElementById('tFoot');
  tableFooter.innerHTML = "";
  
  const footerCol1 = document.createElement('td');
  footerCol1.textContent = 'Total';
  tableFooter.appendChild(footerCol1);
  
  let overAllTotal = 0;
  // hourly total accross all the locations
  for(let i = 0; i < (closeHour - openHour); i++){
    const footerCol = document.createElement('td');
    let hourlyTotal = 0;
    for (let j = 0; j < City.prototype.cities.length; j++){
      hourlyTotal = hourlyTotal + City.prototype.cities[j].sales[i];
    }
    footerCol.textContent = hourlyTotal;
    tableFooter.appendChild(footerCol);
    overAllTotal = overAllTotal + hourlyTotal;
  }

  // overall total
  const footerColLast = document.createElement('td');
  footerColLast.textContent = overAllTotal;
  tableFooter.appendChild(footerColLast);
  
}

// call the function

renderHeaderElem();

// call the render all function

renderAllStores();

renderFooter();

// the lisener function
formInputElem.addEventListener('submit',storeUpdate);