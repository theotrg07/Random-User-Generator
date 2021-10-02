const btn = document.querySelector('.button');
const name = document.querySelector('.name')
const image= document.querySelector('.img');
const gender= document.querySelector('.gender');
const phone= document.querySelector('.phone');
const email= document.querySelector('.email');
const age= document.querySelector('.age');
const born= document.querySelector('.born');
const country= document.querySelector('.country');
const city= document.querySelector('.city');
const postcode= document.querySelector('.postcode');
const password = document.querySelector('.password');
const username = document.querySelector('.username');







btn.addEventListener('click', getData);

function getData(){
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        let results = data.results;
        // console.log(author);
        
        
        
        results.forEach(function(lists){
            name.innerHTML = `<h2>${lists.name.title} ${lists.name.first} ${lists.name.last}</h2>`;
            image.innerHTML = `<div><img src= '${lists.picture.large}'></div>`;
            phone.innerText = `Phone Number: ${lists.cell}`;
            born.innerText = `Born: ${lists.dob.date}`;
            age.innerText = `Age: ${lists.dob.age}`;
            email.innerText = `Email: ${lists.email}`;
            country.innerText = `Country: ${lists.location.country}`;
            city.innerText = `City: ${lists.location.city}`;
            postcode.innerText = `Postcode: ${lists.location.postcode}`;
            password.innerText = `Password: ${lists.login.password}`;
            username.innerText = `Username: ${lists.login.username}`;
        });
})
}