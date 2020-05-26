import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  }, [])

  return (
    <>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddTechModal />
        <AddLogModal />
        <EditLogModal />
        <TechListModal />
        <Logs />
      </div>
    </>
  )
}

export default App
