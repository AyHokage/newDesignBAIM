import styles from './CardPartner.module.css'
import ExportedImage from "next-image-export-optimizer";


const CardPartner = ({image}: any) => {
  return ( 
    <div className={styles.flip}>
        <div className={styles.front}>
           <ExportedImage loading="eager"  className={styles.img} width={300} height={300} src={image} alt='logo' />
           <h1 className={styles.text}>Company name</h1>
           <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore atque dolore quibusdam iure veniam? Tempora vero quod fuga et, maiores impedit corporis? Mollitia eveniet soluta maxime debitis minima obcaecati...</p>
        </div>
        <div className={styles.back}>
           <ExportedImage loading="eager"  className={styles.imgMini} width={300} height={300} src={image} alt='logo' />
           <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore atque dolore quibusdam iure veniam? Tempora vero quod fuga et, maiores impedit corporis? Mollitia eveniet soluta maxime debitis minima obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore atque dolore quibusdam iure veniam? Tempora vero quod fuga et, maiores impedit corporis? Mollitia eveniet soluta maxime debitis minima obcaecati.</p>
        </div>
    </div> 
  )
}
 
export default CardPartner