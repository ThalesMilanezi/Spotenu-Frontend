import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (token === null) {
      history.push('/login')
    }
  }, [history])
  return (
    <div>
      Só pode ser acessada por usuario logados.
    </div>
  )

}

export default ProtectedPage