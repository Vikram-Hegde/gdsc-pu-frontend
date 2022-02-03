import React, { useState } from "react";
import Link from "next/link";
import style from "./style.module.css";
import Button from "../../globals/Button";
import Image from "next/image";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuClick = (e) => {
    e.preventDefault();
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const linkCloseMenu = (e) => {
    e.preventDefault();
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <Link href="/" passHref>
          <div className={style.logoWrapper}>
            <div className={style.logoLeft}>
              <Image
                src="/assets/icons/gdsc_logo.png"
                layout="intrinsic"
                objectFit="contain"
                alt="GDSC Logo"
                width="350px"
                height="250px"
              />
            </div>
            <div className={style.logoLeftMobile}>
              <Image
                src="/assets/icons/gdsc_logo_single.png"
                layout="intrinsic"
                objectFit="contain"
                alt="GDSC Logo"
                width="50px"
                height="20px"
              />
            </div>
            {/* <div className={style.logoRight}>
              <a className={style.navLink}>
                Google Developer Student Clubs
                <p>Presidency University Bengaluru</p>
              </a>
            </div> */}
          </div>
        </Link>
        <ul
          className={`${style.navMenu + " "} ${
            open ? style.navMenuActive : ""
          }`}
        >
          <div className={style.mobileNavMenuWrapper}>
            {/* <div className={style.mobileNavbarWrapper}>
              <Link href="/" passHref>
                <div className={style.mobileLogoWrapper}>
                  <div className={style.logoLeft}>
                    <Image
                      src="/assets/icons/gdsc_logo.png"
                      layout="intrinsic"
                      objectFit="contain"
                      alt="GDSC Logo"
                      width="50px"
                      height="20px"
                    />
                  </div>
                  <div className={style.logoRight}>
                    <a className={style.navLink}>
                      Google Developer Student Clubs
                      <p>Presidency University Bengaluru</p>
                    </a>
                  </div>
                </div>
              </Link>

              <div className={style.hamburger} onClick={menuClick}>
                <span
                  className={`${style.bar + " "}${open ? style.barActive : ""}`}
                ></span>
                <span
                  className={`${style.bar + " "}${open ? style.barActive : ""}`}
                ></span>
                <span
                  className={`${style.bar + " "}${open ? style.barActive : ""}`}
                ></span>
              </div>
            </div> */}

            <div className={style.navItemWrapper}>
              <li className={style.navItem}>
                <Link href="/" onClick={linkCloseMenu}>
                  <a className={style.navLink}>Home</a>
                </Link>
              </li>
              <li className={style.navItem}>
                <Link href="/team" onClick={linkCloseMenu}>
                  <a className={style.navLink}>Our Team</a>
                </Link>
              </li>
              <li className={style.navItem} onClick={linkCloseMenu}>
                <Link href="/" passHref>
                  <Button text="Join Us" variant="primary" />
                </Link>
              </li>
            </div>
          </div>
        </ul>

        <div className={style.hamburger} onClick={menuClick}>
          <span
            className={`${style.bar + " "}${open ? style.barActive : ""}`}
          ></span>
          <span
            className={`${style.bar + " "}${open ? style.barActive : ""}`}
          ></span>
          <span
            className={`${style.bar + " "}${open ? style.barActive : ""}`}
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
