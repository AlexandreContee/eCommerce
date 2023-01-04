import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import styles from "../styles/Products.module.css"
import Product from "../components/Product"

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
      <ul>
        {electro.map(el => <Product key={el.id} className={styles.product} src={el.image} title={el.title} price={el.price} />)}
      </ul>
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
