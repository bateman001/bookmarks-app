import React, { Component } from  'react';
import config from '../config'
import './AddBookmark.css';
import BookmarkForm from './BookmarkForm'


class AddBookmark extends Component {
  // static propTypes = {
  //   history: PropTypes.shape({
  //     push: PropTypes.func,
  //   }).isRequired,
  // };

  // static contextType = BookmarksContext;

  // state = {
  //   error: null,
  // };

  // handleSubmit = e => {
  //   const currentBookmark = this.currentBookmark()
  //   const API_url = currentBookmark ? config.API_ENDPOINT + `/${currentBookmark.id}` : config.API_ENDPOINT
  //   const method = currentBookmark ? 'PATCH' : 'POST'
  //   const afterFetch = currentBookmark ? this.context.updateBookmark : this.context.addBookmark
  //   e.preventDefault()
  //   // get the form fields from the event
  //   const { title, url, description, rating } = e.target
  //   const bookmark = {
  //     title: title.value,
  //     url: url.value,
  //     description: description.value,
  //     rating: rating.value,
  //   }
  //   if(currentBookmark){
  //     bookmark.id = currentBookmark.id
  //   }
  //   this.setState({ error: null })
  //   fetch(API_url, {
  //     method,
  //     body: JSON.stringify(bookmark),
  //     headers: {
  //       'content-type': 'application/json',
  //       'authorization': `bearer ${config.API_KEY}`
  //     }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         return res.json().then(error => Promise.reject(error))
  //       }
  //       return res.json()
  //     })
  //     .then(data => {
  //       title.value = ''
  //       url.value = ''
  //       description.value = ''
  //       rating.value = ''
  //       afterFetch(data)
  //       this.props.history.push('/')
  //     })
  //     .catch(error => {
  //       console.error(error)
  //       this.setState({ error })
  //     })
  // }

  // handleClickCancel = () => {
  //   this.props.history.push('/')
  // };

  // currentBookmark = () =>{
  //   if ('id' in this.props.match.params){
  //     return false
  //   }
  //   return this.context.findByID(this.props.match.params.id)
  // }

   info = {
    url: config.API_ENDPOINT,
    method: 'POST',
    id: null,
    name: 'Create'

   }
  render() {

    // const renderBookmark = this.currentBookmark(); 
    // const valueFor = (field, v ='') => renderBookmark ? renderBookmark[field] : v;

    return (
      <BookmarkForm 
       info={this.info}
      />
    )
  }
}

export default AddBookmark;
