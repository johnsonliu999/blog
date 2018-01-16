import React from 'react'
import BlogList from './contents/blog-list'
import About from './contents/about'
import Contact from './contents/contact'
import Blog from './contents/blog'
import {Route, Switch} from 'react-router-dom'
import ErrorMsg from '../containers/ErrorMsg'
import NewBlog from '../components/contents/new-blog'

const Content = () => (
    <div className={"container content"}>
        <ErrorMsg/>
        <div className={"row"}>
            <div className={"mx-auto"}>
                <Switch>
                    <Route path={"/blogs/new"} component={NewBlog} />
                    <Route path={"/blogs/:id"} component={Blog}/>
                    <Route path={"/blogs"} component={BlogList}/>


                    <Route path={"/about"} component={About}/>
                    <Route path={"/contact"} component={Contact}/>
                </Switch>
            </div>
        </div>
    </div>
);

export default Content;