import { comparePassword, hashPassword } from "../helpers/auth.helper.js";
import userModel from '../models/user.model.js';

import JWT from 'jsonwebtoken';


export const registerController = async (req, res) => {


    try {

        const { name, email, password, phone, address } = req.body;
        //validation
        if (!name || !email || !password || !phone || !address) {
            return res.status(400).send({
                success: false,
                message: 'All fields are mandatory',
            })
        };

        //check if already user exisits
        const exisitingUser = await userModel.findOne({ email });
        //exisiting user
        if (exisitingUser) {
            return res.status(409).send({
                success: true,
                message: 'Already Registered please Login '
            })
        }

        //hash password
        const hashedPassword = await hashPassword(password);
        //save
        const user = new userModel({ name, email, phone, address, password: hashedPassword });
        await user.save();

        

        res.status(201).send({
            success: true,
            message: 'user register successfully',
            user
        })


    } catch (err) {
        console.log(err);
        res.status(500).send(
            {
                success: false,
                message: 'Error in Registration',
                error: err.message
            })
    }
}

export const loginController=async(req,res)=>{
 
 try{

    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).send({
            success: false,
            message: 'All fields are mandatory',
        })
    } 

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(404).send({
            success:false,
            message:'User not registered'
        })
    }

    const checkPassword = await comparePassword(password,user.password);
     
     if(!checkPassword){
        return res.status(200).send({
            success:false,
            message:'Invalid email or password'
        })
     } 
 
     const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET , {
        expiresIn:"7d"
     } ) ;
     res.status(200).send({
        success:true,
        message:'Login Success',
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address
        },
        token
     })

     

 }catch(err){
    console.log(err);
    res.status(500).send({
        success:false,
        message:'Error in login',
        error:err
    })
 }
     


}

export const testController=(req,res)=>{
    res.send('protected route')
}

export default { registerController ,loginController , testController };