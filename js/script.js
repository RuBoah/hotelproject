const button = document.getElementById('btn')
button.addEventListener('click',()=> {
 fetchData('https://dummyjson.com/products?limit=5')

})

async function fetchData(url) {
      //fetch the data
   const data = await fetch(url)
   //await the promise to get your response 
   const response =  await data.json() 
   console.table(response)  





// response.map(
//       (todo) => {
//       console.log(todo)
        
}


// Function to render data in cards
// async function renderData() {
//     const container = document.querySelector('.data-container');
//     const data = await fetchData();

//     if (!data) {
//         return;
//     }

//     data.forEach(item => {
//         const card = document.createElement('div');
//         card.classList.add('card');

//         const title = document.createElement('h2');
//         title.textContent = item.title;

//         const body = document.createElement('p');
//         body.textContent = item.body;
//         card.appendChild(title);
//         card.appendChild(body);
//         container.appendChild(card);
//     });
// }


// const button = document.getElementById('btn')
// button.addEventListener('click',()=> {
//  fetchData('https://jsonplaceholder.typicode.com/users')

// })
// async function fetchData(url) {
//       //fetch the data
//    const data = await fetch(url)
//    //await the promise to get your response 
//    const response =  await data.json()
//    console.log(response) 

// console.log(response[1])
   
// response.map(
//       (users) => {
//       console.log(users)
//       console.log(users.email)
//       console.log(users.username)
//       console.log(users.company.name)
//       console.log(users.address.geo.lat)
//       console.log(users.company.catchPhrase)
      
// }

// )


// }



// async function fetchData(url) {
//       //fetch the data
//    const data = await fetch(url)
//    //await the promise to get your response 
//    const response =  await data.json()
//    console.log(response) 

// console.log(response[1])
   
// response.map(
//       (users) => {
//       console.log(users)
//       console.log(users.email)
//       console.log(users.username)
//       console.log(users.company.name)
//       console.log(users.address.geo.lat)
//       console.log(users.company.catchPhrase)
      
// }

// )


// }







// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))