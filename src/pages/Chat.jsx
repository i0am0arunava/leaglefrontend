
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./navbar"
import { MdOutlineNextPlan } from "react-icons/md";
import "./sport.css"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import img1 from "./img12.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.png';
import logo6 from './logo6.png';
import logo7 from './logo7.png';
import logo8 from './logo8.png';
import logo9 from './logo9.png';
import imt1 from './image_one.png';
import imt2 from './image-tow.png';
import imt3 from './image-three.png';
function Chat() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      }
      console.log("hellow2")
    };

    checkUser();
  }, []);
  const [count, setCount] = useState(0)
  const item1 = ["Company", "Property"]
  const item2 = ["Document", "Startup", "Content"];
  const logos = [
    { name: 'Altshift', logo: logo1 },
    { name: 'Boltshift', logo: logo2 },
    { name: 'Cataalog', logo: logo3 },
    { name: 'Capsule', logo: logo4 },
    { name: 'Biosynthesis', logo: logo5 },
    { name: 'Cataalog', logo: logo3 },
    { name: 'Capsule', logo: logo4 },


  ];
  const [hoveredElement, setHoveredElement] = useState(null);


  const handleMouseEnter = (element) => {
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };
  return (
    <>
     <div>

      <Nav/>
     </div>
      <div className="sub2">
        <div className="part1">
          <div className="About"> About Us</div>
          <div className="up1">

            {item1.map((item, index) => (
              <div className="a1" key={`${index}`}>{item}</div>
            ))

            }





          </div>
          <div className="do1">
            {item2.map((item, index) => (
              <div className="a2" key={`${index}`}>{item}</div>

            ))
            }


          </div>
        </div>
        <div className="part2">
          <div className="up2">Leagle</div>
          <div className="para1">Leagle is your ultimate destination for comprehensive legal research. Our platform provides seamless access to a vast collection of legal documents, case law, statutes, and expert analysis from around the world. Discover essential legal resources, analyze complex legal issues, and stay informed with the latest updates and insights, all in one convenient location</div>
          <div className="but2"><button className="allc mn">Discover </button></div>
        </div>
        <div className="trust">Our Trusted Users</div>
        <div className="up3">
          {logos.map((item, index) => (
            <div key={index} className="fg1">
              <img className="logon"
                src={item.logo}
                alt={item.name}
              // Adjust the width
              />
              <span className="name1">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="do3">



          {logos.map((item, index) => (
            <div key={index} className="fg1">
              <img className="logon"
                src={item.logo}
                alt={item.name}
              // Adjust the width
              />
              <span className="name1">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sub3">
        <div className="part4">Our services</div>
        <div className="part5">We offer legal advice anytime! Our experienced lawyers are available 24/7 to answer your questions, big or small. They will provide clear and easy-to-understand guidance in your language, without all the confusing legal terms. We simplify legal matters so you do not have to stress.</div>
        <div className="box1">

          <div className="blo"><img className="blo"
            src={logo6}
            alt={"logo"}
          // Adjust the width
          /></div>
          <div className="but4"><button className="allc">Online Lawyer Consultation</button></div>
          <div className="but5"><button className="allc">Document Review & Consult</button></div>
          <div className="bp1">Now you can consult a lawyer or have your legal documents reviewed from the comfort of your home. Enjoy secure calls and access to verified lawyers.</div>
          <div className="bt1">Online Consultation
            with a Lawyer</div>




        </div>
        <div className="box2">
          <div className="blo"><img className="blo"
            src={logo7}
            alt={"logo"}
          // Adjust the width
          /></div>
          <div className="but4"><button className="allc"> Online Lawyer Consultation</button></div>
          <div className="but5"><button className="allc"> Document Review & Consult</button></div>
          <div className="bp1">Whether for corporate, HR, professional, or personal use, you can have any legal document drafted and customized to fit your specific needs at an affordable price.</div>
          <div className="bt1">Documentation by
            Expert Professionals</div>
          <div className="g"><button className="allc">Gift Deed</button></div>
        </div>
        <div className="box3">
          <div className="blo"><img className="blo"
            src={logo8}
            alt={"logo"}
          // Adjust the width
          /></div>
          <div className="but4"><button className="allc">Online Lawyer Consultation</button></div>
          <div className="but5"><button className="allc">Trademark</button></div>
          <div className="bp1">Whether you are planning a start-up or managing an ongoing business, focus on your operations while we handle your legal concerns. We offer consulting, drafting, review, and filing services all in one place.</div>
          <div className="bt1">Start-up Legal
            Solutions</div>
          <div className="g"><button className="allc">Gift Deed</button></div>



        </div>
        <div className="box4">

          <div className="blo"><img className="blo"
            src={logo9}
            alt={"logo"}
          // Adjust the width
          /></div>
          <div className="but4"><button className="allc">Sale Agreement or Agreement to Sale Review</button></div>
          <div className="but5"><button className="allc">Sale Deed Drafting</button></div>
          <div className="bp1">Reliable Property Legal Services. We assist you in making informed property investment decisions. India is top provider of property legal solutions.</div>
          <div className="bt1">Property legal solutions for all
            your property investments</div>
          <div className="g"><button className="allc">Agreement to Sale Drafting</button></div>




        </div>
      </div>
      <div className="sub4">


      <div className="main-div">
      <div className="what-wedo">
        <div className="left-div">
          <div className="upper-sen-div">
            <p className="upper-sent">What we'are doing</p>
            <p className="dot">.</p>
          </div>
          <div className="lower-sen-div">
            <p className="lower-sen">Legel Services all over Indian</p>
            <p className="dot-2">.</p>
          </div>
        </div>

        <div className="right-div">
          <div className="div-90-m">
            <div className="div-90m-upp">
              <p className="ninty-90">90M</p>
              <p className="add">+</p>
            </div>
            <p>Minutes Consulted</p>
          </div>
          <div className="div-50k">
            <div className="div-50k-upp">
              <p className="fifty-k">50K</p>
              <p className="add">+</p>
            </div>
            <p>
              Local Attorneys in <br />
              Our Network
            </p>
          </div>
          <div className="div-15k">
            <div className="div-15M-upp">
              <p className="one-five-div">1.5M</p>
              <p className="add">+</p>
            </div>
            <p>
              Startup <br />
              Mentored
            </p>
          </div>
        </div>
      </div>

      <div className="img-slider-div">
        <div className="title">
          <div className="title-div">
            <p className="title-sen">Quick Buy</p>
          </div>
          <div className="slider-butt">
            <div className="btn-1"><button></button></div>
            <div className="btn-2"><button></button></div>
          </div>
        </div>

        <div className="img-div">
          <div className="img-1">
            <div className="img12">
              <img src={img1} alt="" />
            </div>
            <div className="text-1">
              <p className="text1">
                Online Lawer <br />
                Consultation
              </p>
              <div className="circl-pric1">
                <div className="circle1"><MdOutlineNextPlan /></div>
                <div className="price1">
                  <p className="small-sen1">tarting from Rs.19.99/min</p>
                </div>
              </div>
            </div>
          </div>

          <div className="img-2">
            <div className="img2">
              <img src={img2} />
            </div>
            <div className="text-2">
              <p className="text2">
                Agreement to Sale or <br />
                Sale Agreement Review
              </p>
              <div className="circl-pric1">
                <div className="circle2"><MdOutlineNextPlan /></div>
                <div className="price1">
                  <p className="small-sen1">Starting from Rs.2499</p>
                </div>
              </div>
            </div>
          </div>

          <div className="img-3">
            <div className="img3">
              <img src={img3} />
            </div>
            <div className="text-3">
              <p className="text3">
                Agreement to Sale <br />
                Drafting
              </p>
              <div className="circl-pric1">
                <div className="circle1"><MdOutlineNextPlan /></div>
                <div className="price1">
                  <p className="small-sen1">Starting from Rs.3499</p>
                </div>
              </div>
            </div>
          </div>

          <div className="img-4">
            <div className="img4">
              <img src={img4} />
            </div>
            <div className="text-4">
              <p className="text4">Trademark</p>
              <div className="circl-pric1">
                <div className="circle1"><MdOutlineNextPlan /></div>
                <div className="price1">
                  <p className="small-sen1">Starting from Rs.10500</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-sect">
          <div className="title-para1">
            <div className="para-1">
              <div className="num-1">
                <p className="num1">01</p>
              </div>
              <div className="title-1">
                <p className="paragra-1">What is Legle?</p>
              </div>
              <div className="sub-sig">
                <p className="sub-1">-</p>
              </div>
            </div>

            <div className="main-para">
              <p className="paragraph1">
                Leagle is a comprehensive legal research platform that provides
                access to a wide range <br />of legal documents, case law,
                statutes, and expert analysis from various jurisdictions
                <br />around the world. Our goal is to make legal research
                easier and more efficient for legal <br />
                professionals, researchers, and anyone interested in legal
                matters.
              </p>
            </div>
          </div>

          <div className="title-para2">
            <div className="num-2">
              <p className="num2">02</p>
            </div>
            <div className="title-2">
              <p className="paragra-2">
                How do I use the search function on Leagle?
              </p>
            </div>
            <div className="sub-sig2">
              <p className="sub-2">+</p>
            </div>
          </div>

          <div className="title-para2">
            <div className="num-2">
              <p className="num2">03</p>
            </div>
            <div className="title-2">
              <p className="paragra-2">How do I create an account on Leagle?</p>
            </div>
            <div className="sub-sig2">
              <p className="sub-2">+</p>
            </div>
          </div>

          <div className="title-para2">
            <div className="num-2">
              <p className="num2">04</p>
            </div>
            <div className="title-2">
              <p className="paragra-2">
                How do I contact Leagle for support or feedback?
              </p>
            </div>
            <div className="sub-sig2">
              <p className="sub-2">+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="meet-team">
        <div className="text-line">
          <div className="team-div">
            <div className="text-meet-team">
              <p className="team-text-left">Meet the Team</p>
            </div>
            <div className="dot-mee">
              <p className="dot-green">.</p>
            </div>
          </div>
          <div className="team-para">
            <p className="text-para-p">
              At <b>Leagle</b>, our team of legal experts and tech innovators is
              <br />
              dedicated to revolutionizing legal research.
            </p>
          </div>
        </div>

        <div className="img-divs">
          <div className="img-one">
            <img src={imt1} />
          </div>
          <div className="img-tow">
            <img src={imt2} />
          </div>
          <div className="img-three">
            <img src={imt3} />
          </div>
        </div>
      </div>

      <div className="futtor">
        <div className="tow-divs">
          <div className="text-cont">
            <p className="sign-in-p">Sign up to follow</p>
          </div>
          <div className="empt-div"></div>
        </div>
        <div className="sig-in-div">
          <div className="input-div">
            <input type="text" />
            <label>Your Email</label>
          </div>
          <div className="butt">
            <button><p>Sign Up</p></button>
          </div>
        </div>

        <div className="lower-text">
          <p className="lower-line">Leagle projects, Funding </p>
          <div className="oport">
            <div className="div-l">
            <p>and career </p>
          </div>
          <div className="div-i">
            <p> opportunities.</p>
          </div>
        </div>
        </div>

        <div className="adress">
          <div className="place-div">
            <p className="a">Leagle.</p>
            <p className="b">New Delhi, India <br/> info@leagle.com <br/>
            +91-0123456789</p>
          </div>
          <div className="optio">
            <a href="#">PROPERTY</a>
            <a href="#">DOCUMENT</a>
            <a href="#">STARTUP</a>
            <a href="#">COMPANY</a>
          </div>
        </div>

        <div className="app-google">
          <div className="apple">
          <span className="iggn"><BsApple /></span> Google   
          </div>
          <div className="google">
            <span className="iggn"><IoLogoGooglePlaystore /></span> Google   
          </div>
        </div>

        <div className="lowest-footer">
            <p className="lastb">All rights reserved copyright 2022@</p>
        </div>
      </div>
    </div>
               








      </div>

    </>
  )
}

export default Chat
