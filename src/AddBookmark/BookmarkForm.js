import React, { Component } from 'react'
import BookmarksContext from '../BookmarksContext'
import PropTypes from 'prop-types'
import config from '../config'

const Required = () => (
    <span className='AddBookmark__required'>*</span>
  )
 
class BookmarkForm extends Component {

    static propTypes = {
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };
    
    state = {
        error: null,
      };
    
    static contextType = BookmarksContext

    handleClickCancel = () => {
        this.props.history.push('/')
      };    
    
    handleSubmit = e => {
        // const currentBookmark = this.currentBookmark()
        // const API_url = currentBookmark ? config.API_ENDPOINT + `/${currentBookmark.id}` : config.API_ENDPOINT
        // const method = currentBookmark ? 'PATCH' : 'POST'
        const afterFetch = this.props.info.id ? this.context.updateBookmark : this.context.addBookmark
        e.preventDefault()
        // get the form fields from the event
        const { title, url, description, rating } = e.target
        const bookmark = {
          title: title.value,
          url: url.value,
          description: description.value,
          rating: rating.value,
        }
        // if(currentBookmark){
        //   bookmark.id = currentBookmark.id
        // }
        this.setState({ error: null })
        fetch(this.props.info.url, {
          method: this.props.info.method,
          body: JSON.stringify(bookmark),
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${config.API_KEY}`
          }
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(error => Promise.reject(error))
            }
            return res.json()
          })
          .then(data => {
            title.value = ''
            url.value = ''
            description.value = ''
            rating.value = ''
            afterFetch(data)
            this.props.history.push('/')
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }

    render(){
        const { error } = this.state
        const currentBookmark = this.context.bookmarks.find(b => b.id === this.props.info.id)
        console.log(this.context.bookmarks)
        return (
            <section className='AddBookmark'>
              <h2>{this.props.info.name} a bookmark</h2>
              <form
                className='AddBookmark__form'
                onSubmit={this.handleSubmit}
              >
                <div className='AddBookmark__error' role='alert'>
                  {error && <p>{error.message}</p>}
                </div>
                <div>
                  <label htmlFor='title'>
                    Title
                    {' '}
                    <Required />
                  </label>
                  <input
                    defaultValue= {this.props.info.name === 'Edit' ? currentBookmark.title : 'Great Website'}
                    type='text'
                    name='title'
                    id='title'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='url'>
                    URL
                    {' '}
                    <Required />
                  </label>
                  <input
                    defaultValue= {this.props.info.name === 'Edit' ? currentBookmark.url : 'https://www.great-website.com/'}
                    type='url'
                    name='url'
                    id='url'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='description'>
                    Description
                  </label>
                  <textarea
                    defaultValue= {this.props.info.name === 'Edit' ? currentBookmark.description : null}
                    name='description'
                    id='description'
                  />
                </div>
                <div>
                  <label htmlFor='rating'>
                    Rating
                    {' '}
                    <Required />
                  </label>
                  <input
                    defaultValue= {this.props.info.name === 'Edit' ? currentBookmark.rating : 1}
                    type='number'
                    name='rating'
                    id='rating'
                    min='1'
                    max='5'
                    required
                  />
                </div>
                <div className='AddBookmark__buttons'>
                  <button type='button' onClick={this.handleClickCancel}>
                    Cancel
                  </button>
                  {' '}
                  <button type='submit'>
                    Save
                  </button>
                </div>
              </form>
            </section>
          );
      
    }
}

export default BookmarkForm