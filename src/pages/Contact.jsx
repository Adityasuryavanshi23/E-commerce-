import { useState } from "react";
import { Footer } from "../components/Footer";
import { TopHeader } from "../components/TopHeader";
import { useNavigate } from "react-router-dom";
import call from "../assets/images/icons-call.png";
import mail from "../assets/images/icons-mail.png";

export const Contact = () => {
  const [isclicked, setIsclicked] = useState(true);
  const nav = useNavigate();
  return (
    <>
      <TopHeader />
      <div className="navigate-divs">
        <button
          className={!isclicked ? "active" : ""}
          onClick={() => {
            setIsclicked(false);
            nav("/");
          }}
        >
          home
        </button>
        /
        <button
          className={isclicked ? "active" : ""}
          onClick={() => {
            setIsclicked(true);
          }}
        >
          contact
        </button>
      </div>

      <div className="contact-container">
        <div className="left-contact-sec">
          <div className="left-contact-content">
            <div className="calltous">
              <img src={call} alt="" />
              <h1>call to us</h1>
            </div>
            <div className="calltous-msg">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>

            <div className="divider"></div>

            <div className="writetous calltous">
              <img src={mail} alt="" />
              <h1>write to us</h1>
            </div>
            <div className="writetous-msg calltous-msg">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
        <div className="right-contact-sec">
          <div className="right-content">
            <div className="contact-inputs">
              <input type="text" placeholder="your name" />
              <input type="email" placeholder="your email" />
              <input type="number" placeholder="your phone" />
            </div>
            <div className="textarea">
              <textarea name="message" placeholder="message" id=""></textarea>
            </div>
            <button className="send-btn btn">send message</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
