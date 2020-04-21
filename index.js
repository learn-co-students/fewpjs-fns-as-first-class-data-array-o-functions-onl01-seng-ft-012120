

  const wakeDog = function(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

const leashDog = function(dogName="Boo Radley", dogBreed="Pibble") {
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return `Leash ${dogName} the ${dogBreed}`
}

const walkToPark = function(dogName="Bunny", dogBreed="Labrador") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

const throwFrisbee = function(dogName="Mary J. Blige", dogBreed="Papillon") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

const walkHome = function(dogName="Santa Paws", dogBreed="Husky") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return `Walk home with ${dogName} the ${dogBreed}`
}

const unleashDog = function(dogName="Santa Paws", dogBreed="Husky") {
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
   
function exerciseDog (dog, breed) {
    return routine.map(fn => fn(dog, breed))
}
