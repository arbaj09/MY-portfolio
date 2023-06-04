import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  // const [records ,setrecords]=useState([])

  const [enterdname, setenteredname] = useState({
    email:"",
    username:"",
    message:"",
    number:''
  });

  // const EnteredNameIsValid = enterdname.trim() !== "";
  const Nameinputhandler = async (event) => {
   const name=event.target.name
   const value=event.target.value
   console.log(name, value)
   setenteredname({...enterdname ,[name]:value})

   
  };

  //conecting with firebase 
  const submitHanler = (event) => {
    event.preventDefault();
    const {email,username,message ,number}=enterdname
    if(email&&username&&message&&number){

     const response=fetch('https://myportfolio-ee173-default-rtdb.firebaseio.com/UserDataRecord.json',{
     method:"POST",
     Headers:{
      'Content-Type':"application/json"
     },
     body:JSON.stringify({
      email,username,message,number
     })
     
    });
    if(response){
      setenteredname({
        email:"",
        username:"",
        message:"",
        number:""

      })
      alert("success")
    }

 
  }
  else{
    alert('Please eneter a valid input')
    
    
  }

    // const newRecord={...enterdname ,id :new Date().getTime().toString()}
    // console.log(newRecord)
    // setrecords([...records ,newRecord])
    // setenteredname({email:"" , username:'', message:''})

  };

  return (
    <>
      <div className="form-container">
        <form className="form-control" method="POST" onSubmit={submitHanler}
        >
          <div className="email-control">
            <label id="email">Email</label>
            <br></br>
            <input
            autoComplete="off"
            aut
              id="email-input"
              name="email"
              type="email"
             
              onChange={Nameinputhandler}
              value={enterdname.email}
            ></input>
          </div>

          <div >
            <label>Name</label>
            <br />
            <input
            autoComplete="off"
              id="Name-input"
              name="username"
              type="text"
           
              onChange={Nameinputhandler}
              value={enterdname.username}
            />
          </div>
          <div className="email-control">
            <label id='number'>number</label>
            <br></br>
            <input
            autoComplete="off"
              id="number"
              name="number"
              type='number'
              onChange={Nameinputhandler}
              placeholder='+91'
              value={enterdname.number}
            >
            </input>
          </div>
          <div className="desc">
            <label>Description</label>
            <br />
            <input
            autoComplete="off"
            
              className="message-input"
              name="message"
              type="massage"
              onChange={Nameinputhandler}
         
              value={enterdname.message}
            />
          </div>
          <div className="btn">
            <button id="send-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
     
    
      </div>

      {/* <div>
        {
          records.map((data)=>{
            return(
              <div className="ShowData"> 
                <p>{data.email}</p>
                <p>{data.username}</p>
                <p>{data.message}</p>
              </div>
            )
          })
        }
      </div> */}
  


    
    </>

  );
};
export default Contact;
