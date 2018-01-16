import React from 'react'
import {reduxForm, Field} from 'redux-form'


const renderInput = ({input, id, label, type, meta: {touched, error}}) => (
    <div className={"form-group"}>
        <label htmlFor={id} className={"col-sm-4 control-label"}>{label}</label>
        <div className={"col-sm-8"}>
            <input id={id} type={type} {...input} required/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderTextarea = ({input, label, id, meta: {touched, error}}) => (
    <div className={"form-group"}>
        <label className={"col-sm-4 control-label"} htmlFor={id}>{label}</label>
        <div className={"col-sm-8"}>
            <textarea id={id} className={'form-control'} {...input} rows={3}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const ContactForm = reduxForm({form: "contact",})(
    ({handleSubmit, pristine, reset, submitting}) => (
        <form className={"form-horizontal contact-form"} onSubmit={handleSubmit}>
            <Field name={"name"} label={"Name"} id={"name"} type={"text"} component={renderInput}/>
            <Field name={"email"} label={"Email"} id={"email"} type={"email"} component={renderInput}/>
            <Field name={"msg"} label={"Message"} id={"msg"} component={renderTextarea}/>
            <div>
                <div className={"col-xs-6"}>
                    <button className={"btn btn-primary"} type={"submit"} disabled={submitting}>Send</button>
                </div>
                <div className={"col-xs-6"}>
                    <button className={"btn btn-default"} type={"button"} disabled={pristine || submitting}
                            onClick={reset}>Reset
                    </button>
                </div>
            </div>
        </form>
    )
);

const Contact = () => {
    return (
        <div>
            <p>
                Fill out the form below to send me a message and I will get back to you
                as soon as possible!
            </p>
            <ContactForm/>
        </div>
    );
};

export default Contact;


