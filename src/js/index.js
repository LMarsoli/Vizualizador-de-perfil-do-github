const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;
    if (userName) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
        btnSearch.disabled = true;

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);
            // aqui você pode adicionar a lógica para buscar o perfil do GitHub usando a API

            if (!response.ok) {
                profileResults.innerHTML = '';
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                return;
            }

            const userData = await response.json();
            console.log(userData); // apenas para verificar se os dados estão sendo retornados corretamente

            profileResults.innerHTML = `
                <div class="profile-card">
                    <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                    <div class="profile-info">
                        <h2>${userData.name}</h2>
                        <p>${userData.bio || 'Não possui bio cadastrada 😢'}</p>
                    </div>
                </div>`;

        } catch (error) {
            profileResults.innerHTML = '';
            console.error('Erro ao buscar o perfil do GitHub:', error);
            alert('Ocorreu um erro ao buscar o perfil do GitHub. Por favor, tente novamente mais tarde.');
        } finally {
            btnSearch.disabled = false;
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
}); 