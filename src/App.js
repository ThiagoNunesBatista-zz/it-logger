import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

function App () {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  }, [])

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
