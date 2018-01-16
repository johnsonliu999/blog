import React, { Component }from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem, Jumbotron} from 'react-bootstrap'
import {fetchBlogs} from "../actions";
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

class BlogList extends Component {

    componentDidMount() {
        this.props.fetchBlogs();
    }

    render() {
        console.log(this.props.blogs);

        if (!this.props.blogs) return (<div>Loading...</div>);

        return (
            <ListGroup>
                {this.props.blogs.map(blog => (
                    <ListGroupItem key={blog.title}>
                        <Jumbotron>
                            <h1>{blog.title}</h1>
                            <ReactMarkdown source={blog.digest}/>
                            <span>Created @ {blog.created}</span>
                            <Link to={`/blogs/${blog._id}`} className={"btn btn-primary"}>
                                Read more
                            </Link>
                            {/*<button className={"btn btn-primary"}>Read more</button>*/}
                        </Jumbotron>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

const mapStateToProps = ({blogs}) => ({blogs});

export default connect(mapStateToProps, {fetchBlogs})(BlogList);