import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.facebook.com/monicamooran" target="_blank" rel="noreferrer">
    <div>
      <FaFacebookF/>
    </div>
    </a>
    <a href="https://www.instagram.com/monicamooran/" target="_blank" rel="noreferrer">
    <div>
      <BsInstagram/>
    </div>
    </a>
    <a href="https://www.tiktok.com/es" target="_blank"  rel="noreferrer">
    <div>
      <FaTiktok/>
    </div>
    </a>
    <a href="https://www.youtube.com/channel/UC29dlKq0vf_XgFRZ9J3seqw" target="_blank"  rel="noreferrer">
    <div>
      <FaYoutube/>
    </div>
    </a>
  </div>
);

export default SocialMedia;