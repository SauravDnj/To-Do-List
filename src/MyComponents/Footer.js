//  rafc
import React from 'react'

const Footer = () => {
  let footerstyle = {
    position: "relative",
    margin: "10px 0px -15px",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light' style={footerstyle}>
      <p className="text-center">
        CopyRight &copy; MyTodosList.com | By Saurav Dnj 2022 
      </p>
    </footer>
  )
}

export default Footer
