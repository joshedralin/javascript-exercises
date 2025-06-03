const findAge = (person) => {
    const death = person.yearOfDeath ?? new Date().getFullYear();
    return death - person.yearOfBirth;
};

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        return findAge(oldest) > findAge(current) ? oldest : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
