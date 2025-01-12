import React from 'react'
import {BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="http://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="http://github.com" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials