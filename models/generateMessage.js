const { Occupations, tasks, phrases } = require("../constants");

const sample = box => {
  const index = Math.floor(Math.random() * box.length);
  return box[index];
};

const generateMessage = target => {
  if (!target) return "choose a Occupation first =)";
  const Occupation = Occupations[target];
  if (!Occupation) return "Wrong Occupation";
  const task = sample(tasks[target]);
  const phrase = sample(phrases);
  return `${Occupation} ${task} ${phrase}`;
};

module.exports = generateMessage;
