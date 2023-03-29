import { useEffect } from 'react';
import './Footer.css';

export function Footer() {

  useEffect(() => {
    // Get the value of each CSS variable
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    const fillColor = getComputedStyle(document.documentElement).getPropertyValue('--fill-color');
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');

    // Set the value of each color picker to the corresponding variable value
    document.getElementById('primary-color').value = primaryColor;
    document.getElementById('secondary-color').value = secondaryColor;
    document.getElementById('text-color').value = textColor;
    document.getElementById('fill-color').value = fillColor;
    document.getElementById('background-color').value = backgroundColor;
  }, []);

  return (
    <>
      <footer>
        <p>Choose your color scheme!</p>
        <div className="color-picker">
          <label htmlFor="primary-color">Primary Color:</label>
          <input type="color" id="primary-color" name="primary-color" defaultValue="#36bdae" onChange={(e) => {document.documentElement.style.setProperty('--primary-color', e.target.value)}}></input>
        </div>
        <div className="color-picker">
          <label htmlFor="secondary-color">Secondary Color:</label>
          <input type="color" id="secondary-color" name="secondary-color" defaultValue="#c092f3" onChange={(e) => {document.documentElement.style.setProperty('--secondary-color', e.target.value)}}></input>
        </div>
        <div className="color-picker">
          <label htmlFor="text-color">Text Color:</label>
          <input type="color" id="text-color" name="text-color" defaultValue="#ffffff" onChange={(e) => {document.documentElement.style.setProperty('--text-color', e.target.value)}}></input>
        </div>
        <div className="color-picker">
          <label htmlFor="fill-color">Fill Color:</label>
          <input type="color" id="fill-color" name="fill-color" defaultValue="#71a6fd" onChange={(e) => {document.documentElement.style.setProperty('--fill-color', e.target.value)}}></input>
        </div>
        <div className="color-picker">
          <label htmlFor="background-color">Background Color:</label>
          <input type="color" id="background-color" name="background-color" defaultValue="#ab34b2" onChange={(e) => {document.documentElement.style.setProperty('--background-color', e.target.value)}}></input>
        </div>
      </footer>
    </>
  )
}
