import axios from 'axios'

export const FETCH_BLOGS = 'fetch_blogs';
export const UPDATE_BLOGS = 'update_blogs';
export const DELETE_BLOGS = 'delete_blogs';

export const fetchBlogs = () => ({
    type: FETCH_BLOGS,
    payload: axios.get('/blogs')
});

export const POST_ERROR = 'post_error';

export const postError = (error) => ({
    type: POST_ERROR,
    error
});
