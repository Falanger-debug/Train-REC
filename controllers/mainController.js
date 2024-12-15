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


export { renderMainPage, 
         renderTrainRoutes, 
         renderWallet,
         renderUserProfile};