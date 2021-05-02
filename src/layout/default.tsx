import React from 'react'

type Props = {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
 return (
    <div className="layout__wrapper">
      {children}
    </div>
  )
}

export default DefaultLayout
