import React, {Component} from 'react'
import {reduxForm} from "redux-form";
import axios from 'axios'
import {Field} from 'redux-form'
import ReactMarkdown from 'react-markdown'

const renderInput = ({input, id, label, type, meta: {touched, error}}) => (
    <div className={"form-group"}>
        <label htmlFor={id} className={"col-sm-4 control-label"}>{label}</label>
        <div className={"col-sm-8"}>
            <input id={id} type={type} {...input} required/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderTextarea = ({input, id, meta: {touched, error}}) => (
    <div className={"mx-auto"}>
        <textarea id={id} className={'form-control'} {...input} rows={10}/>
        {touched && error && <span>{error}</span>}
    </div>
);

const BlogForm = reduxForm({form: "blog",})(
    ({handleSubmit, pristine, reset, submitting, handleChange}) => (
        <form className={"form-horizontal"} onSubmit={handleSubmit}>
            <Field name={"title"} label={"Title"} id={"title"} type={"text"} component={renderInput}/>
            <Field name={"content"}
                   id={"content"}
                   component={renderTextarea}
                   onChange={event => handleChange(event.target.value)}/>
            <div>
                <div className={"col-sm-6"}>
                    <button className={"btn btn-primary"} type={"submit"} disabled={submitting}>Send</button>
                </div>
                <div className={"col-sm-6"}>
                    <button className={"btn btn-default"} type={"button"} disabled={pristine || submitting}
                            onClick={reset}>Reset
                    </button>
                </div>
            </div>
        </form>
    )
);

export default class NewBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {content:""};
    }

    handleChange = content =>
        this.setState({content});

    submit = values => {
        const data = {
            ...values,
            digest: values.digest ? values.digest : values.content.slice(0,100),
        };
        axios.post("/blogs", data)
            .then(res => this.props.history.push(`/blogs/${res.data.id}`))
            .catch(err => console.error("post blog:", err));
    };

    render() {

        return (
            <div className={"row"}>
                <div className={"col-xs-6"}>
                    <BlogForm onSubmit={this.submit} handleChange={this.handleChange}/>
                </div>
                <div className={"col-xs-6 text-left"}>
                    <ReactMarkdown source={this.state.content}/>
                </div>
            </div>
        );
    }
};