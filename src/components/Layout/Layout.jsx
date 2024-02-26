import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.css"
const Layout = () => {
  return (
    <div className={styles.main}>
      <Outlet/>
    </div>
  )
}

export default Layout