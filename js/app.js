'use strict'

const Seattle = {
  location: "Seattle",
  hourlyMin: 23,
  hourlyMax: 65,
  avgSale: 6.3,
  openHour: 6,
  closeHour: 19,
  hourly: [],
  hourlySales: function(hourlyMin, hourlyMax, avgSale, openHour, closeHour) {
    

    for (let i = open; i <= close; i++){
      let total = Math.ceil((Math.random() * (max - min) + min) * avg);
      this.hourly.push(i, total); 
    }
  
  }
  
  //hourlySales(this.hourlyMin, this.hourlyMax, this.avgSale, this.openHour, this.closeHour),
  //dailySales: dailySales(this.hourlySales)
}

// const Tokyo = {
//   location: "Tokyo",
//   hourlyMin: 3,
//   hourlyMax: 24,
//   avgSale: 1.2,
//   openHour: 6,
//   closeHour: 19,
//   hourlySales: hourlySales(this.hourlyMin, this.hourlyMax, this.avgSale, this.openHour, this.closeHour),
//   dailySales: dailySales(this.hourlySales)
// }

// const Dubai = {
//   location: "Dubai",
//   hourlyMin: 11,
//   hourlyMax: 38,
//   avgSale: 3.7,
//   openHour: 6,
//   closeHour: 19,
//   hourlySales: hourlySales(this.hourlyMin, this.hourlyMax, this.avgSale, this.openHour, this.closeHour),
//   dailySales: dailySales(this.hourlySales)
// }

// const Paris = {
//   location: "Paris",
//   hourlyMin: 20,
//   hourlyMax: 38,
//   avgSale: 2.3,
//   openHour: 6,
//   closeHour: 19,
//   hourlySales: hourlySales(this.hourlyMin, this.hourlyMax, this.avgSale, this.openHour, this.closeHour),
//   dailySales: dailySales(this.hourlySales)
// }

// const Lima = {
//   location: "Lima",
//   hourlyMin: 2,
//   hourlyMax: 16,
//   avgSale: 4.6,
//   openHour: 6,
//   closeHour: 19,
//   hourlySales: hourlySales(this.hourlyMin, this.hourlyMax, this.avgSale, this.openHour, this.closeHour),
//   dailySales: dailySales(this.hourlySales)
  
// }

// function to calculate the number of cookies are sold hourly
// function hourlySales(min, max, avg, open, close) {
//   let output = [];

//     for (let i = open; i <= close; i++){
//       let total = Math.ceil((Math.random() * (max - min) + min) * avg);
//       output.push(i, total); 
//     }
//   return output;
//   console.log(output);
// }

// function to record the total amount of cookies sold daily

// function dailySales(array) {
//   let total = 0;
//   for (let i = 1; i < array.length; i+2){
//     total = total + array[i];
//   }
//   return total;
// }

let cities = [Seattle]//, Tokyo, Dubai,  Paris, Lima];

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
  for (let i = 0; i < city.hourlySales.length; i+2){
    const liElem = document.createElement('li');
    if (city.hourlySales[i] < 12){
      liElem.textContent = '${city.hourlySales[i]}am: ${city.hourlySales[i+1]} cookies'
    } else if (city.hourlySales[i] = 12){
      liElem.textContent = '${city.hourlySales[i]}pm: ${city.hourlySales[i+1]} cookies'
    } else if (city.hourlySales[i] > 12){
      liElem.textContent = '${city.hourlySales[i] - 12}pm: ${city.hourlySales[i+1]} cookies'
    }
    ulElem.appendChild(liElem);
  }


}

for (let i =0; i < cities; i++){
  let currentCity = cities[0];
  currentCity.hourlySales();
  storeInput(currentCity);
}

console.log(Seattle);