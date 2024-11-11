import styles from "./page.module.scss";
import {Step} from "@/components/Step/Step";
import {Button} from "@/components/Button/Button";
import {Steps} from "@/components/Steps/Steps";

export default function Home() {
    return (
        <main className={styles.main}>
            <Steps className={styles.steps}/>
            <div className={styles.buttonContainer}>
                <Button className={styles.button}><img src="/shoppingCart.svg" alt=""/> Стать партнером</Button>
            </div>
        </main>
    );
}
