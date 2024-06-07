let form = document.querySelector('form') 

form.addEventListener('submit', e => {
    e.preventDefault()

    let email = form.querySelector('input').value
    let small = form.querySelector('small')

    if (email.trim() === '') {
        form.classList.add('error')
        small.style.color = 'red'
        small.innerHTML = 'Email cannot be empty'
        
     } else if (!valid(email)) {
        form.classList.add('error')
        small.style.color = 'red'
        small.innerHTML = 'Please provide a valid email'

     } else {
        small.style.color = 'green'
        small.innerHTML = 'Email comfirm'

        setTimeout(() => {
        form.classList.remove('error')
        }, 1000);
     }
})

function valid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLocaleLowerCase());
}