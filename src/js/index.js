import { fetchGitHubUser } from './api.js';
import { getElements, renderLoading, renderProfile, renderError, setButtonState } from './ui.js';

const { inputSearch, btnSearch, profileResults } = getElements();

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (!userName) {
        renderError(profileResults, 'Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    renderLoading(profileResults);
    setButtonState(btnSearch, true);

    try {
        const userData = await fetchGitHubUser(userName);
        renderProfile(profileResults, userData);
    } catch (error) {
        console.error('Erro ao buscar o perfil do GitHub:', error);
        renderError(profileResults, error.message || 'Ocorreu um erro ao buscar o perfil do GitHub. Por favor, tente novamente mais tarde.');
    } finally {
        setButtonState(btnSearch, false);
    }
}); 