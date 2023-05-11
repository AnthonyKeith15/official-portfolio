import './Icons.css'
import { ReactComponent as GithubIcon } from './icons/github.svg'
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg'
import { ReactComponent as ResumeIcon } from './icons/resume.svg'

function Icons() {

  return (
    <div className="icons" >
      <a href="https://github.com/AnthonyKeith15" target='_blank' title='GitHub' rel="noreferrer">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/anthony-keith/" target='_blank' title='LinkedIn' rel="noreferrer">
        <LinkedinIcon />
      </a>
      <a href="https://docs.google.com/document/d/1b4yVqxPpv93BkQFg97vs__qALNOrvfQtKAPoP0tdKjE/edit?usp=sharing" target='_blank' title='Resume' rel="noreferrer">
        <ResumeIcon />
      </a>
    </div>
  );
}


export default Icons;