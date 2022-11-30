import Layout from '../components/Layout'
import Main from '../components/Main'

export default function Home() {

  return (
    <div>
      <Layout page={<Main />} />
    </div>
  )
}
