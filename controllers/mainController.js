const renderMainPage = (req, res) => {
    res.render('main');
};

const renderTrainRoutes = (req, res) => {
    res.render('trainRoutes');
};

const renderWallet = (req, res) => {
    res.render('wallet');
};

const renderUserProfile = (req, res) => {
    res.render('userProfile');
};

const renderLogin = (req, res) => {
    res.render('login');
};

const renderRegister = (req, res) => {
    res.render('register');
};

const renderModals = (req, res) => {
    res.render('modals');
};
const searchConnections = (req, res) => {
    const { from, to, date, hour } = req.body;
    const connection = {
        from,
        to,
        date,
        hour
    };
    res.render('trainRoutes', { connection });
};

const renderBuyTicket = (req, res) => {
    const { from, to, duration, connections, price, wherefrom, whereto } = req.query;

    if (!from || !to || !duration || !price) {
        return res.status(400).send("Missing required query parameters.");
    }

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
};

const renderSummary = (req, res) => {
    const { class: wherefrom, whereto, from, to, selectedClass, discount, seat, finalPrice } = req.query;
    res.render('summary', {
        wherefrom: wherefrom || 'Nie wybrano',
        whereto: whereto || 'Nie wybrano',
        from: from || 'Nie wybrano',
        to: to || 'Nie wybrano',
        selectedClass: selectedClass || 'Nie wybrano',
        discount: discount || 'Brak ulgi',
        seat: seat || 'Nie wybrane',
        finalPrice: finalPrice || 'Brak ceny'
    });
};

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