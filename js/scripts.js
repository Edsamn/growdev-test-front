const lista = document.getElementById('lista');
axios.get(/* rota */)
    .then(response => {
        response.data.forEach(user => {
            lista.innerHTML += `
                <li>${user.name}<li>
            `;
        });
    });

    .catch(error => {
        console.log(error);
    });

axios.post('/users', {
    name: 'Vini',
    idade: 18,
    email:''
});

axios.put('/users/1');
axios.delete();   