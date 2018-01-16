import React, {Component} from "react"
import axios from 'axios'
import ReactMarkdown from 'react-markdown'


/**
 * BlogList is a component that has its own state of post,
 * it will make xhr when mounted
 *
 * The reason why I don't think it as a container is
 * that is we don't need to keep the state in the global
 * store and communicate with redux
 */
export default class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {blog: null};
    }

    componentDidMount() {
        console.log("Mount Blog component");
        const id = this.props.match.params.id;
        axios.get(`/blogs/${id}`).then(({data}) => {
            console.log(data);
            this.setState({blog:data[0]})})
            .catch(err => console.log(err));

    }

    render() {
        const {blog} = this.state;

        return blog ?
            (
                <article>
                    <header>
                        <h1>{blog.title}</h1>
                        <time>{blog.created}</time>
                    </header>
                    <main className={"text-left"}>
                        <ReactMarkdown source={blog.content}/>
                    </main>
                    <footer>
                        <span>last updated @ {blog.last_updated}</span>
                    </footer>
                </article>
            ) : (<div>Loading...</div>);
    }
};

