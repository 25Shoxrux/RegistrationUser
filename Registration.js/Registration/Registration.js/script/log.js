let formL = document.forms.log
let registeredUser = localStorage.getItem('user')
registeredUser = JSON.parse(registeredUser)




formL.onsubmit = (event) => {

    event.preventDefault()


    let user = {}


    let fm = new FormData(formL)

    fm.forEach((value, key) =>{
        user[key] = value
    })

    
    console.log(user);


    if(registeredUser.email === user.email && registeredUser.password === user.password){
        window.location = "../html/home.html"

    } else{
        window.location = "../html/log.html"
        alert('Please register')

    }
}