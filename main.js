import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

let user = {
  name: "Mac",
  age: Number(prompt('Quel age as-tu ?')),
  isAdmin: true,
  follower: false,
};
// let key = prompt("What do you want to know about the user?", "name");

let app = document.querySelector('#app');

let div = document.createElement("div");
app.appendChild(div);

let viteJsLogo = document.createElement("a");
viteJsLogo.href = "https://vitejs.dev";
viteJsLogo.target= "_blank";
div.appendChild(viteJsLogo);
viteJsLogo.innerHTML = `<img src="${viteLogo}" class="logo" alt="Vite logo" />`;

let jsLogo = document.createElement("a");
jsLogo.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
viteJsLogo.target= "_blank";
div.appendChild(jsLogo);
jsLogo.innerHTML = `<img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />`;

let h1 = document.createElement("h1");
h1.textContent = "Hello Vite !";
div.appendChild(h1);

let div2 = document.createElement("div");
div.appendChild(div2);

let card = document.createElement("div");
card.className = "card";
div2.appendChild(card);
card.innerHTML = `
  <button id="isadmin" type="button">Je suis admin</button>
  <button id="isnotadmin" type="button">Je suis pas admin</button>

  <br>

  <button id="follow" type="button">Suivre</button>
  <button id="unfollow" type="button">Ne plus suivre</button>
`;

// Si il est admin ou pas en cliquant
document.getElementById("isadmin").addEventListener("click", userGetAdmin);
document.getElementById("isnotadmin").addEventListener("click", userGetNotAdmin);
function userGetAdmin(){
  user.isAdmin = true;
  var userAdmin = 'est admin.'
  console.log(user.isAdmin);

  return readTheDocs.innerHTML = `${user.name} a ${user.age} ans, et il ` + userAdmin;
}
function userGetNotAdmin(){
  user.isAdmin = false;
  var userAdmin = "n'est pas admin."
  console.log(user.isAdmin);

  return readTheDocs.innerHTML = `${user.name} a ${user.age} ans, et il ` + userAdmin;
}

document.getElementById("follow").addEventListener("click", following);
document.getElementById("unfollow").addEventListener("click", unfollowing);
function following(){
  user.follower = true;
  console.log(user);
}
function unfollowing(){
  delete user.follower;
  console.log(user);
}

if (user.isAdmin == true){
  var userAdmin = "est admin.";
  console.log(user.isAdmin);
} else {
  var userAdmin = "n'est pas admin.";
  console.log(user.isAdmin);
};
let readTheDocs = document.createElement("p");
readTheDocs.className = "read-the-docs";
readTheDocs.innerHTML = `${user.name} a ${user.age} ans, et il ` + userAdmin;
div2.appendChild(readTheDocs);

console.log(user);

alert( user[key] ); // Mac (if enter "name"), 30 (if enter "age")