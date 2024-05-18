import Counter from "./components/counter"
import Footer from "./components/footer"
import Header from "./components/header"

function App() {

  return (
    <div className="page">
      <div className="w-full mx-auto max-w-7xl px-6 mt-8 lg:px-8">

        <Header />

        <Counter />

        <Footer />
      </div>
    </div>
  )
}

export default App
