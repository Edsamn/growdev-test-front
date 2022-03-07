// async function loadusers() {
//     try {
//         const lista = document.getElementById('lista');
//         axios.get('8080')
//             .then(response => {
//                 response.data.forEach(user => {
//                     lista.innerHTML += `
//                 <li>${user.name}<li>
//             `;
//                 });
//             });

//     } catch (error) {
//         (error => console.log(error));
//     }


//     axios.post('/users', {
//         name: 'Vini',
//         idade: 18,
//         email: ''
//     });
// }

// axios.put('/users/1');
// axios.delete(); 

async function getUserById(event, userId) {

}

async function saveUser(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const id = document.getElementById('user-id');
    const user = {
        name: name.value,
        age: age.value
    };

    if (id) {
        const { status, data } = await axis.put(`/users/${id}`, user);
    } else {
        const { status, data } = await axis.post('/users', user);
    }

    name.value = '',
    age.value = '',
    id.value = ''
}

async function updateUser(event) {
    event.preventDefault()
    const { status, data } = await axios.get(``)
}

loadUsers();