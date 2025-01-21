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
        res.render('wallet', {user: req.session.user, isLoggedIn, wallet: req.session.user.wallet});
    } else {
        res.redirect('/login');
    }
};

const payIntoWallet = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        const {amount} = req.body;
        const user = req.session.user || null;

        if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
            user.wallet += parseFloat(amount);
            res.render('wallet', {user, isLoggedIn, wallet: user.wallet});
        } else {
            res.render('wallet', {user, isLoggedIn, wallet: user.wallet, errorMessage: 'Invalid amount'});
        }
    } else {
        res.redirect('/login');
    }
};

const payOutOfWallet = async (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;

    console.log('jestem w payOutOfWallet');
    console.log('req.body:', req.body);

    if (!isLoggedIn) {
        return res.json({
            success: false, message: 'Użytkownik nie jest zalogowany.', wallet: 0
        });
    }

    const ticket = req.body.ticket;

    if (!ticket) {
        return res.json({
            success: false, message: 'Brak danych o bilecie.',
        });
    }

    const {wherefrom, whereto, from, to, seat, classType, price, discount} = ticket;
    let ticketPrice = parseFloat(price);
    const user = req.session.user || null;
    const isByWallet = req.body.hasOwnProperty('isByWallet') ? req.body.isByWallet : true;

    console.log('wherefrom', wherefrom, 'whereto', whereto, 'from', from, 'to', to, 'seat', seat, 'classType', classType, 'price', ticketPrice, 'discount', discount);

    if (ticketPrice && !isNaN(ticketPrice) && ticketPrice > 0) {
        const ticket = {
            wherefrom, whereto, from, to, seat, classType, ticketPrice, discount
        }
        console.log('Ticket:', ticket);

        if (!isByWallet) {
            user.tickets.push(ticket);

            return res.json({
                success: true, message: 'Płatność BLIK zakończona powodzeniem.', wallet: user.wallet.toFixed(2)
            });
        } else {
            if (user.wallet >= ticketPrice) {
                user.wallet -= ticketPrice;

                user.tickets.push(ticket);

                return res.json({
                    success: true,
                    message: 'Płatność z portfela zakończona powodzeniem.',
                    wallet: user.wallet.toFixed(2)
                });
            } else {
                return res.json({
                    success: false, message: 'Niewystarczające środki w portfelu.', wallet: user.wallet.toFixed(2)
                });
            }
        }
    } else {
        return res.json({
            success: false, message: 'Nieprawidłowa kwota.', wallet: user.wallet.toFixed(2)
        });
    }
}

const renderUserProfile = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        console.log('user tickets: ', req.session.user.tickets);
        res.render('userProfile', {user: req.session.user, isLoggedIn, tickets: req.session.user.tickets || []});
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
            errorMessage: 'Błędne dane logowania', email
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
        res.render('register', {user, tickets: [], errorMessage: null});
    } else {
        res.redirect('/main');
    }
};

const registerUser = async (req, res) => {
    const {email, password} = req.body;
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        res.status(409).render('register', {
            errorMessage: 'Użytkownik o podanym adresie email już istnieje', email
        });
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({email, password: hashedPassword, loggedIn: false, wallet: 0, tickets: []});
        console.log('Aktualna tablica users:', users);
        res.redirect('/login');
    }
}

const renderModals = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        res.render('modals');
    } else {
        res.redirect('/login');
    }
};
const searchConnections = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        const {from, to, date, hour} = req.body;
        const connection = {
            from, to, date, hour
        };
        res.render('trainRoutes', {connection});
    } else {
        return res.redirect('/login');
    }
};

const renderBuyTicket = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        const {from, to, duration, connections, price, wherefrom, whereto} = req.query;

        if (!from || !to || !duration || !price) {
            return res.status(400).send("Missing required query parameters.");
        }

        const ticket = {
            from, to, duration, connections, price, wherefrom, whereto
        }
        res.render('buyTicket', {ticket});
    } else {
        res.redirect('/login');
    }
};

const renderSummary = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;

    if (isLoggedIn) {
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
    } else {
        res.redirect('/login');
    }
};

const renderSeatChoicePanel = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        res.render('seatChoicePanel');
    } else {
        res.redirect('/login');
    }
}

const renderPayForTicket = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;
    if (isLoggedIn) {
        res.render('payForTicket', {user: req.session.user, isLoggedIn, wallet: req.session.user.wallet});
    } else {
        res.redirect('/login');
    }
}

const returnTicket = (req, res) => {
    const isLoggedIn = req.session.user && req.session.user.loggedIn;

    if (!isLoggedIn) {
        return res.redirect('/login');
    }

    const {index} = req.query;

    if (!index) {
        return res.redirect('/userProfile');
    }

    const ticketIndex = parseInt(index);
    const user = req.session.user;

    if (ticketIndex < 0 || ticketIndex >= user.tickets.length) {
        return res.redirect('/userProfile');
    }

    const ticket = user.tickets[ticketIndex];
    user.wallet += ticket.ticketPrice;
    user.tickets.splice(ticketIndex, 1);

    return res.json({
        success: true, message: 'Bilet został zwrócony.'
    });
}


export {
    renderMainPage,
    renderTrainRoutes,
    renderWallet,
    payIntoWallet,
    payOutOfWallet,
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
    renderPayForTicket,
    returnTicket
};