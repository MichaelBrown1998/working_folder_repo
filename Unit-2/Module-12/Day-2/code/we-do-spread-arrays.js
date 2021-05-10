const vehicles = ["Ford", "Chevy", "Tesla", "Benz", "Toyota", "Mazda", "Chrysler", "Airplane"];

const otherVehicles = ["ship", "boat", "spaceship", "Ford"]

// Create a new array without mutating the originals...and add a couple of other random primitive data
const allVehicles = [...vehicles, ...otherVehicles, 23, "Why not mix and match?"];

/**
 * 1. Notice that both of the spread arrays are not mutated.
 * 2. Notice that since "Ford" is in both of the original arrays, it shows up 2x.
 * 3. Notice that we can add single elements along with spread arrays all together!
 */
console.log(allVehicles, otherVehicles, vehicles);

/**
 * Each array has its own memory reference
 * Changes to 1 won't affect the other...for the most part...
 * We will have a separate lesson on data in JS with regard to copy/value vs references!
 */
allVehicles[0] = "Some other vehicle."

console.log(allVehicles, otherVehicles, vehicles);