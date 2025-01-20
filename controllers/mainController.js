import bcrypt from 'bcrypt';
const users = [];


const renderMainPage = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        res.render('main', {user: req.session.user, isLoggedIn});
    } else {
        res.redirect('/login');
    }
};

const renderTrainRoutes = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        res.render('trainRoutes', {user: req.session.user, isLoggedIn});
    } else {
        res.redirect('/login');
    }
};

const renderWallet = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        res.render('wallet', {user: req.session.user, isLoggedIn});
    } else {
        res.redirect('/login');
    }
};

const renderUserProfile = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        res.render('userProfile', {user: req.session.user, isLoggedIn});
    } else {
        res.redirect('/login');
    }
};

const renderLogin = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (!isLoggedIn) {
        res.render('login', {user: req.session.user, isLoggedIn, errorMessage: null});
    } else {
        res.redirect('/');
    }
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;


    const user = users.find(u => u.email === email);

    if (user && await bcrypt.compare(password, user.password)) {
        user.loggedIn = true;
        req.session.user = user;
        res.redirect('/');
    } else {
        console.log('Error Message: Błędne dane logowania');
        res.status(401).render('login', {
            errorMessage: 'Błędne dane logowania',
            email
        });
    }
}

const logoutUser = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        req.session.user.loggedIn = false;
        req.session.destroy(() => {
            res.redirect('/login');
        });
    } else {
        res.redirect('/login');
    }

}

const renderRegister = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    const user = req.session.user || null;
    if (!isLoggedIn) {
        res.render('register', {user, errorMessage: null});
    } else {
        res.redirect('/main');
    }
};

const registerUser = async (req, res) => {
    const {email, password} = req.body;
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        res.status(409).render('register', {errorMessage: 'Użytkownik o podanym adresie email już istnieje', email});
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({email, password: hashedPassword, loggedIn: false});
        console.log('Aktualna tablica users:', users);
        res.redirect('/login');
    }
}

const renderModals = (req, res) => {
    res.render('modals');
};
const searchConnections = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    const {from, to, date, hour} = req.body;
    const connection = {
        from, to, date, hour
    };
    res.render('trainRoutes', {connection});
};

const renderBuyTicket = (req, res) => {
    const {from, to, duration, connections, price, wherefrom, whereto} = req.query;

    if (!from || !to || !duration || !price) {
        return res.status(400).send("Missing required query parameters.");
    }

    const ticket = {
        from, to, duration, connections, price, wherefrom, whereto
    }
    res.render('buyTicket', {ticket});
};

const renderSummary = (req, res) => {
    const {class: wherefrom, whereto, from, to, selectedClass, discount, seat, finalPrice} = req.query;
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

export {
    renderMainPage,
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