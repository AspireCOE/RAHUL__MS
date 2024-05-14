const mongoose=require("mongoose");

main().catch(err=> console.log(err.message));

const User=require("./User");



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");


   // const user = await User.findById('66423407234053bd5007fb3f');
     //  const user=await User.where("name").equals("Rock").where("age").lt(95).limit(2).select("age");  
    // const user=await User.where("name").equals("Rock").where("age").lt(95).limit(1).populate("bestFriend");
    const user=await User.findByName("Rock");
    
    console.log(user);
    
}
