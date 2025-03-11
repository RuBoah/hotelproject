fetchData('https://fakestoreapi.com/products')
    

    async function fetchData(url) {
        const data = await fetch(url)
    const response = await data.json()

    for(const item of response){
        //create item card div
        const div = document.createElement('div');
        //create h1 and append to card div
        const h1 =document.createElement('h1');
        h1.innerText = item.title;
        h1.classList.add('text-3xl');
        div.appendChild(h1);
        //create img and append to card div
        const image = document.createElement('img');
        image.setAttribute('src',item.image);
        image.setAttribute('alt',item.title);
        image.classList.add('h-[250px]');
    
        div.appendChild(image);
        //Append card div to products div
        const parent = document.getElementById('products');
        parent.appendChild(div);
    }
    }
    








// async function fetchData(url) {
//       //fetch the data
//    const response = await fetch(url)
//    //await the promise to get your response 
//    const data =  await data.json() 
//    console.log(response)  
//    return response;
// }
// // Function to render data in cards
// async function renderData() {
//     const container = document.querySelector('.data-container');
//     const data = await fetchData('https://dummyjson.com/products?limit=5');

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

// renderData()