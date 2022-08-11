exports.pageNotFound = (req,res,next) => {
    res.status(404).render('404', {
        pageTitle: '404',
        error: `Sorry, can't seem to find that page!`,
        path: ''
    })
}