import { CiLocationArrow1 } from "react-icons/ci";
import appstore from "../../assets/images/appstore.png";
import googleplay from "../../assets/images/GooglePlay.png";
import QrCode from "../../assets/images/Qr Code.png";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-first-content">
          <h1>exclusive</h1>
          <p>subscribe</p>
          <h2>get 10% off your first order</h2>
          <div className="footer-input">
            <input type="text" placeholder="enter your email" />
            <CiLocationArrow1 className="email-arrow" />
          </div>
        </div>

        <div className="footer-second-content">
          <h1>support</h1>
          <p>
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+8801-32456-7890</p>
        </div>

        <div className="footer-third-content">
          <ul>
            <li className="firstchild">account</li>
            <li>my account</li>
            <li>login/register</li>
            <li>cart</li>
            <li>wishlist</li>
            <li>shop</li>
          </ul>
        </div>

        <div className="footer-fourth-content">
          <ul>
            <li className="firstchild">quick links</li>
            <li>privacy policy</li>
            <li>terms of use</li>
            <li>faq</li>
            <li>contact</li>
          </ul>
        </div>

        <div className="footer-fifth-content">
          <h1>download app</h1>
          <p>Save $3 with App New User Only</p>
          <div className="footer-qr-sec">
            <div className="left-qr">
              <figure>
                <img src={QrCode} alt="" />
              </figure>
            </div>
            <div className="right-qr">
              <div className="upper-qr">
                <figure>
                  <img src={googleplay} alt="" />
                </figure>
              </div>
              <div className="bottom-qr">
                <figure>
                  <img src={appstore} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="social-handles"></div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy;Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};
