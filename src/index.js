const fs = require('fs');

const olympicFunction = require('./olympics');
const athleteData = require('../data/athlete_events.json');

let finalResult = {}

 finalResult["olympicHostedPerCity"] = olympicFunction.olympicHostedPerCity(athleteData);
 finalResult["numberOfTotalMedalPerCountry"] = olympicFunction.numberOfTotalMedalPerCountry(athleteData, 2000);
 finalResult["decadeYearWiseGenderCount"] = olympicFunction.decadeYearWiseGenderCount(athleteData);
 finalResult["averageAge"] = olympicFunction.averageAge(athleteData, "Boxing Men's Heavyweight")
 finalResult["medalsOfIndia"] = olympicFunction.medalsOfIndia(athleteData, 'India')

 finalResult = JSON.stringify(finalResult, null, 4);

 fs.writeFile('../output/olympicJsonObject.json',finalResult, (err) => {
    if( err ) {
        return (err);
    }
  })


