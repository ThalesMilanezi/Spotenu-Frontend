import { useState } from 'react'

const useList = (initialValues) => {
  const [list, setList] = useState([initialValues])

  const onChange = (name, value) => {
    const newList = { ...list, [name]: value }
    setList(newList)
  }

  return { list, onChange }
}

export default useList