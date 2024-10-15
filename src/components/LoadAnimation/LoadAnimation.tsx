import ExportedImage from "next/image"
import LoginForm from "../LoginForm/LoginForm"
import styles from './LoadAnimation.module.css'
import Logo from "@/icons/Logo"

const LoadAnimation = () => {
  return (
    <div className={styles.container}>
    <div className={styles.logoTitle}>
      <div className={styles.miniImage}>
        <Logo />
      </div>
      <h1 className={`${styles.heading} notranslate`}>BAIM</h1>
    </div>
  </div>
  ) 
}
 
export default LoadAnimation