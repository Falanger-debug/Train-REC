const users = []

async function readUsers() {
    try {
        const data = await fs.readFile('./data/users.json', 'utf-8');
        const jsonData = JSON.parse(data);
        return jsonData.users;
    }  catch (error) {
        console.error('Błąd podczas odczytu pliku z użytkownikami', error);
        return [];
    }
}

async function writeUsers(users) {
    try {
        const jsonData = { users };
        await fs.writeFile('./data/users.json', JSON.stringify(jsonData, null, 2), 'utf-8');
        console.log('Zapisano użytkowników do pliku');
    } catch (error) {
        console.error('Błąd podczas zapisu pliku z użytkownikami', error);
    }
}
