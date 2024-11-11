import styles from "./Steps.module.scss";

import {Step} from "@/components/Step/Step";
import clsx from "clsx";
import Image from "next/image";


interface StepsProps {
    className?: string;
}

export const Steps = ({className}: StepsProps) => {
    return (
        <div className={clsx(styles.steps, className)}>
            <h1 className={styles.title}>Зарабатывайте вместе с нами!</h1>
            <div className={styles.stepsList}>
                <Step className={styles.stepAffiliation} stepCount={1}
                      title={<span>Получите <br/>партнерскую ссылку</span>}>
                    <Image className={styles.stepImage} src="/laptopMan.png" alt="man on laptop"/>
                    <Image className={styles.arrow} src="/arrow.png" alt=""/>
                </Step>
                <Step className={styles.stepAbout} stepCount={2} title={<span>Расскажите <br/>о iiii.COM</span>}>
                    <Image className={styles.stepImage} src="/peopleLookPhones.png" alt="people look at phones"/>
                    <Image className={styles.arrow} src="/arrow.png" alt=""/>
                </Step>
                <Step className={styles.stepPercent} stepCount={3}
                      title={<span>Получайте хороший процент <br/>от покупок по вашей ссылке!</span>}>
                    <Image className={styles.stepImage} src="/manEarning.png" alt="man with money"/>
                </Step>
            </div>
        </div>
    );
};
