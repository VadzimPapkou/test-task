import styles from "./page.module.scss";
import Image from "next/image";
import {Button} from "@/components/Button/Button";
import {Steps} from "@/components/Steps/Steps";

export default function Home() {
    return (
        <main className={styles.main}>
            <Steps className={styles.steps}/>
            <div className={styles.buttonContainer}>
                <Button className={styles.button}><Image src="/shoppingCart.svg" alt=""/> Стать партнером</Button>
            </div>
        </main>
    );
}
