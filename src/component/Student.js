import React from 'react'

export default function Student() {
  return (
    <div>
      <div className="divFive">
         <section className="headingSec">
            <h1><span className="highlight">What</span> Our Students Say</h1>
            <p>
               Explore student testimonials at Sanjivani. Dive into testimonials that capture the 
               essence of life within our academic community. Connect with the voices that make 
               our community thrive.
            </p>
         </section>

         <section className="firstSec">
            <section className="subSec"></section>

            <section className="subSec" id="firstComment">
               <section className="imgSec">
                  <image src="img/profile-1.jpg" alt="Student's Picture"/>
               </section>

               <section className="quoteSec">
                  <p>
                     “Sanjivani is home to me not because of the fancy buildings like Healy Hall, or its 
                     prestigious reputation, but rather because of the university's care for the whole person 
                     as each of us attempts to live our lives for others.”
                  </p>

                  <span className="name">Chetan</span>

                  <span className="rating">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
               </section>
            </section>

            <section className="subSec">
               <section className="imgSec">
                  <image src="img/profile-2.jpg" alt="Student's Picture"/>
               </section>

               <section className="quoteSec">
                  <p>
                     “Sanjivani is home to me not because of the fancy buildings like Healy Hall, or its 
                     prestigious reputation, but rather because of the university's care for the whole person 
                     as each of us attempts to live our lives for others.”
                  </p>

                  <span className="name">Om</span>

                  <span className="rating">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-regular fa-star"></i>
                  </span>
               </section>
            </section>

            <section className="subSec">
               <section className="imgSec">
                  <image src="img/profile-3.jpg" alt="Student's Picture"/>
               </section>

               <section className="quoteSec">
                  <p>
                     “Sanjivani is home to me not because of the fancy buildings like Healy Hall, or its 
                     prestigious reputation, but rather because of the university's care for the whole person 
                     as each of us attempts to live our lives for others.”
                  </p>

                  <span className="name">Manoj</span>

                  <span className="rating">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </span>
               </section>
            </section>

            <section className="subSec">
               <section className="imgSec">
                  <image src="img/profile-1.jpg" alt="Student's Picture"/>
               </section>

               <section className="quoteSec">
                  <p>
                     “Sanjivani is home to me not because of the fancy buildings like Healy Hall, or its 
                     prestigious reputation, but rather because of the university's care for the whole person 
                     as each of us attempts to live our lives for others.”
                  </p>

                  <span className="name">Abhi</span>

                  <span className="rating">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </span>
               </section>
            </section>

            <section className="subSec">
               <section className="imgSec">
                  <image src="img/profile-2.jpg" alt="Student's Picture"/>
               </section>

               <section className="quoteSec">
                  <p>
                     “Sanjivani is home to me not because of the fancy buildings like Healy Hall, or its 
                     prestigious reputation, but rather because of the university's care for the whole person 
                     as each of us attempts to live our lives for others.”
                  </p>

                  <span className="name">Ram</span>

                  <span className="rating">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </span>
               </section>
            </section>
         </section>
      </div>



      <div className="scroll-container">
         <image src="img/building-1.jpg" alt="Cinque Terre" width="600" height="400"/>
         <image src="img/building-2.jpg" alt="Forest" width="600" height="400"/>
         <image src="img/building-3.jpg" alt="Northern Lights" width="600" height="400"/>
         <image src="img/overlay.jpg" alt="Mountains" width="600" height="400"/>
     </div>

  
   
     

      <div className="divSeven">
         <section className="headingSec">
            <h1><span className="highlight">About</span> Us</h1>
            <p>
               Welcome to Sanjivani, a dynamic hub of education and inspiration. Distinguished 
               by dedicated faculty and cutting-edge facilities, we nurture minds, value 
               diversity, and empower students for success. Join us in celebrating the joy of 
               learning. Explore, discover, and be part of the inspiring journey at 
               Sanjivani—where education transforms lives.
            </p>
         </section>

         <section className="firstSec">
            <a href="/">
               <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="/">
               <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="/">
               <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="/">
               <i className="fa-brands fa-twitter"></i>
            </a>
         </section>

         <section className="firstSec">
            <p>
               Made with <i className="fa-regular fa-heart"></i> 
               by <a href="https://github.com/Okafor-Chiagozie">Chetan Gadekar</a>
            </p>
         </section>
      </div>
    </div>
  )
}
