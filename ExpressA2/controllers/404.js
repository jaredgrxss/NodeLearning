exports.Error = (req,res,next)=>{
    context = {
        pageTitle: 'Error',
        path:'None',
    }
    res.status(404).render('404',context);
}