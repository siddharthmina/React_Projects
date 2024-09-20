import React from 'react'
import {Box} from "@chakra-ui/react"
import { MdWindow } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
const Sidenav = () => {
  const navLinks = [{
    icon:MdWindow,
    text:"Dashboard",
    link: "/"
  },
{
  icon:GrTransaction,
  text:"Transaction",
  link: "/" 
}]
  return (
<Stack>
  {navLinks.map((nav)=>{})}
</Stack>

  )
}

export default Sidenav
