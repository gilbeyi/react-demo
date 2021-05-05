import React from 'react'
import PropTypes from  'prop-types'

type Props = {
  value: string;
  className?: string;
  onChange: (value: string) => void;
}

const AppInput = (props: Props) => {
  const className = props.className ? `${props.className} app-input__text` : 'app-input__text'
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)
  return (
    <input
      type="text"
      value={props.value}
      onChange={onChange}
      className={className}
    />
  )
}

AppInput.propTypes = {
  value: PropTypes.string
}

export default AppInput
