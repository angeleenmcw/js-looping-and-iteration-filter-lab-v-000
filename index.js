function findMatching (drivers, name) {
  return drivers.filter(function(arrObj){return arrObj.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch (drivers, name) {
  return drivers.filter(function(drivers))
}