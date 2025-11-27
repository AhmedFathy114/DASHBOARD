import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import CardsPage from '../../../Components/Cards/card.jsx';

const cardsData = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFAngceBO-2qDNNXT59dCNgclkFyfB-a1qE3yuNrkvoRqd3-7sVkTLPeJiUUoAX7HhZhpzdubjMAuWPe98s8lzRHk2rSGXcI0M_D6tqy3aesL2ax_zFhtSTR2cgkfAc6r7ANAfxqYVTVIw305_CyBrD_cv37tvoan5ibn-vMsza99a5YeFfyXPBfr3i6w-m1i9gonHyHRj1tLzV7810-qEBNeJ2JwNB-QVk9gsC7-3L4otjcbeb5X1En12ZUPb1O-87JC-nGU6hKnw",
    path : "details",
    title: "Carpenter"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApkl8Tf0hUmg2v9_VdGfIOYX4h3Vq1QlabcDHoHKI4ErtUwicBfST_A_IuBNSFYHsOdg5AELA01QD9byJo1Gv1uB3m0Vj_Z51tpsHFpSl_KAJ4DtcsTppnywJla_PwCSUT6_CdU6uqSOu4Uv2qZe3i4nP4ZfqMIJm4BQNjvpN322t8QqzdsnV7NI9gv9iHxxxjhhrjKOOVYcGPKwf817YAKGmLwPyW5NNcDXOvZXSuBKR-oIZzFwrSqe3TzTHMT-rEPiJHKi_TtDOf",
    path : "details",
    title: "Plumber"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLZLEtiRlOpUXKPvUHN9K3XvlOJVCI-0O9R5nqhutZFkP-TRI927U1zbwZkCVlcqGgLFC7Nuclg1_P9uYbK_IFwP-4eFPM8TSX9TIZbZmmwvJh6gr2JgDc4xIFL5vHdSHdnUuvzg1CFYr2-osD7bNvbXS1lL2qRrebdHv9TJrZpSara0UOC4E7bjZhDesK7kaZRK4OH29FKgy3-padzMalYiBqIjfLCDQ0J1l92fU1Q5o0omfCrv56DZfkTliNzAddD2mvYByRmhrj",
    path : "details",
    title: "Electrician"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9D5FvVMoXDABmfwtatbwhEd6KpFHeuazRtD6Gxz9e8rmsjl6T-mnKdItjV5C2Wp02qJtwIjuslV2MuoAOJ-2OPJOiPsscOCvie8MtFffxyA77zmdQXG31EVoN3zdyfPK-YhKCjpi2RBIS8qvLkmxaB_O2GSfjCIceNWbCFvCuMG7IsxMmVA6p9x4oSPPZgeyRd-dH8d9i8ec8oR10ygihhzydKYQ9dEtb5pHFmBbDrO2mKgRoFHqPUMyuMydI_Jlc80bmSg0gZJ7",
    path : "details",
    title: "Painter"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdi9H6XDMjmphf9OvCJBg11cmkaSoipBFzlMw66DCHHd3iAfkkH8t0qzuN3RMQmte3Z7zl-8oK9XPYS6JBQR0FHRavPSdBRcordBIfUDv_6JLuSCZWej05Cg546iIv9UbnbnzA10YLAocpacnJumZeOqoesmsV_Z4I5GQR7vIpmW4ZXe1TpFaZ2GRBGufWxOC4bLZynHSFFcYISQB1WmTmJrad66S3zMUlSE6MrZjnbPNQ5Q0eKdHOSQiEgmpLdw_0gCPSt6FMmpdd",
    path : "details",
    title: "Landscaper"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm4MqyakMzOEXP_A4jvI-YCxtBGWZRnHibf5-OpLvMlNSWw-bP__ERFTPLaYo1sQwRvzGc9E--sRAt-MPdec8ab0utH4PSARAOgAl1s1hibHDiLBn01aPyukzlY6cZFOaS9ZkcC9EOx3LqaxF42cGzgjRMVvYs_Cl4_eZA9TJ21uJDBH8gWKAt0gN9rNn797QwtYszT-2pP36QzGMPfI4Wn16cwADpsyu5R4q9RmmbTa-LTO0XFw3RKKEcg3kWc3Xx-VwtHzSEA5VR",
    path : "details",
    title: "Mechanic"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm4MqyakMzOEXP_A4jvI-YCxtBGWZRnHibf5-OpLvMlNSWw-bP__ERFTPLaYo1sQwRvzGc9E--sRAt-MPdec8ab0utH4PSARAOgAl1s1hibHDiLBn01aPyukzlY6cZFOaS9ZkcC9EOx3LqaxF42cGzgjRMVvYs_Cl4_eZA9TJ21uJDBH8gWKAt0gN9rNn797QwtYszT-2pP36QzGMPfI4Wn16cwADpsyu5R4q9RmmbTa-LTO0XFw3RKKEcg3kWc3Xx-VwtHzSEA5VR",
    path : "details",
    title: "Tailor"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm4MqyakMzOEXP_A4jvI-YCxtBGWZRnHibf5-OpLvMlNSWw-bP__ERFTPLaYo1sQwRvzGc9E--sRAt-MPdec8ab0utH4PSARAOgAl1s1hibHDiLBn01aPyukzlY6cZFOaS9ZkcC9EOx3LqaxF42cGzgjRMVvYs_Cl4_eZA9TJ21uJDBH8gWKAt0gN9rNn797QwtYszT-2pP36QzGMPfI4Wn16cwADpsyu5R4q9RmmbTa-LTO0XFw3RKKEcg3kWc3Xx-VwtHzSEA5VR",
    path : "details",
    title: "Chef"
  }
];



