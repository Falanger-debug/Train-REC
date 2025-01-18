const users = [
    { email: 'user@example.com', password: '123', loggedIn: false}
];

const renderMainPage = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if(isLoggedIn) {
        res.render('main', { user: req.session.user, isLoggedIn });
    } else {
        res.redirect('/login');
    }
};

const renderTrainRoutes = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if(isLoggedIn) {
        res.render('trainRoutes', { user: req.session.user, isLoggedIn });
    } else {
        res.redirect('/login');
    }
};

const renderWallet = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if(isLoggedIn) {
        res.render('wallet', { user: req.session.user, isLoggedIn });
    } else {
        res.redirect('/login');
    }
};

const renderUserProfile = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if(isLoggedIn) {
        res.render('userProfile', { user: req.session.user, isLoggedIn });
    } else {
        res.redirect('/login');
    }
};

const renderLogin = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if(!isLoggedIn) {
        res.render('login', { user: req.session.user, isLoggedIn });
    } else {
        res.redirect('/');
    }
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        user.loggedIn = true;
        req.session.user = user;
        res.redirect('/');
    } else {
        res.send('Błędne dane logowania');
    }
}

const logoutUser = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if(isLoggedIn) {
        req.session.user.loggedIn = false;
        req.session.destroy(() => {
            res.redirect('/login');
        });
    } else {
        res.redirect('/login');
    }

}

const renderRegister = (req, res) => {
    if(!req.session.user || !req.session.user.loggedIn) {
        res.render('register', { user: req.session.user });
    } else {
        res.redirect('/main');
    }
};

const registerUser = (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.redirect('/login');
}

const renderModals = (req, res) => {
    res.render('modals');
};
const searchConnections = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
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

const renderSeatChoicePanel = (req, res) => {
    res.render('seatChoicePanel');
}

const renderPayForTicket = (req, res) => {
    res.render('payForTicket');
}

export { renderMainPage,
    renderTrainRoutes,
    renderWallet,
    renderUserProfile,
    renderLogin,
    loginUser,
    logoutUser,
    renderRegister,
    registerUser,
    renderModals,
    searchConnections,
    renderBuyTicket,
    renderSummary,
    renderSeatChoicePanel,
    renderPayForTicket
};