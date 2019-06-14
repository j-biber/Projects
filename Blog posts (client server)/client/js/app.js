import { fetchData } from './data.js'
import {displayPosts} from './ui.js'

const init = () => { 
    fetchData(onSuccess) 
}

const onSuccess = (posts) => {
    displayPosts(posts);
}

export { init }