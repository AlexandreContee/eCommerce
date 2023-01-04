import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import styles from "../styles/Products.module.css"
import Product from "../components/Product"

export default function Jewerly() {

  const [jewerly, setJewelry] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getJewelry = async () => {
    const json = await getFake('https://fakestoreapi.com/products/category/jewelery')
    setJewelry(json)
    setIsLoading(false)
  }

  useEffect(() => {
    getJewelry()
  }, [])

  function renderProducts() {
    return (
      <ul>
        {jewerly.map(j => <Product key={j.id} className={styles.product} src={j.image} title={j.title} price={j.price} />)}
      </ul>
    )
  }

  function renderJewerlyPageContent() {
    return (
      <section className={styles.container}>
        <div>
          {isLoading ? <Loader /> : renderProducts()}
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderJewerlyPageContent()} />
  )
}
