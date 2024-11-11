import styles from "./Step.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";

interface StepProps {
    children: ReactNode;
    title: string | ReactNode;
    stepCount: number;
    className?: string;
}

export const Step = ({ children, title, stepCount, className }: StepProps) => {
    return (
        <div className={clsx(styles.borderWrapper, className)}>
            <div className={styles.getAffiliateLink}>
                <div className={styles.header}>
                    <div className={styles.stepCountBorderWrapper}>
                        <p className={styles.stepCount}>{stepCount}</p>
                    </div>
                    <p className={styles.title}>{title}</p>
                </div>
                {children}
            </div>
        </div>
    );
};
