import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {

  return (
    <div>
      <Header />
      <main>
        {props.page}
      </main>
      <Footer />
    </div>
  )
}
