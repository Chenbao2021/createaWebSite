import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className='adress'></div>
        <div className='googleMapContainer'>
          <iframe 
            title='adress' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.693152739834!2d2.3805807155320737!3d48.84499137928619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67211f8c10add%3A0x6639710c3c22eef5!2s153%20Rue%20de%20Charenton%2C%2075012%20Paris!5e0!3m2!1szh-CN!2sfr!4v1658069876917!5m2!1szh-CN!2sfr" 
            width="700" 
            height="450"  
          ></iframe>
          <div className='adressDescription'>
            <h2>Adresse : </h2> <div><p>153 Rue de Charenton, 75012 Paris</p></div> 
            <h2>Numero :</h2> <div><p>09 88 51 85 11</p></div> 
          </div>
        </div>
    </div>
  )
}

export default Contact