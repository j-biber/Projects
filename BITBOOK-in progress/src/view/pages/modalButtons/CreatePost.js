
import React, { Component } from 'react'
import M from 'materialize-css'
import { ModalPostText } from './ModalPostText'

import * as postService from './../../../services/PostService';

class CreatePost extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            hoverEnabled: false
        });

        const textPost = document.querySelectorAll('.modal');
        M.Modal.init(textPost, null);


    }

    createNewPost = (val, postType) => {
        const data = {
            text: val
        }

        postService.createPost(data)
            .then((response) => {
                console.log("created posts");
                this.props.onPostCreated();
            })

    };

    render() {
        return (
            <div>
                <ModalPostText onCreateButton={this.createNewPost} />
                {/* <ModalPostText />
                <ModalPostText /> */}

                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red"><i className="large material-icons">add_circle</i></a>
                    <ul>
                        <li><a href='#text-post' className="btn-floating green modal-trigger"><i className="material-icons">message</i></a></li>
                        {/* <li><a href='#image-post' className="btn-floating red modal-trigger"><i className="material-icons">camera_alt</i></a></li> */}
                        {/* <li><a href='#video-post' className="btn-floating blue modal-trigger"><i className="material-icons">videocam</i></a></li> */}
                    </ul>
                </div>
            </div>

        )
    }
}




export { CreatePost }