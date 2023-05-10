import './Icons.css'
import { ReactComponent as GithubIcon } from './icons/github.svg'
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg'
import { ReactComponent as ResumeIcon } from './icons/resume.svg'

function Icons() {
  return (
    <>
      <a href="https://github.com/your-github-username">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin-username/">
        <LinkedinIcon />
      </a>
      <a href="/path/to/your/resume.pdf">
        <ResumeIcon />
      </a>
    </>
  )
}

export default Icons;