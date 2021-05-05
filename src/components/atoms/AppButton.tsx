import React from 'react'

type Props = {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const AppButton = (props: Props) => {
  const className = props.className ? `${props.className} app-button` : 'app-button'
  const onClick = (e: React.MouseEvent<HTMLElement>) => props.onClick(e)
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {props.children}
    </button>
  )
}

export default AppButton
