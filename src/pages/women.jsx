
import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import styles from "../styles/Products.module.css"

export default function Women() {

  const [womenProducts, setWomenProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getWomenProducts = async () => {
    const json = await getFake("https://fakestoreapi.com/products/category/women's%20clothing")
    setWomenProducts(json)
    setIsLoading(false)
  }

  useEffect(() => {
    getWomenProducts()
  }, [])

  const renderProducts = () => {
    return (
      <div>
        {womenProducts.map(women => {
            return (
              <div key={women.id} className={styles.product}>
                <img width={280} height={280} src={women.image} />
                <p>{women.title}</p>
                <p>$ {women.price}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  function renderWomenPage() {
    return (
      <section className={styles.container}>
        <div>
          {isLoading ? <Loader /> : renderProducts()}
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderWomenPage()} />
  )
}
