import mongoose from 'mongoose';

export default Connect=async()=>{
    await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).catch(err=>console.error(err))
    console.log("Menyambung ke MongoDB...")
}