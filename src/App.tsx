import Card from './components/body/Card'
import Header from './components/header/Header'
import Hello from './components/hello/Hello'
import Nav from './components/nav/Nav'

const App: React.FC = () => {
  return (
    <div>
      {/* <Hello /> */}
      <Header />
      <Nav />
      <Card />
    </div>
  )
}

export default App
