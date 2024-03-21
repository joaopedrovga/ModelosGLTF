const fileListContainer = document.getElementById('file-list');

axios.get('https://api.github.com/repos/seu-username/seu-repositorio/contents')
    .then(response => {
        const files = response.data;
        files.forEach(file => {
            fileListContainer.innerHTML += `<p><a href="${file.html_url}" target="_blank">${file.name}</a></p>`;
        });
    })
    .catch(error => {
        console.error('Erro ao recuperar a lista de arquivos:', error);
    });