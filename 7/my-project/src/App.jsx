
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blog from './components/Blog/Blog'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks]=useState({});
  
  const handleAddToBookmark = blog=>{
    console.log('bookmark adding soon')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
        <Blog></Blog>
      </div>
    </>
  )
}

export default App
