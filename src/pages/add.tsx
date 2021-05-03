import React, { useState, useEffect } from 'react'

import AppInput from 'components/atoms/AppInput'

const AddPage = () => {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue('初期値')
  }, [])
  return (
    <div>
      Add
      <div>
        <AppInput
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  )
}

export default AddPage
