import React from 'react'
import io from 'socket.io-client'

const ClientPage = () => {
    const socket = io("ws://localhost:3005")

    socket.on("hello", (arg: any) => {
        console.log(arg)
    })

    socket.emit("howdy","stranger")
  return (
    <div>
        Cliente        
    </div>
  )
}

export default ClientPage
