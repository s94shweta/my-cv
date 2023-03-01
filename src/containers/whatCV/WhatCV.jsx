import React from 'react';
import { Feature } from '../../components';
import './whatcv.css'

const WhatCV = () => {
  return (
    <div className='mycv__whatcv section__margin'  id="whatcv">
      <div className="mycv__whatcv-feature">
        <Feature title="What CV?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className="mycv__whatcv-heading">
        <h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='mycv__whatcv-container'>
        <Feature title="Chatbots" text=" We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Feature title="Knowledgebase"  text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default WhatCV