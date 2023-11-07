import { Router } from "express";
import { sample_users } from "../date";
import jwt  from "jsonwebtoken";
import { User, UserModel } from "../models/user.model";
import asynceHandler from "express-async-handler";
import { HTTP_BAD_REQUEST } from "../constants/nttp_status";
import bcrypt from 'bcryptjs';

const router = Router();

router.get("/seed", asynceHandler (
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if(usersCount> 0){
            res.send('Done');
            return;
        }
       await UserModel.create(sample_users);
       res.send("Seed doneee!");
    }
));


router.post("/login", asynceHandler(
    async (req, res) => {
    
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
    
        if(user &&(await bcrypt.compare(password, user.password))){
            res.send(generateTokenResponse(user))
        }else{
            res.status(HTTP_BAD_REQUEST).send('Username or password is not correct');
        }
    }
));

router.post("/register", asynceHandler(
    async (req, res) => {
    
        const {name, email, password, address} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(HTTP_BAD_REQUEST)
            .send('User already exist, please login!');
            return;
        };

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser:User= {
            id: '',
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address,
            isAdmin: false
        }

        const dbUser = await UserModel.create(newUser);

        res.send(generateTokenResponse(dbUser));
    }
));



const generateTokenResponse = (user:any) =>{
 const token = jwt.sign({
    id: user.id, email: user.email, isAdmin: user.isAdmin
 }, "Token", {
    expiresIn:"30d"
 });
 return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token
  };
}

export default router;