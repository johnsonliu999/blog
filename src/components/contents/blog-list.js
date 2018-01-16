import React from 'react'
import Pager from '../../components/Pager'
import BlogList from '../../containers/BlogList'

const Blog = () => {
    return (
        <div>
            <BlogList/>
            <Pager/>
        </div>
    )
};

export default Blog;