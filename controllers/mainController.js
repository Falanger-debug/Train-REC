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
    res.render('user-profile');
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


export { renderMainPage, 
         renderTrainRoutes, 
         renderWallet,
         renderUserProfile,
         renderLogin,
         renderRegister,
         renderModals};