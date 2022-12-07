import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import styles from "../styles/Products.module.css"

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
      <div>
        {
          products.map(product => {
            return (
              <div key={product.id} className={styles.product}>
                <img width={280} height={280} src={product.image} />
                <p>{product.title}</p>
                <p>$ {product.price}</p>
              </div>
            )
          })
        }
      </div>
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
