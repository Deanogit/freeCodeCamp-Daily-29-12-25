// Takeoff Fuel
// Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.

// 1 gallon equals 3.78541 liters.
// If the airplane already has enough fuel, return 0.
// You can only add whole gallons.
// Do not include decimals in the return number.

function fuelToAdd(currentGallons, requiredLiters) {
  console.log(currentGallons, requiredLiters);

  // 1 gallon = 3.78541 liters

  // get current gallons in litres
  const currentLiters = currentGallons * 3.78541;
  console.log(currentLiters);
  if (currentLiters > requiredLiters) {
    return 0;
  }
  if (currentLiters < requiredLiters) {
    // determine how many additional gallons of fuel you should add
    console.log(requiredLiters - currentLiters);
    let defecitLiters = requiredLiters - currentLiters;
    // if defecitLiters < 3.78541
    if (defecitLiters < 3.78541) return 1;
  } else {
    console.log(defecitLiters / 3.78541);
  }

  // return currentGallons;
}

fuelToAdd(1000, 50000);
