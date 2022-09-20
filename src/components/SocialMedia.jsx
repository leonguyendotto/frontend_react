import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaGithub />
        </div>

    </div>
  )
}

export default SocialMedia