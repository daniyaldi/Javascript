let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly= true;
let runnerAge=18;
if(runnerAge>18)
{
  raceNumber+=1000;
}

if(runnerAge>18 && registeredEarly===true )
{
  console.log(`they will race at 9:30am and their race number is ${raceNumber}` );
}
else if(runnerAge>18 && registeredEarly===false)
{
  console.log(`they will race at 11:00am and their race number is ${raceNumber}`)
}
else if(runnerAge<18)
{
  console.log(`they will race at 12:30pm and their race number is ${raceNumber}`)
}
else if(runnerAge===18)
{
  console.log('see the registeration desk');
}
else
{
  console.log('invalid age');
}