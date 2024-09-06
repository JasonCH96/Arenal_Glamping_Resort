import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
    return (
        <>
          <section class="contact-details">
            <div class="container ">
              <div class="row">
                <div class="col-xl-7 col-lg-6">
                  <div class="sec-title">
                    <span class="sub-title before-none">Send us email</span>
                    <h2>Feel free to write</h2>
                  </div>
                  <form id="contact_form" name="contact_form" class="" action="#" method="post">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_name" class="form-control" type="text" placeholder="Enter Name"/>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_email" class="form-control required email" type="email" placeholder="Enter Email"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject"/>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_phone" class="form-control" type="text" placeholder="Enter Phone"/>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <textarea name="form_message" class="form-control required" rows="7" placeholder="Enter Message"></textarea>
                    </div>
                    <div class="mb-5">
                      <input name="form_botcheck" class="form-control" type="hidden" value="" />
                      <button type="submit" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button>
                      <button type="reset" class="theme-btn btn-style-one bg-theme-color5"><span class="btn-title">Reset</span></button>
                    </div>
                  </form>
                </div>
                <div class="col-xl-5 col-lg-6">
                  <div class="contact-details__right">
                    <div class="sec-title">
                      <span class="sub-title before-none">Need any help?</span>
                      <h2>Get in touch with us</h2>
                      <div class="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
                    </div>
                    <ul class="list-unstyled contact-details__info">
                      <li>
                        <div class="icon">
                          <span class="lnr-icon-phone-plus"></span>
                        </div>
                        <div class="text">
                          <h6>Have any question?</h6>
                          <a href="tel:+506 8888 8888"></a>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <span class="lnr-icon-envelope1"></span>
                        </div>
                        <div class="text">
                          <h6>Write email</h6>
                          <a href="mailto:needhelp@company.com">tentmasters@company.com</a>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <span class="lnr-icon-location"></span>
                        </div>
                        <div class="text">
                          <h6>Visit anytime</h6>
                          <span>La Fortuna. </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="map-section">
            <iframe class="map w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15693.57101753173!2d-84.6500587!3d10.4696723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa00c604c3ba983%3A0x2ef6f496b0428c94!2sArenal%20Backpackers%20Resort!5e0!3m2!1ses!2scr!4v1723046578581!5m2!1ses!2scr"></iframe>
          </section>
        </>
    )
}
