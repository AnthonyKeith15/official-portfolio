import { Icon } from '@iconify/react';
import './Socials.css';

export function Socials() {
  return (
    <>
      <nav>
        <ul className='social-media'>
          <li className='social-media-item'>
            <a href="https://github.com/AnthonyKeith15" target="_blank" rel="noreferrer"><Icon icon="jam:github" /></a>
          </li>
          <li className='social-media-item'>
            <a href="https://www.linkedin.com/in/anthony-keith/" target="_blank" rel="noreferrer"><Icon href="https://www.linkedin.com/in/anthony-keith/" target="_blank" rel="noreferrer" icon="mdi:linkedin" /></a>
          </li>
          <li className='social-media-item'>
            <a href="https://docs.google.com/document/d/1b4yVqxPpv93BkQFg97vs__qALNOrvfQtKAPoP0tdKjE/edit?usp=sharing" target="_blank" rel="noreferrer"><Icon icon="mdi:paper-text" />
            </a>
          </li>
        </ul >
      </nav>
    </>
  )
}