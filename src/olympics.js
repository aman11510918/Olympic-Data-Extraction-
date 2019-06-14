 /*-------------------- QUESTION 1 ------------------------------------ */

 function olympicHostedPerCity(athleteData) {

     let result = athleteData.reduce((finalresult, even) => {
         let allGames = even.Games;
         if (!finalresult['events'].has(allGames)) {
             finalresult['events'].add(allGames)
             finalresult.hasOwnProperty(even.City) ? finalresult[even.City]++ : finalresult[even.City] = 1;
         }
         return finalresult;
     }, {
         events: new Set()
     })

     delete result['events'];
     return result;
 }
 // console.log(olympicHostedPerCity(athleteData));

 /*----------------------- END OF QUESTION 1 ------------------------- */

 /*--------------------------- QUESTION 2 ---------------------------- */


 function numberOfTotalMedalPerCountry(athleteData, yearForMedals) {

     const data = athleteData.filter(item => item.Year > yearForMedals && item.Medal != 'NA');
     var countriesData = data.reduce(function (acc, value) {
         var key = value.Team;

         if (!(acc.hasOwnProperty(key))) {
             acc[key] = {};
             acc[key][value.Medal] = 1;
             acc[key]['total'] = 1;
         } else {
             if (!(acc[key].hasOwnProperty(value.Medal))) {
                 acc[key][value.Medal] = 1;
                 acc[key]['total'] += 1;
             } else {
                 acc[key][value.Medal]++
                 acc[key]['total']++;
             }
         }
         return acc;
     }, {});
     var finalObject = Object.entries(countriesData).sort((a, b) => b[1]['total'] - a[1]['total']).slice(0, 10)
     var finalResult = finalObject
         .reduce((acc, val) => {
             acc[val[0]] = ({
                 Gold: val[1]['Gold'],
                 Silver: val[1]['Silver'],
                 Bronze: val[1]['Bronze']
             })
             return acc;
         }, {});
     return finalResult;
 }
 /*----------------------- END OF QUESTION 2 ------------------------- */

 /*--------------------------- QUESTION 3 ---------------------------- */

 function decadeYearWiseGenderCount(athleteData) {

     var newData = athleteData.reduce((acc, val) => {
         var decade = (`${val.Year.substring(0,3)}0 - ${val.Year.substring(0,3)}9`)
         var key = val.ID;
         if (!acc['events'].has(key)) {
             acc['events'].add(key);
             if (!acc.hasOwnProperty(decade)) {
                 acc[decade] = {}
                 acc[decade][val.Sex] = 1;
             } else {
                 if (!(acc[decade].hasOwnProperty(val.Sex)))
                     acc[decade][val.Sex] = 1;
                 else
                     acc[decade][val.Sex]++;
             }
         }
         return acc;
     }, {events: new Set()})
     delete newData['events'];
     return newData;
 }
 /*----------------------- END OF QUESTION 3 ------------------------- */

 /*--------------------------- QUESTION 4 ---------------------------- */

 function averageAge(athleteData, averageForCategory) {

     var data = athleteData.filter(item => item.Event == averageForCategory && item.Age !== 'NA');
     let categoryPerGame = data.reduce((result, event) => {
         let year = event.Year;
         let age = Number(event.Age);
         if (!result.hasOwnProperty(year)) {
             result[year] = {};
             result[year]["Ages"] = age;
             result[year]["Players"] = 1;
         } else {
             result[year]["Ages"] += age;
             result[year]["Players"] += 1;
         }
         return result;
     }, {});
     var finalResultForAverageAge = Object.entries(categoryPerGame).reduce((acc, val) => {
         acc[val[0]] = ({
             Average_Age: Math.round(val[1]['Ages'] / val[1]['Players'])
         });
         return acc;
     }, {});
     return finalResultForAverageAge;
 }
  /*----------------------- END OF QUESTION 4 ------------------------- */
  
  /*--------------------------- QUESTION 5 ---------------------------- */


 function medalsOfIndia(athleteData, countryForMedal) {

     let newData = athleteData.filter(item => item.Team === countryForMedal && item.Medal !== 'NA');
     return newData.reduce((countryPlayer, event) => {
         if (countryPlayer.hasOwnProperty(event.Games)) {
             if (countryPlayer[event.Games].indexOf(event.Name) === -1) {
                 countryPlayer[event.Games].push(event.Name);
             }
         } else {
             countryPlayer[event.Games] = [];
             countryPlayer[event.Games].push(event.Name)
         }
         return countryPlayer;
     }, {});

 }
 /*----------------------- END OF QUESTION 5 ------------------------- */

 //export functions to index.js

 module.exports.olympicHostedPerCity = olympicHostedPerCity;
 module.exports.numberOfTotalMedalPerCountry = numberOfTotalMedalPerCountry;
 module.exports.decadeYearWiseGenderCount = decadeYearWiseGenderCount;
 module.exports.averageAge = averageAge;
 module.exports.medalsOfIndia = medalsOfIndia;