export default function ServicesPage() {

  // searching 

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards = cardsData.filter((card) => {
  const matchSearch =
    card.title.toLowerCase().includes(searchTerm.toLowerCase());

  const matchCategory =
    selectedCategory === "All" || card.title === selectedCategory;

  return matchSearch && matchCategory;
});


  return (
    <>
            <section className='container mt-5 pt-5'>
            <div className='service-title mt-3 mt-md-none'>
              <h2 class="display-5 fw-bolder text-center pb-3">
                <span class="text-gradient">Explore Professions</span>
              </h2>
              <p className='text-center fw-medium fs-5 mb-4' style={{wordSpacing:"2px"}}>Find the right craftsperson for your needs.</p>
              <Link
                className="d-block text-center"
                to="/services/postservice"
                >
                  <button className="post-button rounded-5 border-0 py-2 px-4">
                    Post Service <i class="fa-solid fa-plus"></i>
                  </button>
              </Link>
            </div>
        <div className="service-content container position-relative">
            {/* <FaSearch className='search-icon'/> */}
              <Form.Control
              type="text"
              placeholder="Search for Professions like 'carpenter' or 'electrician'"
              className=" mr-sm-2 rounded-5 service-search mt-4 mt-md-none"
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
            />
          <nav className='service-filter row gap-5 pt-4 justify-content-center'>
           <Row className="justify-content-center g-3" style={{marginTop:"-10px"}}>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "All" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("All")}
    >
      All Professions
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "Carpenter" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Carpenter")}
    >
      Carpenter
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "Plumber" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Plumber")}
    >
      Plumber
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "Electrician" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Electrician")}
    >
      Electrician
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "Painter" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Painter")}
    >
      Painter
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "Landscaper" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Landscaper")}
    >
      Landscaper
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "Mechanic" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Mechanic")}
    >
      Mechanic
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton  ${selectedCategory === "Tailor" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Tailor")}
    >
      Tailor
    </button>
  </Col>

  <Col xs={6} md="auto">
    <button
      className={`main-botton ${selectedCategory === "Chef" ? "active-btn" : ""}`}
      onClick={() => setSelectedCategory("Chef")}
    >
      Chef
    </button>
  </Col>

</Row>

            </nav>
        </div>
        <div className="mt-5 mb-5">
            <Row className="g-4 justify-content-center ">
              {filteredCards.map((card,index)=> 
                <Col key={index}
                  xs={12} sm={6} md={4} lg={3} 
                  className="d-flex justify-content-center">
                  <CardsPage image={card.image} path={card.path} title={card.title}/>
                </Col>

              )}
            </Row>
          </div>
        </section>
        
    </>
  );
}
