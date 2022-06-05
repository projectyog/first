import React,{useState} from 'react';
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [desc,setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,phone, email, desc)
  const data = {phone, name, email, desc}
    fetch('http://localhost:3000/api/postcontact',{
      method:'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data =>{
      alert("Thans for contacting us")
      setPhone('')
      setName('')
      setEmail('')
      setDesc('')
    })
    .catch((error)=>{
      console.log('Error:',error)
    });

  }
  const handleChange = (e)=>{
    if(e.target.name == 'phone'){
      setPhone(e.target.value)
    } else if (e.target.name == 'email'){
      setEmail(e.target.value)
    } else if (e.target.name == 'desc'){
      setDesc(e.target.value)
    } else if (e.target.name == 'name'){
      setName(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit = {handleSubmit}>
      <div className = {styles.mb3}>
      <label htmlFor='name' className={styles.formlabel}>Name: </label>
      <input type="text" value = {name} placeholder = "enter your name here" onChange={handleChange}
      className={styles.formcontrol} id="name" name = "name" aria-describedby="emailHelp"/>
      </div>
      <div className = {styles.mb3}>
      <label htmlFor='email' className={styles.formlabel}> Email:</label>
      <input type="text" value = {email} onChange={handleChange}
      className={styles.formcontrol} id="email" name = "email"  placeholder = "enter your name here" aria-describedby="emailHelp"/>
      <div id="emailHelp" className={styles.formtext}> we'll never share your email with anyone!</div>
      </div>
      <div className = {styles.mb3}>
      <label htmlFor='phone' className={styles.formlabel}>Phone no.:</label>
      <input type="text" value = {phone} onChange={handleChange}
      className={styles.formcontrol} id="phone" name = "phone" placeholder = "enter your name here" aria-describedby="emailHelp"/>
      </div>
      <div className = {styles.mb3}>
      <label htmlFor='desc' className={styles.formlabel}>Enter your concern :</label>
      <textarea value = {desc} onChange={handleChange}
      className={styles.formcontrol} id="desc" name = "desc" placeholder='elaborate your concern here'/>
      </div>
      <button type="submit" className={styles.btnprimary}>Submit</button>
      </form>
    </div>
  )
}

export default Contact