
import mongoose from 'mongoose';


const useSchema = mongoose.Schema({
    username:{
                type:String,
                required :true,
                unique : true,
            },
    email:{
                type:String,
                required:true,
                unique :true,
          },
    password:{
                type:String,
                required:true,
             } ,
    avatar :{
        type:String,
        default:"https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
    } ,             
});


const User = mongoose.model("User",useSchema);

export default User;