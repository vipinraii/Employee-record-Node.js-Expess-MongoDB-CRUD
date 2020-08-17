const mongoose = require('mongoose');
 
const employeeSchema =new mongoose.Schema({
    fullName:{type:String, required: 'This field is required'},
    email:{type:String},
    phone:{type:Number},
    city:{type:String}
})
employeeSchema.path('email').validate((val)=>{
    emailRegix =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return emailRegix.test(val);

},'Invaid Email');

mongoose.model('Employee' ,employeeSchema);