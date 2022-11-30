import Image from "next/image"
import styles from "../styles/components/Main.module.css"

import image from "../../public/images/image1.jpg"

export default function Main() {
  return (
    <div className={styles.main}>
      <h1>Buy safely with our fake store API</h1>
      <Image src={image} />
    </div>
  )
}
