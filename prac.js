//map()

let userList = [
  {name: 'Taein', age: 25},
  {name: 'Jeongin', age: 27},
  {name: 'Sangyeop', age: 31},
];

let newUserlist = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19, 
  });
});

console.log(newUserlist);