export function getElements() {
    return {
        inputSearch: document.getElementById('input-search'),
        btnSearch: document.getElementById('btn-search'),
        profileResults: document.querySelector('.profile-results'),
    };
}

export function renderLoading(container) {
    container.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function renderProfile(container, userData) {
    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name || userData.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <p>Seguidores</p>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <p>Seguindo</p>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function renderError(container, message) {
    container.innerHTML = '';
    alert(message);
}

export function setButtonState(button, disabled) {
    button.disabled = disabled;
}
