import Image from "next/image"
import image from "../../public/images/image1.jpg"
import styles from "../styles/Main.module.css"

export default function Main() {
  return (
    <div className={styles.main}>
      <h1>Buy safely with our fake store API</h1>
      <Image src={image} alt="" priority />
    </div>
  )
}
