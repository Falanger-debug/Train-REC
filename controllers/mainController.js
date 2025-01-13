const renderMainPage = (req, res) => {
    res.render('main');
};

const renderTrainRoutes = (req, res) => {
    res.render('trainRoutes');
}

const renderWallet = (req, res) => {
    res.render('wallet');
}

const renderUserProfile = (req, res) => {
    res.render('userProfile');
}

const renderLogin = (req, res) => {
    res.render('login');
}

const renderRegister = (req, res) => {
    res.render('register');
}

const renderModals = (req, res) => {
    res.render('modals');
}
const searchConnections = (req, res) => {
    const { from, to, date, hour } = req.body;
    const connection = {
        from,
        to,
        date,
        hour
    };
    res.render('trainRoutes', { connection });
}

const renderBuyTicket = (req, res) => {
    const { from, to, duration, connections, price, wherefrom, whereto } = req.query;
    const ticket = {
        from,
        to,
        duration,
        connections,
        price,
        wherefrom,
        whereto
    }
    res.render('buyTicket', {ticket});
}

const renderSummary = (req, res) => {
    const { class: selectedClass, discount, seat, price } = req.query;
    res.render('summary', {
        selectedClass: selectedClass || 'Nie wybrano',
        discount: discount || 'Brak ulgi',
        seat: seat || 'Nie wybrane',
        price: price || 'Brak ceny'
    });
}

export { renderMainPage,
    renderTrainRoutes,
    renderWallet,
    renderUserProfile,
    renderLogin,
    renderRegister,
    renderModals,
    searchConnections,
    renderBuyTicket,
    renderSummary};