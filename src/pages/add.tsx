import React, { useState, useEffect } from 'react'

import AppInput from 'components/atoms/AppInput'
import AppButton from 'components/atoms/AppButton'
import { useRender } from 'hooks/render'

const AddPage = () => {
  const [state, dispatch] = useRender()
  const setValue = (s: string) => {
    dispatch({
      type: 'edit',
      payload: s
    })
  }
  const [result, setResult] = useState('')

  useEffect(() => {
    dispatch({ type: 'init' })
  }, [dispatch])

  const onClick = (_e: React.MouseEvent<HTMLElement>) => {
    console.log(state.isEdit)
    setResult(state.value)
  }

  return (
    <div className="add__wrapper">
      Add
      <div>
        <AppInput
          value={state.value}
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
