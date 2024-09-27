

import { useState } from 'react'
import './App.css'
import BLogs from './Components/Blogs/BLogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (time, id) => {
    const newReadingTime =readingTime + time;
    setReadingTime(newReadingTime);
    // console.log('marking as read',newReadingTime);
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);

    setBookmarks(remainingBookmarks);
  }

  return (
    <>

      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto gap-5 '>
        <BLogs
          handleBookmarks={handleBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></BLogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </main>

    </>
  )
}

export default App
