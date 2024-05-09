import { useState, useEffect } from 'react'


function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })


  // follow mouse effect
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleaup:
    // cuando el component se desmonta
    // cuando las dependencias cambian
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])


  // change pointer effect

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

  }, [enabled])



  return (
    <main>
      <div style={
        {
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      }>
      </div>
      <button onClick={() => { setEnabled(!enabled) }}>{enabled ? 'Desactivar Seguir Puntero' : 'Activar Seguir Puntero'}</button>
    </main>
  )
}

export default App
