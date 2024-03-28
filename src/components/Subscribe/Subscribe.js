import React from 'react'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Subscribe = (props) => {
    return (

        <section className="wpo-subscribe-section section-padding">
            <div className="container">
                <div className="wpo-subscribe-wrap">
                    <div className="subscribe-text">
                        <h3>Never miss any Update!</h3>
                        <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                    </div>
                    <div className="subscribe-form">
                        <form onSubmit={SubmitHandler}>
                            <div className="input-field">
                                <input type="email" placeholder="Enter your email" required />
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;