## Takeoff Fuel Calculator

A precise aviation utility to calculate the exact amount of supplementary fuel required for a flight, ensuring compliance with whole-gallon purchase requirements.

### The Challenge

Airplanes often have mixed unit measurements (Gallons vs. Liters). This function bridges that gap while adhering to the following constraints:

    - Conversion Rate: 1 gallon = 3.78541 liters.

    - Safety First: If you need even a fraction of a gallon, you must round up to the next whole gallon.

    - Efficiency: If the tank already meets or exceeds requirements, no fuel should be added.

### Logic Implementation

The solution follows a three-step mathematical process:

    1. Standardise Units: Convert the destination requirements from Liters to Gallons.

    2. Calculate the Deficit: Subtract the current fuel on board from the required total.

    3. Apply Ceiling Rounding: Use `Math.ceil()` to ensure we always have enough fuel, as partial gallons cannot be added.

### Usage

```JavaScript

/**
 * Calculates additional whole gallons needed.
 * @param {number} currentGallons - Fuel already in the tank.
 * @param {number} requiredLiters - Fuel needed for the trip.
 * @returns {number} Integer representing whole gallons to add.
 */
function fuelToAdd(currentGallons, requiredLiters) {
    const literToGallonRatio = 3.78541;
    const requiredGallons = requiredLiters / literToGallonRatio;
    const deficit = requiredGallons - currentGallons

    return defecit <= 0 ? 0 : Math.ceil(defecit)
}
```

### What I Learned

#### Unit Standardization

I learned that when dealing with multiple units (Gallons and Liters), it is best to convert to the **target unit** (gallons) as early as possible to simplify the remaining logic.

#### Ceiling vs. Rounding

This project highlighted the difference between `Math.round()` and `Math.ceil(). In aviation or logistics, "rounding to the nearest" could leave you short. Using `Math.ceil()` ensures the requirement is always met or exceeded.

#### Handling Negative Results

By checking `deficit <= 0`, I learned how to handle cases where the airplane is already over-fueled, ensuring the function returns 0 instead of a negative number.
