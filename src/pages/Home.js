import './Home.css'
import { Icon } from '@iconify/react';
export function Home() {
  return(
    <>
    <div className='hero'>

    <h1>Hello There!</h1>

    <p>
    My name is Anthony Keith! As a React deveolper, I strive to create interactive and responsive user interfaces that enhance the browsing experience. Thank you for taking the time to explore my work and I look forward to collaborating with you in the future!
    </p>
    </div>
    <div className='stats'>
      <div className='filler'>
    <h2>Tools and Tech:</h2>
    <ul className='tech-list'>
      <li><Icon  icon="mdi:react"  className='tech-icon'/></li>
      <li><Icon  icon="icomoon-free:html-five" className='tech-icon'/></li>
      <li><Icon  icon="uiw:css3" className='tech-icon'/></li>
      <li><Icon  icon="simple-icons:javascript" className='tech-icon'/></li>
      <li><Icon  icon="vscode-icons:file-type-node" className='tech-icon'/></li>
      <li><Icon  icon="logos:aws" className='tech-icon'/></li>
      <li><Icon icon="arcticons:miro" className='tech-icon'/></li>
      <li><Icon icon="logos:mongodb" className='tech-icon'/></li>
    </ul>
    </div>
    </div>


    </>
  )
}

