import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [formData, setFormData] = useState({name: "", language: "", feedback: "", email: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { name, language, feedback, email } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const testimonials = {
      _type: "testimonials",
      name: name,
      email: email,
      language: language,
      feedback: feedback,
    }

    client.create(testimonials).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    })
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    })
  }, [])

  const test = testimonials[currentIndex]

  return (
    <>
      {testimonials.length && (
        <>
          <h1 className="head-text">Lo Que Dicen Nuestros Alumnos</h1>
          <div className="app__testimonial-item app__flex">
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.language}</h5>
                <h6 className="p-text">{test.email}</h6>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length -1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
        <h2 className="head-text">Deja Una Reseña</h2>
        {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Tu Nombre" name="name" value={name} onChange={handleChangeInput}/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Lenguaje Aprendido" name="language" value={language} onChange={handleChangeInput}/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Tu Email" name="email" value={email} onChange={handleChangeInput}/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Tu Reseña"
              value={feedback}
              name="feedback"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button"className="p-text" onClick={handleSubmit}>{loading ? "Mandando..." : "Mandar Reseña"}</button>
        </div>
        : <div>
          <h3>Gracias Por Tu Reseña!</h3>
        </div>
        }
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "reseñas",
  "app__whitebg"
);