import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className="head-text">Toma Un Café Y Habla Con Nosotros</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:thegloballanguagecenter@gmail.com" className="p-text">thegloballanguagecenter@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="https://wa.me/50231109517" className="p-text">+502 3110 9517</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Tu Nombre" name="name" value={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Tu Email" name="email" value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Tu Mensaje"
            value={message}
            name="message"
            onChange={handleChangeInput}
           />
        </div>
        <button type="button"className="p-text" onClick={handleSubmit}>{loading ? "Mandando..." : "Mandar Mensaje"}</button>
      </div>
      : <div>
        <h3 className="head-text">Gracias Por Ponerte En Contacto!</h3>
      </div>
      }

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contáctanos",
  "app__primarybg"
);