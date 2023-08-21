import React from 'react';
import { BsGithub, BsLinkedin, BsChatRightText } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsChatRightText />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  )
}

export default SocialMedia;