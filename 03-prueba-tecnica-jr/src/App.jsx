import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {

  const { fact, refreshRandomFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} />}
      </section>
    </main>
  )
}

export default App
