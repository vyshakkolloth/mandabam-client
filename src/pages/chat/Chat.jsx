import React, { useEffect, useState } from 'react'
// import io from "socket.io-client"
import InpuChat from '../../components/chat/InpuChat'
// const socket =io.connect("http://localhost:4000/")
// import propTypes from "prop-types";
import UserList from "../../components/chat/UserList"
// import ChatHome from '../../components/chat/ChatHome';
import Message from '../../components/chat/Message';

const Chat = ({user}) => {
    
    // const handle=()=>{
    //     if(user!==""&&room!==""){
    //         socket.emit("join_room",room)
    //         console.log("user",socket.id,"room:",room)
    //     }else{
    //          alert()
    //     }
    // }
    // useEffect(() => {
      
    // socket.on("recieve",(data)=>{
    //     console.log(data);
    //     setmsgRec(data)
    // })
     
    // }, [socket])
    
  return (

    // <div className='container bg-rose-950 
    //  mx-auto flex '>
      <div className='flex container  mx-auto '> 
      {user}
      <UserList user={user}/>
        <Message/>
        {/* </div> */}
      
      
  
    </div>
  )
}

export default Chat