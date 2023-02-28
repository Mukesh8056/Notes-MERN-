
const database = require('../../database/database');


const user =(user)=>{
    this.full_name = full_name,
    this.email_address =email_address,
    this.city=city,
    this.country=country

}

user.getListname = (result)=>{

    database.query('SELECT * from user' ,(err,res)=>{

        if(err){
        console.log('error occured')
        result(null,err)
    }else{

        console.log('added successfully')
        result(null,res)
    }
    })
}
module.exports = user;