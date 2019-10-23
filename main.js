
var  personajes = document.querySelector('.personajes')
var  input = document.querySelector('#idP')
var boton = document.querySelector('#btn')


boton.addEventListener('click',(e)=>{
    e.preventDefault()
    fetchData(input.value).then(data=>{
       
        // console.log(`name: ${data.name}, height: ${data.height}`);
        personajes.innerHTML = `<p> name: ${data.name}, height: ${data.height} </p>`
                        
    });
    
})


async function fetchData(param = 1){

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`);
        
    return await response.json()
}



// var result = fetchData().then(data=>{

//     data.results.forEach((ele,pos)=>{
//         var newListElement = document.createElement('li')
//         var newParagraph = document.createElement('p')
        
//         newParagraph.innerHTML = ele.name
//         newListElement.appendChild(newParagraph)
//         newList.appendChild(newListElement)          
//     })        
//     // console.log(newList);
    
    
// });

// personajes.appendChild(newList)



// async function fetchData(){

//     const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        
//     return await response.json()
// }
