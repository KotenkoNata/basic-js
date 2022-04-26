
/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};

  let turns = Math.pow(2, disksNumber) - 1;

  result.turns = turns;

  result.seconds = Math.floor((3600 * turns) / turnsSpeed);

  return result;
}

module.exports = {
  calculateHanoi
};
