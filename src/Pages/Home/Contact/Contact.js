import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css"



const Contact = () => {
    const [state, handleSubmit] = useForm("myyogpqd");


    return (
        <div id="contact" className="mt-5">
            <h1>Contact <span className="with">With</span> Me</h1>
            <div className="border-md w-xs-75 w-md-50 rounded mx-auto p-4">

                <form onSubmit={handleSubmit}>
                    <input
                        className="w-50 w-sm-75 rounded"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                    /> <br />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    /> <br />
                    <input
                        className="w-50 w-sm-75 rounded"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <br />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    /> <br />
                    <textarea
                        className="w-50 w-sm-75 rounded"
                        id="message"
                        name="message"
                        placeholder="Your Massage"
                    /> <br />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    /> <br />
                    <button className="mx-auto button-24" role="button" type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Contact;