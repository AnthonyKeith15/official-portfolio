import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import './PageSelector.css';

export function PageSelector(to) {
  return (
    <>
      <ul className='page-selector'>

        <NavLink to="/" className='button'>
          Home
        </NavLink>
        <NavLink to="/projects" className='button'>
          Projects
        </NavLink>
      </ul >
    </>
  )
}