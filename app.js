'User Strict';
// var rannum = Math.floor(Math.random() * 20);
// for (i = 0; i < 20; i++) {
//   var rannum = Math.floor(Math.random(i) * 20);
//   console.log(rannum);
// };

for (i = 0; i < 3; i++) {
  var pic = genran();
  console.log(pic);
};

function genran() {
  return Math.floor(Math.random() * 20);
};
genran();
