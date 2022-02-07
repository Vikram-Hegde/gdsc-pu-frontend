import React from "react";
import style from "./style.module.css";
import Link from "next/link";
const Button = ({
  text,
  variant,
  type = "button",
  onclick,
  disabled = false,
  href,
}) => {
  if (type === 'link') {
    return (
      <Link href={href} passHref >
        <a className={[
          style.btn,
          disabled == "true"
            ? style.btnSecondary
            : variant == "primary"
              ? style.btnPrimary
              : style.btnSecondary,
        ].join(" ")}
          target="_blank"
          rel="noopener noreferrer"
        >{text}</a>
      </Link>
    );
  }
  return (
    <button
      className={[
        style.btn,
        disabled == "true"
          ? style.btnSecondary
          : variant == "primary"
            ? style.btnPrimary
            : style.btnSecondary,
      ].join(" ")}
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
