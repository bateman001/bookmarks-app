import React from 'react'

const BookmarksContext = React.createContext({
  bookmarks: [],
  addBookmark: () => {},
  deleteBookmark: () => {},
  findByID: () => {},
  updateBookmark: () => {}
})

export default BookmarksContext
