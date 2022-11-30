import styles from "../styles/components/Products.module.css"

import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { getFake } from "../function/getFake"

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
      <section className={styles.container}>
        <div>
          {
            isLoading ? <div className={styles.loader}></div> : (
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
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderProducts()} />
  )
}
