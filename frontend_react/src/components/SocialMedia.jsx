import React from 'react';
import { BsGithub, BsLinkedin, BsChatRightText } from 'react-icons/bs';

const SocialMedia = () => {
  const handleClick = () => {

  }

  return (
    <div className="app__social">
      <a href="mailto:matthew.o.kwon@gmail.com" target="_blank">
        <div>
          <BsChatRightText />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/matthewkwon/" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/m-kwon" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia;