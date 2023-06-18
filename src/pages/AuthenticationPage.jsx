import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import { authTitles } from '../data'

const AuthenticationPage = () => {
  let location = useLocation()

  const dynamicTitle = () => {
    return authTitles.map((obj) => {
      if (location.pathname === obj.path) {
        return <span key={obj.title}>{obj.title}</span>
      } else {
        return ''
      }
    })
  }

  return (
    <div className='person'>
      <div className='person__container'>
        <div className='person__header'>
          <span className='person-title'>{dynamicTitle()}</span>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthenticationPage
