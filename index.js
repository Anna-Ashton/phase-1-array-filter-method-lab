// Code your solution here
let findMatching = (nameOfDrivers, gotDriver) => {
    return nameOfDrivers.filter(driverName => {return driverName.toLowerCase()===gotDriver.toLowerCase()});
}

let fuzzyMatch = (nameOfDrivers, lettersMatching) => {
return nameOfDrivers.filter(driverName=>{return driverName.substring(0,2) ===lettersMatching});
}

let matchName = (nameOfDrivers, nameMatches) => {
    return nameOfDrivers.filter(driverName=>{return driverName.name=== nameMatches});
}