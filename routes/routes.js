const routes = function(app){
    app.route('/contact')
    .get((req,res)=>{
        res.send('GET request done')
    })
    .post((req,res)=>{
        res.send('Post request done status ok')
    });

    app.route('/contact/:contactID')
    .put((req,res)=>{
        res.send(`PUT request done`)
    })
    .delete((req,res)=>{
        res.send('Delete request done status ok')
    });

}
export default routes;
