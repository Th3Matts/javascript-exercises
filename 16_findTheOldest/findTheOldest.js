/* MY ANSWER */
//The Odin answer is better because it uses reduce and does not mutate the original people array, but my solution still passes the tests!
const findTheOldest = function(people) {
  return people.sort(
    (a, b) => {

      const last = (a.yearOfDeath ? a.yearOfDeath : a.yearOfDeath = (new Date().getFullYear())) - a.yearOfBirth;
      const next = (b.yearOfDeath ? b.yearOfDeath : b.yearOfDeath = (new Date().getFullYear())) - b.yearOfBirth;
      return next - last
  })[0]
};

/* ODIN ANSWER */
// const findTheOldest = function(people) {
//   const getAge = (death, birth) => {
//     if(!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth
//   }

//   return people.reduce(
//     (oldest, current) => {
//       const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
//       const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
      
//       return oldestAge > currentAge ? oldest : current
//     });
// }

// Do not edit below this line
module.exports = findTheOldest;
