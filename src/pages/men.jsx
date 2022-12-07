import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from '../components/Loader'

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
      <div>
        { menProducts.map(men => {
            return (
              <div key={men.id} className={styles.product}>
                <img width={280} height={280} src={men.image} />
                <p>{men.title}</p>
                <p>$ {men.price}</p>
              </div>
            )
          })
        }
      </div>
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
