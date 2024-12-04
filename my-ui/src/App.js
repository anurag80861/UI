import React from 'react'
import Explorin from './components/Explorin'
function App() {
  //yha sai objects Banaya hai
  const sampleSpace = {
    name: "Explorin Acdemy",
    count: 4,
    images: [
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/022/347/016/small/aerial-view-beautiful-morning-view-from-indonesia-about-mountain-and-forest-photo.jpg",
        ready: true,
        error: false
      },

      {
        url: "https://images.unsplash.com/photo-1524650888210-7eadb17a0f9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZyUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
        ready: true,
        error: false,
      },
      {
        url: "https://images.unsplash.com/photo-1524650888210-7eadb17a0f9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZyUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
        ready: true,
        error: true,
      },
      {
        url: "",
        ready: true,
        error: false,
      }
    ]
  }
  return (
    <>
      <Explorin {...sampleSpace} />
    </>
  )
}

export default App;