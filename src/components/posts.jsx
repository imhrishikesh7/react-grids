import React from 'react'
import './posts.css'
import card1 from '../img/card-1.jpg'
import card2 from '../img/card-2.jpg'
import card3 from '../img/card-3.jpg'
import card4 from '../img/card-4.jpg'
import card5 from '../img/card-5.jpg'
import card6 from '../img/card-6.jpg'
export const Posts = () => {
  return (
    <div class="posts">
            <div class="post">
                <img src={card1}/>
                <div class="content">
                    <h3>Fresh Graduate or IT professional Looking for a job?</h3>
                    <p><span>Arman Ahmed</span>&nbsp;| 04 Jul 2019 </p>
                    <p>If you learn cloud computing then you can make things much easier for your projects. You do not have to rely on multiple hard drives or data storage devices for with cloud</p>
                </div>
            </div>
            <div class="post">
                <img src={card2}/>
                <div class="content">
                    <h3>Introducing you all to EdYoda - www.edyoda.com</h3>
                    <p><span>Arman Ahmed</span>&nbsp;| 04 Jul 2019 </p>
                    <p>Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.
                    </p>
                </div>
            </div>
            <div class="post">
                <img src={card3}/>
                <div class="content">
                    <h3>From identity crisis to the Success Story - The DevOps revolution!</h3>
                    <p><span>Kalyan Mahalingam</span>&nbsp;| 04 Jul 2019 </p>
                    <p>DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the</p>
                </div>
            </div>
            <div class="post">
                <img src={card4}/>
                <div class="content">
                    <h3>Typical day of Data Scientist - An insider story!</h3>
                    <p><span>Saurav Ghosh </span>&nbsp;| 04 Jul 2019 </p>
                    <p>I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - "Big Data and Data Science are the foundation of all the trends that</p>
                </div>
            </div>
            <div class="post">
                <img src={card5}/>
                <div class="content">
                    <h3>Amazon Web Services (AWS) Cloud Day - Bangalore</h3>
                    <p><span>Kalyan Mahalingam</span>&nbsp;| 04 Jul 2019 </p>
                    <p>It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels</p>
                </div>
            </div>
            <div class="post">
                <img src={card6}/>
                <div class="content">
                    <h3>edYoda Meetup #01 : A Date with Cloud</h3>
                    <p><span>Ashish Pandey</span>&nbsp;| 04 Jul 2019 </p>
                    <p>I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the</p>
                </div>
            </div>
    </div>        
  )
}
