async function loadusers() {
    try {
        const lista = document.getElementById('lista');
        axios.get('8080')
            .then(response => {
                response.data.forEach(user => {
                    lista.innerHTML += `
                <li>${user.name}<li>
            `;
                });
            });

    } catch (error) {
        (error => console.log(error));
    }


    axios.post('/users', {
        name: 'Vini',
        idade: 18,
        email: ''
    });
}

axios.put('/users/1');
axios.delete();   