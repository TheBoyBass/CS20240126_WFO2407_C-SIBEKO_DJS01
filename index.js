/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const InitVelocityKmph = 10000; // Initial velocity (km/h)
const InitVelocityMps = InitVelocityKmph * (1000 / 3600)
const Acceleration = 3; // Space Crafts aceleration (m/s^2)
const OneHourInSeconds = 3600; // duration of the calculation in seconds (1 hour)
const InitDistance = 0; // distance from reference point (km)
const Initfuel = 5000; // Initial fuel (kg)
const FuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
const CalcNewVelocity = ( Acceleration ,InitVelocityMps, OneHourInSeconds) => { 
  return (InitVelocityMps + (Acceleration * OneHourInSeconds))*(3600/1000)
}

const NewDistance = InitDistance + (InitVelocityMps * OneHourInSeconds)/1000 //calcultes new distance in Km
const RemainingFuel = Initfuel - (FuelBurnRate * OneHourInSeconds) //calculates remaining fuel in kg
const NewVelocity = CalcNewVelocity(Acceleration , InitVelocityMps, OneHourInSeconds) //calculates new velocity based on acceleration in km/h



console.log(`Corrected New Velocity: ${NewVelocity} km/h`);
console.log(`Corrected New Distance: ${NewDistance} km`);
console.log(`Corrected Remaining Fuel: ${RemainingFuel} kg`);