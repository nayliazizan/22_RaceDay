let raceNumber = Math.floor(Math.random() * 1000);

console.log(raceNumber);

const registeredEarly = false;

const runnerAge = 34;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
console.log(raceNumber);

if (runnerAge > 18 && registeredEarly) {
  console.log(`${raceNumber} will start the race at 9.30AM`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`${raceNumber} will start the race at 11.00AM`);
} else if (runnerAge < 18){
  console.log(`${raceNumber} will start the race at 12.30PM`);
} else {
  console.log(`${raceNumber} need to go to registration desk`);
}