var add = title => {
  console.log("Added:", title);
};
var remove = title => {
  console.log("Remove:", title);
};
var getAll = title => {
  console.log("All list:", title);
};

module.exports = {
  add,
  remove,
  getAll
};
