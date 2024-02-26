import Tabs from "../Tabs/Tabs";
import styles from "./Discover.module.css";

const Discover = () => {
  return (
    <section id="discover" className={styles.container}>
        <h1 className={styles.title}>Discover</h1>
            <Tabs/>
    </section>
  )
}

export default Discover