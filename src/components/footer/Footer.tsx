import { SiFacebook } from "react-icons/si";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div className="flex_column">
          <ul className="list">
            <li>Terms of Use</li>
            <li>Privacy-Policy</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Watch List</li>
          </ul>
          <p>
            © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </p>
        </div>
        <div className="flex_column">
          <a>Follow Us</a>
          <div className="list">
            <i>
              <SiFacebook />
            </i>
            <i>
              <AiFillTwitterCircle />
            </i>
            <i>
              <AiFillGithub />
            </i>
            <i>
              <AiFillInstagram />
            </i>
          </div>
        </div>
        <div className="flex_column">
          <a>Streamit App</a>
          <div className="flex">
            <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
            <span>App Store</span>
          </div>
          <div className="flex">
            <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
            <span>Google Play Store</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
