// Your code goes here


document.addEventListener('DOMContentLoaded', function(){
    let input = document.querySelector('p');
    input.textContent= 'This is really cool!';

});




/*document.addEventListener('DOMContentLoaded', (e) => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        toDO(e.target.new_todo.value)
        form.reset()

    });
})

function toDO (dothis){
    console.log(dothis)
    let p = document.createElement('p');
    let btn = document.createElement('button')
    btn.addEventListener('click',deleteafter)
    btn.textContent = 'Del';
    p.textContent = `${dothis} `
    p.append(btn)
    

    document.querySelector('#todo_container').appendChild(p)
}
 function deleteafter (e) {
    e.target.parentNode.remove()
 }
 */

 