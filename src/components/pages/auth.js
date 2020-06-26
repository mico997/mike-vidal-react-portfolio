import React, { Component} from 'react'
import loginImg from "../../../static/assets/images/auth/login.jpg";

export default class  extends Component {
   constructor(props) {
        super(props)

         this.state = {
              
          }
   }

   render() {
       return (
           <div className="auth-page-wrapper">
               <div 
                    className="left-column" 
                    style={{
                        backgroundImage:`url(${loginImg})`,
                    }}
                    
                />
               <div className="right-column">

               </div>
               <hi>Login Component goes here...</hi>
           </div>
       )
   }
}