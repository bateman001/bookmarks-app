import React, { Component } from "react";
import config from '../config'
import BookmarkForm from './BookmarkForm'

class EditBookmark extends Component {


    info = {
        url: config.API_ENDPOINT + `/${this.props.match.params.id}`,
        method: 'PATCH',
        id: Number(this.props.match.params.id),
        name: 'Edit'
    }

    render(){
        return(
            <div>
                <BookmarkForm 
                    info = {this.info}
                />
            </div>
        )
    }
}

export default EditBookmark