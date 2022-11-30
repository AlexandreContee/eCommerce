import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { getFake } from "../function/getFake"

import styles from "../styles/components/Products.module.css"

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

  function renderMenProducts() {
    return (
      <section className={styles.container}>
        <div>
          {
            isLoading ? <div className={styles.loader}></div> : (
              <div>
                {
                  menProducts.map(men => {
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
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderMenProducts()} />
  )
}