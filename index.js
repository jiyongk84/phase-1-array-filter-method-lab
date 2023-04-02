function findMatching(driverNames, str) {
    return driverNames.filter(names => names.toLowerCase() === str.toLowerCase()) 
}
function fuzzyMatch(driverNames, beginLetter) {
    return driverNames.filter(names => names.charAt(0) === beginLetter.charAt(0))
}

function matchName(drivers, str) {
    return drivers.filter(drivernames => drivernames.name === str)
}