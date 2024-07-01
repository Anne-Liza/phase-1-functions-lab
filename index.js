// Code your solution in this file!

// returns a distance in blocks ,  calculates distances below 42nd street
function distanceFromHqInBlocks(pickupLocation){
    const hq = 42;
    return Math.abs(pickupLocation - hq);
    console.log (result);

}
// returns a distance in feet,  returns a distance in feet, calculates distances below 42nd street
function distanceFromHqInFeet(pickupLocation){
    const hq = 42;
    return Math.abs(pickupLocation -hq)* 264;
    console.log (result);
}
// returns the distance travelled in feet, returns a distance in feet , returns distance when destination is below distance
function distanceTravelledInFeet (start, destination){
    const distanceFromHqInBlocks = Math.abs(start - destination);
    const distanceFromHqInFeet = Math.abs(distanceFromHqInBlocks)* 264;
    return distanceFromHqInFeet;
    console.log (result);
}
// gives customers a free sample, charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!) , charges 25 dollars for a distance over 2000 feet, does not allow rides over 2500 feet
function calculatesFarePrice(start, destination){
    const feet =Math.abs (destination - start)*264;

    let result;
    if (feet<=400) {
        result = 0;
        return result;
    }
    else if (feet> 400 && feet<= 2000) {
        result = (feet-400)*0.02;
        return result;
    }
    else if(feet>2000 && feet<=2500){
        result =  25;
        return result;
    }
    else if(feet>=2500){
    result = "cannot travel that far"
    return result;
    }
}
    