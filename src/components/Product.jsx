
export default function Product({ className, src, title, price }) {

  return (
    <li className={className}>
      <img src={src} alt="" width={100} height={100} />
      <p>{title}</p>
      <p>$ {price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </li>
  )
}
