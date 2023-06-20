import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'

const headersocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/kartik-tanwar-7bb727194" target='_blank'><AiOutlineLinkedin/></a>
        <a href="https://github.com/kartik482" target='_blank'><FiGithub/></a>
        <a href="https://leetcode.com/problemset/all/" target='_blank'><SiLeetcode/></a>

    </div>
  )
}

export default headersocial