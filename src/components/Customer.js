import React from 'react'

const Customer = () => {
  return (
    <>
     <section class="customer-feedback-container" id="Testimonial">
        <div class="customer-feedback">
            <div class="section-title">
                <div class="title-1">Customer Feedback</div>
                <div class="title-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="reviews-slides slider">

                <div class="reviews-feedback">
                    <div class="r-wraper swiper">
                        <div class="item swiper-slide">
                            <div class="single-feedback">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices
                                    gravida.”</p>
                                <div class="img-fill">
                                    <img src="https://templates.hibootstrap.com/zebu/default/assets/img/client/1.jpg"
                                        alt="client" />
                                </div>
                                <div class="title">
                                    <h3>Jonus Nathan</h3>
                                    <span>CEO at Envato</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- <div class="swiper-button-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </div>
                        <div class="swiper-button-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div> --> */}
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Customer