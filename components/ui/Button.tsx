"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof (props as LinkProps).href === "string";
}

export function Button(props: ButtonProps | LinkProps) {
  if (isLinkProps(props)) {
    const { children, variant = "primary", className, href, ...rest } = props;
    const classes = cn(styles.button, styles[variant], className);
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant = "primary", className, type = "button", ...rest } = props;
  const classes = cn(styles.button, styles[variant], className);

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
}
