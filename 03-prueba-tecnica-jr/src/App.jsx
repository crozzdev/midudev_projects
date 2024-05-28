import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


const CAT_FACTS_URI = "https://catfact.ninja/fact"
const CAT_RANDOM_URI_PREFIX = "https://cataas.com/"

function App() {

  const [fact, setFact] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  // efecto para cargar el fact
  useEffect(() => {
    fetch(CAT_FACTS_URI)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching the fact')
        return res.json()
      })
      .then(data => {
        const fact = data.fact
        setFact(fact)
      }
      )
      .catch(err => {
        console.log(err)
      })
  }, [])

  // efecto para cargar la imagen
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    const random_img_uri = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

    fetch(random_img_uri)
      .then(res => res.json())
      .then(data => {
        const { _id } = data
        const url = `/cat/${_id}/says/${firstWord}`
        setImgUrl(url)
      })
  }, [fact])



  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={`${CAT_RANDOM_URI_PREFIX}${imgUrl}`} />}
      </section>
    </main>
  )
}

export default App
