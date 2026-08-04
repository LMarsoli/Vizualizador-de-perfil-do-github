const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
    }

    return response.json();
}
