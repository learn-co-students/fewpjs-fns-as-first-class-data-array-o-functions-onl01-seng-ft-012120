function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
  }

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName, dogBreed) {
    let activity = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity;
}

function throwFrisbee(dogName, dogBreed) {
    let activity = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity;
}

function walkHome(dogName, dogBreed) {
    let activity = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity;
}

function unleashDog(dogName, dogBreed) {
    let activity = `Unleash ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let result = [];
    for (let i = 0; i < routine.length; i++ ) {
        result.push(routine[i](dogName, dogBreed));
    }
    return result; 
    
}