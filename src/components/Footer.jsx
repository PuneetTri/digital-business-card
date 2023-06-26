import React from "react";

import Twitter from "../assets/Twitter.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import GitHub from "../assets/GitHub.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/PuneetTwts">
        <button>
          <img src={Twitter} />
        </button>
      </a>

      <a href="https://www.facebook.com/profile.php?id=100005957838514">
        <button>
          <img src={Facebook} />
        </button>
      </a>

      <a href="https://www.instagram.com/wtf.puneet/">
        <button>
          <img src={Instagram} />
        </button>
      </a>

      <a href="https://github.com/PuneetTri">
        <button>
          <img src={GitHub} />
        </button>
      </a>
    </div>
  );
}
