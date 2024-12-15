const renderMainPage = (req, res) => {
    res.render('main');
};

const renderTrainRoutes = (req, res) => {
    res.render('trainRoutes');
}


export { renderMainPage, renderTrainRoutes };