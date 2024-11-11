import styles from "./Button.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={clsx(styles.button, className)}>
            {children}
        </button>
    );
};