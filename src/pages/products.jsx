import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import styles from "../styles/Products.module.css"
import Product from "../components/Product"

export default function Products() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getFakeProducts = async () => {
    const json = await getFake('https://fakestoreapi.com/products')
    setProducts(json)
    setIsLoading(false)
  }

  useEffect(() => {
    getFakeProducts()
  }, [])

  function renderProducts() {
    return (
      <ul>
        {products.map(product => <Product key={product.id} className={styles.product} src={product.image} title={product.title} price={product.price} /> )}
      </ul>
    )
  }

  function renderProductsPageContent() {
    return (
      <section className={styles.container}>
        <div>
          {isLoading ? <Loader /> : renderProducts()}
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderProductsPageContent()} />
  )
}
