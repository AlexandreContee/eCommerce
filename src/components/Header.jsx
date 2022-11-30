import styles from "../styles/components/Header.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/products">
                Products
              </a>
            </li>
            <li>
              <a href="/electronics">
                Electronics
              </a>
            </li>
            <li>
              <a href="/jewerly">
                Jewerly
              </a>
            </li>
            <li>
              <a href="/men">
                Men
              </a>
            </li>
            <li>
              <a href="/women">
                Women
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
