import React from 'react'
import styles from '../styles/About.module.css'

 const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>ABOUT ME</h1>
      <h3>Introduction</h3>
      <p>I am a Mern stack developer with specialization in javascript programming language.
      I have done my bachelor of engineering in information technology from sagar 
      institute of reasearch and technology,bhopal
      </p>
      <h4>Services offered</h4>
      <ul>
      <li>FrontEnd Development with react</li>
      <li>BackEnd Development with Node</li>
      <li>React Native for Android/Iphone</li>
      </ul>
      <h4>Contact us</h4>
      <p>office address: 12\1,indore.
        phone:45778,
        email:jfhj@gmail.com
      </p>
    </div>
  )
};
export default About;