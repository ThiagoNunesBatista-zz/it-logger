import React, { useEffect, useState } from 'react'

import LogItem from './LogItem'
import PreLoader from '../layout/PreLoader'

const Logs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)

  const getLogs = async () => {
    setLoading(true)
    const res = await window.fetch('/logs')
    const data = await res.json()
    setLogs(data)
    setLoading(false)
  }

  useEffect(() => {
    getLogs()
  }, [])

  if (loading) {
    return <PreLoader />
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>

      {!loading && logs.length === 0 ? (<p className='center'>No Logs To Show</p>) : (logs.map(current => <LogItem key={current.id} log={current} />))}
    </ul>
  )
}

export default Logs
