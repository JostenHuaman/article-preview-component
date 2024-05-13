const user = document.querySelector('#user');
const share = document.querySelector('#share');
const share2 = document.querySelector('#share2');
const usercontainer = document.querySelector('#usercontainer');
const sharecontainer = document.querySelector('#sharecontainer');

// user.addEventListener('click', () => {
//     usercontainer.style.display = 'none';
//     sharecontainer.style.display = 'flex';
// })

// share.addEventListener('click', () => {
//     usercontainer.style.display = 'flex';
//     sharecontainer.style.display = 'none';
// })

if (window.innerWidth < 1000) {

    user.addEventListener('click', () => {
        usercontainer.style.display = 'none';
        sharecontainer.style.display = 'flex';
    })
    
    share.addEventListener('click', () => {
        usercontainer.style.display = 'flex';
        sharecontainer.style.display = 'none';
    })
}else{
    user.addEventListener('click', () => {
        usercontainer.style.display = 'flex';
        sharecontainer.style.display = 'flex';
        user.style.display = 'none';
        share2.style.display = 'flex';
    })
    share2.addEventListener('click', () => {
        usercontainer.style.display = 'flex';
        sharecontainer.style.display = 'none';
        user.style.display = 'flex';
        share2.style.display = 'none';
    })
}