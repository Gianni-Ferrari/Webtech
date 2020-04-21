const router = require('express').Router();

const employee = require('./employeelist.json');


router.get('/', (req, res) =>{
    res.render('home',{
        employeelist: employee
    })
})

//router.get('/todolist', async (req, res)=>{
 //   const todolist = await todoCollection.find({}).toArray();
  //  res.render('todolist',{
 //       todolist
 //   })
//});
     

module.exports = router;