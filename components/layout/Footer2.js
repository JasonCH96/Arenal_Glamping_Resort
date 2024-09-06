import Link from 'next/link';
import React from 'react';
import BackToTop from '../elements/BackToTop'
import Image from 'next/image'
import LogoWhite from './../../public/images/logo-v4-black.png';
const Footer1 = () => {
    return (
        <>
  <footer className="main-footer footer-style-two">

		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-3 col-sm-6">
						<div className="footer-widget about-widget">
							<div className="logo">
								<Link href=""><Image src={LogoWhite} title='Arenal Volcano Glamping Resort' alt="" /></Link>
							</div>
							<div className="text">Welcome to the best five-star deluxe glamping in La Fortuna.</div>
							<ul className="social-icon-two">
								<li>
								<Link href="#"><i className="fab fa-twitter"></i></Link>
								</li>
								<li>
								<Link href="#"><i className="fab fa-facebook"></i></Link>
								</li>
								<li>
								<Link href="#"><i className="fab fa-pinterest"></i></Link>
								</li>
								<li>
								<Link href="#"><i className="fab fa-instagram"></i></Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="footer-column col-lg-3 col-sm-6 mb-0">
						<div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
						<h4 className="widget-title">Services Links</h4>
							<div className="widget-content">
								<ul className="user-links">
									<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Home</Link></li>
									<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Tents</Link></li>
									{/* <li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Restaurant</Link></li> */}
									{/* <li><Link href="#"><i className="fa-solid fa-crosshairs"></i>News</Link></li> */}
									<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>About the property</Link></li>
								</ul>
								<ul className="user-links">
									<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>tents</Link></li>
									{/* <li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Wellness</Link></li> */}
									{/* <li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Spa</Link></li> */}
									<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Gallery</Link></li>
									<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Contact</Link></li>
								</ul>
							</div>
						</div>
					</div>

					{/* <div className="footer-column col-lg-3 col-sm-6">
						<div className="footer-widget news-widget wow fadeInLeft" data-wow-delay="300ms">
							<h4 className="widget-title">Latest News</h4>
							<div className="news-info">
								<figure className="image overlay-anim"><Link href="#"><img src="images/resource/news-info-1.jpg" alt=""/></Link></figure>
								<h6 className="title"><Link href="#" title="">Quisque at Felis <br/>Port Titordga</Link></h6>
								<span className="date">14 May 2023</span>
							</div>
							<div className="news-info">
								<figure className="image overlay-anim"><Link href="#"><img src="images/resource/news-info-2.jpg" alt=""/></Link></figure>
								<h6 className="title"><Link href="#" title="">Tips For Picking <br/>Vacation</Link></h6>
								<span className="date">14 May 2023</span>
							</div>
						</div>
					</div> */}
					<div className="footer-column col-lg-3 col-sm-6">
						<div className="footer-widget info-widget wow fadeInLeft" data-wow-delay="300ms">
						<h4 className="widget-title">Information</h4>
						<div className="widget-content">

							<article className="recent-post">
							<div className="inner">
								<div className="post-info"><i className="fas fa-phone"></i> +506 8888 8888</div>
								<div className="post-info">+506 8888 8888</div>
								<div className="post-info"><i className="fa fa-envelope"></i> tentmasters@company.com</div>
								<div className="post-info"><i className="fas fa-location"></i> 600 meters west from La Fortuna Central Park, <br/>Costa Rica</div>
							</div>
							</article>
						</div>
						</div>
					</div>

				</div>
			</div>
		</div>

    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">&copy; Copyright Reserved by arenalvolcanoglampingresort.com</div>
                <BackToTop />
        </div>
      </div>
    </div>
  </footer>
        </>
    );
};

export default Footer1;