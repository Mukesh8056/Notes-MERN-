
const module1 =require('../module/module')

exports.getList =(req,res)=>{
    // console.log('HERE ALL THE USER');

    module1.getListname =(err,user)=>{

        console.log('we are here');
        if(err)
        res.sent(err)
        console.log('user',user);
        res.sent(user)
    }
}