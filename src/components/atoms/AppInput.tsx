import React from 'react'
import PropTypes from  'prop-types'

type Props = {
  value: string;
  onChange: (value: string) => void;
}

const AppInput = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)
  return (
    <input
      type="text"
      value={props.value}
      onChange={onChange}
      className="app-input__text"
    />
  )
}

AppInput.propTypes = {
  value: PropTypes.string
}

export default AppInput
