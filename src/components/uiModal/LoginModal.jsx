
"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const LoginModal = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  

  return (
    <div className="modal signUp-modal two fade" id="logInModal01" tabIndex={-1} aria-labelledby="logInModal01Label" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="login-wrapper">
            <div className="login-img">
              <img src="/assets/img/home1/login-img.png" alt="" />
              <div className="logo">
                <Link legacyBehavior href="/"><a><img src="/assets/img/logo.svg" alt="" /></a></Link>
              </div>
            </div>
            <div className="login-content">
              <div className="login-header">
                <h4 className="modal-title" id="logInModal01Label">Log In</h4>
                <p>Don’t have any account? <button type="button" data-bs-toggle="modal" data-bs-target="#signUpModal01">Sign Up</button></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
              </div>
              <form>
                <div className="row g-4">
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Enter your email address*</label>
                      <input type="email" placeholder="Type email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                  <div className="form-inner"> 
                    <label>Password*</label>
                    <input id="password6" type={passwordVisible ? 'text' : 'password'}value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*** ***" />
                    <i className={`bi bi-${passwordVisible? "eye":"eye-slash"}`} onClick={togglePasswordVisibility} id="togglePassword" />
                  </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                      <div className="form-group">
                        <input type="checkbox" id="html" />
                        <label htmlFor="html">Remember Me</label>
                      </div>
                      <a href="#" className="forgot-pass">Forget Password?</a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <button className="primary-btn2" type="submit">Log In</button>
                    </div>
                  </div>
                </div>
                <div className="terms-conditon">
                  <p>By sign up,you agree to the <a href="#">‘terms &amp; conditons’</a></p>
                </div>
                <ul className="social-icon">
                  <li><a href="#"><img src="/assets/img/home1/icon/google.svg" alt="" /></a></li>
                  <li><a href="#"><img src="/assets/img/home1/icon/facebook.svg" alt="" /></a></li>
                  <li><a href="#"><img src="/assets/img/home1/icon/twiter.svg" alt="" /></a></li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default LoginModal
