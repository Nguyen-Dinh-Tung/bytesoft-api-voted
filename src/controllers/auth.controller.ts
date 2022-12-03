import bcrypt  from 'bcrypt';

import Users from "../models/schemas/user.schema";
import Vote from '../models/schemas/voted.schame';
class AuthController  {
  private static encode : number = 10 ;

  static async signUpHandler(data : any){
    let {email , password , name , age , address} = data ;
    try{
      const checkUser = await Users.findOne({
        email
      }) ;
      if(checkUser){
        return {
          status : 400 ,
          message : 'User existing'
        }
      }else{
        if(!email || !password || !age || !name ||!address){
          return {
            status : 400 ,
            message : 'Not valid'
          }
        }else{
          let hashPassword = await bcrypt.hashSync(password,10);
          data.password = hashPassword ;
          const newUser = await Users.create(data)
          if(newUser){
            return{
              status :200 ,
              message :"Create new user success" ,
              newUser : newUser
            }
          }else{
            return{
              status : 500 ,
              message : "Please notify the developer"
            }
          }
        }
      }
    }catch(e){
      if(e){
        throw new Error(e.message)
      }
      
    }

  }
  static async signIpHandler(data : any){
    try{  
      let {email , password} = data ;
      if(!email || ! password){
        return {
          status : 400 ,
          message : 'Email or password not valid'
        }
      }
      const checkUser = await Users.findOne({
        email
      })
      if(!checkUser){
        return{
          status : 400 ,
          message : "User not existing"
        }
      }else{
        let compPassword = await bcrypt.compare(password,checkUser.password) ;
        if(compPassword){
          return {
            status: 200 ,
            location : '/home',
            message : 'Sign in success'
          }
        }else{
          return{
            status : 400 ,
            message : "Sign in fail please check your email or password"
          }
        }
      }
    }catch(e){
      if(e){
        throw new Error(e.message)
      }
      
    }
  }
  static async voteHandler (data : any){
    try{
      const {email , beVoted ,type} = data ;
      const checkVoted = await Vote.findOne({email});
      if(checkVoted){
        return{
          status : 400 ,
          message : "User voted",
        }
      }else{
        if(!beVoted || !type){
          return {
            status : 400 ,
            message : "Please check infomation vote"
          }
        }else{
          const newVote = await Vote.create(data)
          if(newVote){
            return{
              status: 200 ,
              message : "Create new vote success"
            }
          }else{
            return{
              status : 500 ,
              message : "Please notify the developer"
            }
          }
        }
      }
    }catch(e){
      if(e){
        throw new Error(e.message)
      }
      
    }
  }
  static async getVoteListHandler(data : any){
    try{
      const {email , password} = data ;
      const checkUser = await Users.findOne({email}) ;
      if(!checkUser){
        return{
          status : 400 ,
          message : "Please sign in" 
        }
      }else{
        let compPassword = await bcrypt.compare(password,checkUser.password) ;
        if(compPassword){
          const listVote = await Vote.find() ;
          if(listVote){
            return {
              status : 200 ,
              location : "/votes" ,
              data : listVote
            }
          }else{
            return{
              status : 500 ,
              message : "Please notify the developer"
            }
          }
        }else{
          return{
            status : 400 ,
            message : "Please check your password"
          }
        }
      }
    }catch(e){
      if(e){
        throw new Error(e.message)
      }
      
    }
  }

}

export default AuthController ;