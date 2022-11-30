import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { getFake } from "../function/getFake"

import styles from "../styles/components/Products.module.css"

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

  function renderJewerly() {
    return (
      <section className={styles.container}>
        <div>
          {
            isLoading ? <div className={styles.loader}></div> : (
              <div>
                {
                  jewerly.map(j => {
                    return (
                      <div key={j.id} className={styles.product}>
                        <img width={280} height={280} src={j.image} />
                        <p>{j.title}</p>
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
    <Layout page={renderJewerly()} />
  )
}
