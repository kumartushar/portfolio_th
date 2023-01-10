import './App.css';
import * as Icons from 'react-icons/bs';
import logo from './img/t8h-logo-high.png';
import profile_short from './img/bg-photo2.jpg';
import profile_logo from './img/t8h-logo2.png';
import profile_short2 from './img/profile-img-short.jpg';

function App() {
  return (
    <div className="App">
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img src={profile_short2} alt="" class="img-fluid rounded-circle"></img>
            <h1 class="text-light"><a href="index.html">Tushar Hawaldar</a></h1>
            <div class="social-links mt-3 text-center">
              <a href="https://www.linkedin.com/in/tushar-hawaldar-334a5175/" class="linkedin" target="_blank" rel="noreferrer"><Icons.BsLinkedin /></a>
              <a href="https://github.com/kumartushar" class="github" target="_blank" rel="noreferrer"><Icons.BsGithub /></a>
              <a href="#" class="facebook"><Icons.BsFacebook /></a>
              <a href="#" class="instagram"><Icons.BsInstagram /></a>
            </div>
          </div>

          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#blogs" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Blogs</span></a></li>
              <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
          <h1>Tushar Hawaldar</h1>
          <p>Cloud Engineer &amp; Full Stack Developer</p>
        </div>
      </section>

      <main id="main">
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <h2>About</h2>
              <p>
                A passionate technologist who loves to design and build solutions to the complex problems to deliver results and create positive impact. I have total of 8+ years of experience in the web and cloud software development.
                Started my carrier back in July 2014, I worked for almost 5 years as a full stack web developer in Ruby on Rails and many other tools and technologies. Then I shifted my area of work to Cloud as I was very curious about it,
                where I got to work on designing, developing, & maintaining cloud infrastructure and services on a high scale, for last almost 4 years I have enjoyed this jounrney of Cloud. Overall, I have been fortunate enough to be able
                to learn and contribute on multiple areas of software engineering, and I am excited for every opportunity coming my way.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-4" data-aos="fade-right">
                <img src={logo} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Personal</h3>
                <p class="fst-italic">
                  I really belive in the power of being disciplined and focus on process, so I choose that over anything. So I try to follow simple routine of excersice, rest, family, work, etc. and that helps me.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>08 Jan 1993</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.tusharhawaldar.com</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, India</span></li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor Of Engineering</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kumartushar1111@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
                <p>
                  I feel taking good care of health is the best thing I can do to myself as well as the universe. I like making connections, to talk with people, listen to what they have to say, and learn with each experience.
                  One of my favourite working principle is "Doing is Winning", and I live by that.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="facts" class="facts">
          <div class="container">

            <div class="section-title">
              <h2>Facts</h2>
              <p>I have always enjoyed this journey of learning skills, building strong professional network, make impact to each projects, etc. while working with multiple orgnizations and teams on wide variety of projects/challeneges in various domains. And I am always excited for whats coming next!</p>
            </div>

            <div class="row no-gutters">

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                <div class="count-box">
                  <i class="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Happy Orgnizations</strong></p>
                  <p><strong>4</strong></p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                <div class="count-box">
                  <i class="bi bi-person-workspace"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Experience</strong></p>
                  <p><strong>8+</strong></p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                <div class="count-box">
                  <i class="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="20+" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Projects</strong></p>
                  <p><strong>20+</strong></p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                <div class="count-box">
                  <i class="bi bi-people"></i>
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Professional Network</strong></p>
                  <p><strong>1000+</strong></p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="skills" class="skills section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Skills</h2>
              <p>
                I strongly believe in being curious & learning as much as I can by trying, doing and from others, and that has helped me to build my skills in the journey so far. I believe that there is still a lot to learn and do,
                and I am always exicted to learn and work on something challenging, and I love that the most.
              </p>
            </div>

            <div class="row skills-content">

              <div class="col-lg-6" data-aos="fade-up">

                <div class="progress">
                  <span class="skill"> Ruby, Ruby on Rails, Rspec, MySql, HTML, Javascript, Jquery<i class="val"></i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">Data structures, System design, REST, OOPs<i class="val"></i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">Test Driven Development, Design Patterns, Agile<i class="val"></i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                <div class="progress">
                  <span class="skill">AWS (EC2, Lambda, S3, Elastic Load Balancing, IAM, CloudWatch, Cloudtrail, EventBridge) <i class="val"></i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">Chef, GitOps, Jenkins, Serverless, Linux, Terraform, Kafka<i class="val"></i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">Rundeck, Networking <i class="val"></i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        <section id="resume" class="resume">
          <div class="container">

            <div class="section-title">
              <h2>Resume</h2>
            </div>

            <div class="row">
              <div class="col-lg-6" data-aos="fade-up">
                <h3 class="resume-title">Sumary</h3>
                <div class="resume-item pb-0">
                  <h4>Tushar Hawaldar</h4>
                  <p><em>
                  Lead Software Engineer with 8+ years of experience in creating and executing high-quality software designs & solutions to complex problems in Web and Cloud domains. I excel at building APIs, serverless architecture, distributed systems, data structures, system design, AWS services, cloud infrastructure, etc. A confident communicator & skilled leader with a proven ability to manage a team of professionals to deliver results effectively.  
                  </em></p>
                  <ul>
                    <li>Pune, India.</li>
                    <li>7057790747</li>
                    <li>kumartushar1111@gmail.com</li>
                  </ul>
                </div>

                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                  <h4>Bachelor of Computer Engineering</h4>
                  <h5>2010 - 2014</h5>
                  <p><em>University of Pune</em></p>
                  <p>
                    I have completed my graduation from university of Pune with "First class with distinction" and an average score of 71.4%, which is considered to be top 1% of the students in entire university.
                    I always enjoyed doing deep analysis and teaching people about my learnings, also I loved to do presentations to build by communication and presentations skills.
                    I used to actively participate in the annual technical/non-technical events.
                  </p>
                </div>
                <div class="resume-item">
                  <h4>Higher Secondary Certificate</h4>
                  <h5>2008 - 2010</h5>
                  <p><em>Shri Shivaji University</em></p>
                  <p>The place where I learnt and build my interest for mathematics and engineering.</p>
                </div>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 class="resume-title">Professional Experience</h3>
                <div class="resume-item">
                  <h4>Lead Cloud Software Engineer </h4>
                  <h5>08/2019 - Present</h5>
                  <p><em>Coupa, Pune, India </em></p>
                  <ul>
                    <li>Led an initiative that saved the AWS cloud service cost by $2 million per year by implementing the best practices for AWS services like Cloudtrail, KMS, etc.</li>
                    <li>Reduced the operational complexity & cost of the load balancers by building a solution using AWS ELB, AWS Lambda, Terraform, GitOps CI/CD, etc.</li>
                    <li>Started and led an initiative to implement and integrate Ruby gems in Chef cookbooks. This improved code modularity, usability, and testability, etc.</li>
                    <li>Increased the success rate of the customer clone/refresh process from 50% to 90% by building automation to select optimal target infrastructure, self-heal infrastructure, etc.</li>
                  </ul>
                </div>
                <div class="resume-item">
                  <h4>Senior Software Engineer </h4>
                  <h5>10/2018 - 07/2019</h5>
                  <p><em>Velotio, Pune, India</em></p>
                  <ul>
                    <li>Designed and built an event streaming platform using Ruby & Kafka, that serves multiple use-cases in production.</li>
                    <li>Reduced the manual efforts of SRE during Production rollouts by designing and implementing solutions using Rundeck & Ruby to deploy, upgrade cloud infrastructure & services.</li>
                  </ul>
                </div>
                <div class="resume-item">
                  <h4>Software Engineer </h4>
                  <h5>04/2018 - 10/2018</h5>
                  <p><em>QuestionPro, Pune, India</em></p>
                  <ul>
                    <li>Improved the application response time by 10% by refactoring and optimizing the backend APIs in Ruby on Rails.</li>
                    <li>Increased the test success rate by 15% by enhancing screen and audio record processing to work on mobile devices.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="services" class="services">
          <div class="container">

            <div class="section-title">
              <h2>Services</h2>
              <p>
                I believe in making impact and taking end-to-end ownership of things to create the best results for customers success. I have vast experience in various phases of software development and I like to provide the services in those areas.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div class="icon"><i class="bi bi-briefcase"></i></div>
                <h4 class="title"><a href="">System Design And Architecture</a></h4>
                <p class="description">Understand the goal/problems, design the high & low lever systems to solve them.</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><i class="bi bi-card-checklist"></i></div>
                <h4 class="title"><a href="">Software Development</a></h4>
                <p class="description">Implement the solutions with new cutting edge tools and technologies.</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="bi bi-bar-chart"></i></div>
                <h4 class="title"><a href="">Cloud Deployment</a></h4>
                <p class="description">Setup the cloud infrastructure, build network, deploy the applications to cloud.</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="bi bi-binoculars"></i></div>
                <h4 class="title"><a href="">Analysis and Documentation</a></h4>
                <p class="description">Analyze the problem statements, breakdown it into stories, prepare the documentation.</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon"><i class="bi bi-brightness-high"></i></div>
                <h4 class="title"><a href="">Project Management</a></h4>
                <p class="description">Leading the teams to deliver the effective & efficient results.</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                <div class="icon"><i class="bi bi-calendar4-week"></i></div>
                <h4 class="title"><a href="">Production Management</a></h4>
                <p class="description">Monitoring and handling the production environment.</p>
              </div>
            </div>

          </div>
        </section>

        {/* <section id="testimonials" class="testimonials section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Testimonials</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="testimonial-item" data-aos="fade-up">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>

          </div>
        </section> */}

        <section id="contact" class="contact">
          <div class="container">

            <div class="section-title">
              <h2>Contact</h2>
              <p>
                If you want to talk on ideas, technology, or anything else. Please feel free to connect.
              </p>
            </div>

            <div class="row" data-aos="fade-in">

              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Pune, India, 411033</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>kumartushar1111@google.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 7057790747</p>
                  </div>

                </div>

              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input type="text" name="name" class="form-control" id="name" required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input type="email" class="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject" required />
                  </div>
                  <div class="form-group">
                    <label for="name">Message</label>
                    <textarea class="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
