const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')
const URL = 'http://localhost:3000'

const generateTemplate = (item) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `

    list.innerHTML += html;

}


addForm.addEventListener('submit', e=> {
    
    e.preventDefault();
    const item = addForm.add.value.trim();

    if(item.length){
        generateTemplate(item)
        addForm.reset()
        updateDb('addItem', item)
    }
   
})


list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        const itemToDelete = e.target.parentElement.textContent.trim()
        e.target.parentElement.remove()
        updateDb('deleteItem', itemToDelete)

    }
})


const filterTools = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            todo.classList.add('filtered');
        })

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
}

search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filterTools(term)
})


const updateDb = (query, item) => {
    const queryString = URL + `/${query}/${item}`;
    fetch(queryString, {method : 'POST'})
        .then(response => response.json())
        .then(data => console.log(data))
}