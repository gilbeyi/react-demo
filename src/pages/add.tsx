import React, { useState, useEffect } from 'react'

import AppInput from 'components/atoms/AppInput'
import AppButton from 'components/atoms/AppButton'

const AddPage = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  useEffect(() => {
    setValue('初期値')
  }, [])
  const onClick = (_e: React.MouseEvent<HTMLElement>) => {
    setResult(value)
  }
  return (
    <div className="add__wrapper">
      Add
      <div>
        <AppInput
          value={value}
          className="add__input"
          onChange={setValue}
        />
      </div>
      <div>
        <AppButton
          className="add__button"
          onClick={onClick}
        >
          確定ボタン
        </AppButton>
      </div>
      <div>
        {result}
      </div>
    </div>
  )
}

export default AddPage
