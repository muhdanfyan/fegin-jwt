import React from 'react'

const Register = () => {
    return (
        <div>
            <section className="hero has-background-grey-light is-fullheight is-fullwidth">
              <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box">
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder='Nama Lengkap'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email or Username</label>
                                    <div className="controls">
                                        <input type="email" className="input" placeholder='Username / Email'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder='*******'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder='*******'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </section>
        </div>
    )
}

export default Register
