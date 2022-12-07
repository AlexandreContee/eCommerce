import { useEffect, useState } from "react"
import { getFake } from "../function/getFake"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import styles from "../styles/Products.module.css"

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

  function renderJewerlyPageContent() {
    return (
      <section className={styles.container}>
        <div>
          {
            isLoading ? <Loader /> : renderProducts()
          }
        </div>
      </section>
    )
  }

  return (
    <Layout page={renderJewerlyPageContent()} />
  )
}
