import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from '../components/Loader'
import Product from "../components/Product"

import styles from "../styles/Products.module.css"

export default function Men() {

  const [menProducts, setMenProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMenProducts = async () => {
    const json = await getFake("https://fakestoreapi.com/products/category/men's%20clothing")
    setMenProducts(json)
    setIsLoading(false)
  }

  useEffect(() => {
    getMenProducts()
  }, [])

  function renderProducts() {
    return (
      <ul>
        {menProducts.map(men => <Product key={men.id} className={styles.product} src={men.image} title={men.title} price={men.price} />)}
      </ul>
    )
  }

  function renderMenPageContent() {
    return (
      <section className={styles.container}>
        <div>
          {isLoading ? <Loader /> : renderProducts()}
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderMenPageContent()} />
  )
}
