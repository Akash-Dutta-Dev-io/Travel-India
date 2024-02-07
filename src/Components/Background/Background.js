import React from 'react'
import './Background.css'
import video1 from '../../Assets/video1.mp4'
import jaipur from '../../Assets/jaipur.jpg'
import delhi from '../../Assets/delhi.jpg'
import varanasi from '../../Assets/varanasi.jpg'

const Background = ({playStatus,heroCount}) => {
  if (playStatus) {
    return (
      <video className='background' autoPlay loop muted>
          <source src={video1} type='video/mp4'/>
      </video>
    )
  }
  else if(heroCount===0) {
        return <img src={delhi} className='background'/>
  }

  else if(heroCount===1) {
    return <img src={jaipur} className='background'/>
}

else if(heroCount===2) {
  return <img src={varanasi} className='background'/>
}

}

export default Background
