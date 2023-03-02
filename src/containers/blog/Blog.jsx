import React from 'react';
import { Article } from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './import' 
import './blog.css';

const Blog = () => {
  return (
    <div className="mycv__blog section__padding" id="blog">
      <div className="mycv__blog-heading">
        <h1 className='gradient__text'>A lot is happening,<br/>
          We are blogging about it.</h1>
      </div>
      <div className="mycv__blog-container">
        <div className="mycv__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="mycv__blog-container_groupB">
          <div>
        <Article imgUrl={blog02} date="Sep 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div>
        <Article imgUrl={blog03} date="Sep 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div>
        <Article imgUrl={blog04} date="Sep 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div>
        <Article imgUrl={blog05} date="Sep 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;