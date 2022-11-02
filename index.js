let engineIndicatorLight = "green blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let computerStatusCode = 500;
let shuttleSpeed = 15_000;
let fuelLevel = 100000;
let engineTemperature = 3200;
let commandOverride = false;
let clearedForLaunch = false;
// console.log(clearedForLaunch);

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

let crewStatus = '';
if (spaceSuitsOn && shuttleCabinReady === true){
  let crewStatus = "Crew Ready"
    console.log(crewStatus);
}else{ crewStatus = "Crew Not Ready";
     console.log(crewStatus)}


console.log(crewStatus);

if (computerStatusCode === 200){
  console.log("Please stand by. Computer is rebooting")
} else if (computerStatusCode ===400){
  console.log("Success! Computer online");
} else {
  console.log("ALERT: Computer offline")
}
  
if (shuttleSpeed > 17500){
  console.log ("ALERRT: Escape velocity reached!");
} else if( shuttleSpeed< 8000){
  console.log("ALERT: Cannot maintain orbit!");
  
}else{
  console.log ("Stable Speed");
}

if (fuelLevel > 20000 && engineTemperature <= 2500 && engineIndicatorLight !== "red blinking") {
  console.log("Full tank. Engines good.");
  clearedForLaunch = true;
  if (commandOverride === true){
    clearedForLaunch = true;
  }
  } else if (fuelLevel > 10000 && engineTemperature <= 2500 && engineIndicatorLight !== "red blinking"){
  console.log("Full level above 50%. Engines good.")
  clearedForLaunch = true;
  if (commandOverride === true){
    clearedForLaunch = true;
  }
} else if (fuelLevel > 5000 && engineTemperature <= 2500 && engineIndicatorLight !== "red blinking"){
  console.log("Fuel level above 25%. Engines good.")
  clearedForLaunch = true;
  if (commandOverride === true){
    clearedForLaunch = true;
  }
}else if ((fuelLevel <= 5000 && fuelLevel > 1000) || (engineTemperature >= 2500 && engineTemperature < 3500)&& engineIndicatorLight !== "red blinking" ){
  console.log("Check fuel level. Engines running hot.")
  clearedForLaunch = false;
    if (commandOverride === true){
    clearedForLaunch = true;
  }
}else if (fuelLevel <= 1000 || engineTemperature >= 3500 || engineIndicatorLight == "red blinking"){
  console.log("ENGINE FAILURE IMMINENT!")
  clearedForLaunch = false;
    if (commandOverride === true){
    clearedForLaunch = true;
  }
} else{
  console.log("Fuel and engine status pending")
  clearedForLaunch = false;
    if (commandOverride === true){
    clearedForLaunch = true;
  }
}
if (clearedForLaunch === true){
  console.log("Cleared for launch!")
  if (commandOverride === true){
    console.log("Command Override Engaged.")
  }
} else if (clearedForLaunch === false){
  console.log("Launch scrubbed!");
}
console.log(clearedForLaunch)