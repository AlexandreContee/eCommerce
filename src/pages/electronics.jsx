import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from "..components/Loader"
import styles from "../styles/Products.module.css"

export default function Electronics() {

  const [electro, setElectro] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getElectro = async () => {
    const json = await getFake('https://fakestoreapi.com/products/category/electronics')
    setElectro(json)
    setIsLoading(false)
  }

  useEffect(() => {
    getElectro()
  }, [])

  function renderProducts() {
    return (
      <div>
        {electro.map(el => {
          return (
            <div key={el.id} className={styles.product}>
              <img width={280} height={280} src={el.image} />
              <p>{el.title}</p>
              <p>$ {el.price}</p>
            </div>
          )
        })}
      </div>
    )
  }

  function renderEletronicPageContent() {
    return (
      <section className={styles.container}>
        <div>
          {isLoading ? <Loader /> : renderProducts()}
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderEletronicPageContent()} />
  )
}
