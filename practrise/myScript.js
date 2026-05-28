let Likes = 0;
function getLikes(){
    Likes++;
    document.getElementById('likes').innerHTML = 'Likes :' + Likes;
}

function connect(){
    document.getElementById('status').innerHTML = 'Online';
}

function send(){
    document.getElementById('chat').innerHTML += "wave";
}

let lightisON = false;
function toggleLight(){
    if(lightisON == false){
        document.getElementById('light').innerHTML = 'Light ON';
        lightisON = true;
    } else {
        document.getElementById('light').innerHTML = 'Light OFF';
        lightisON = false;
    };
};

let isLiked = false;
function askLiked(){
    if(isLiked == false){
        document.getElementById('Liked').innerHTML = '❤️ Liked';
        isLiked = true;
    } else {
        document.getElementById('Liked').innerHTML = '❤️ Not Liked';
        isLiked = false;
    };
};

let x = 10;
let y = 5;
document.getElementById('demo').innerHTML = x+y;

let fname = "John", lname = "Doe", age = 46;

const fruits = ["apple","oranges"];
fruits[2] = "banana";
console.log(fruits);

