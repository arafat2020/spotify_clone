import React from 'react'
import LIbreryIndex from '../components/LIbreryIndex'
import Main from '../components/Main'
import SideBar from '../components/SideBar'

function Librery() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full text-red-500 flex h-[100%]">
        <SideBar />
        <Main insert={<LIbreryIndex/>} />
      </div>
    </div>
  )
}

export default Librery