import userService from "./modules/userService.js";


//awaita nesto sto e asinhrono
let users=await userService.getAll();
localStorage=setItem("users", JSON.stringify(users));
console.log(users);


let firstUser=await userService.getById(1);
console.log(firstUser);
