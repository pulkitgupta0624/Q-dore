import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import wooden1 from "../../assets/wooden/wooden11.png";
import wooden2 from "../../assets/wooden/wooden22.png";
import wooden3 from "../../assets/wooden/wooden33.png";
import wooden4 from "../../assets/wooden/wooden44.png";
import wooden5 from "../../assets/wooden/wooden55.png";
import wooden6 from "../../assets/wooden/wooden66.png";
import mercury1 from "../../assets/wooden/wooden1.jpg";
import mercury2 from "../../assets/wooden/wooden2.jpg";
import mercury3 from "../../assets/wooden/wooden3.jpg";
import mercury4 from "../../assets/wooden/wooden4.jpg";
import mercury5 from "../../assets/wooden/wooden5.jpg";
import mercury6 from "../../assets/wooden/wooden6.jpg";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const row1 = [wooden1, wooden2, wooden3, wooden4, wooden5, wooden6];
  const row2 = [mercury1, mercury2, mercury3, mercury4, mercury5, mercury6];

  const marqueeRef1 = useRef(null); // Reference for Wooden Collection
  const marqueeRef2 = useRef(null); // Reference for Mercury Collection
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered1, setIsHovered1] = useState(false); // Track hover state for the first marquee
  const [isHovered2, setIsHovered2] = useState(false); // Track hover state for the second marquee

  const navigate = useNavigate(); // Hook for navigation

  const handleMouseDown = (e, ref) => {
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    ref.current.addEventListener("mousemove", handleMouseMove);
    ref.current.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const x = e.pageX - marqueeRef1.current.offsetLeft; // Adjust for Wooden Collection
    const walk = (x - startX) * 2;
    marqueeRef1.current.scrollLeft = scrollLeft - walk;
    marqueeRef2.current.scrollLeft = scrollLeft - walk; // Adjust for Mercury Collection
  };

  const handleMouseUp = () => {
    marqueeRef1.current.removeEventListener("mousemove", handleMouseMove);
    marqueeRef1.current.removeEventListener("mouseup", handleMouseUp);
    marqueeRef2.current.removeEventListener("mousemove", handleMouseMove);
    marqueeRef2.current.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e, ref) => {
    setStartX(e.touches[0].clientX);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 2;
    marqueeRef1.current.scrollLeft = scrollLeft - walk;
    marqueeRef2.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (path) => {
    navigate(path); // Navigate to the desired route
  };

  const handleMouseEnter = (marqueeRef, setIsHovered) => {
    setIsHovered(true);
    marqueeRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = (marqueeRef, setIsHovered) => {
    setIsHovered(false);
    marqueeRef.current.style.animationPlayState = "running";
  };

  return (
    <AppContainer>
      <Wrapper>
        {/* Wooden Collection Slider */}
        <Section>
          <Heading>Wooden Collection</Heading>
          <Marquee
            ref={marqueeRef1}
            onMouseDown={(e) => handleMouseDown(e, marqueeRef1)}
            onTouchStart={(e) => handleTouchStart(e, marqueeRef1)}
            onTouchMove={handleTouchMove}
            onMouseEnter={() => handleMouseEnter(marqueeRef1, setIsHovered1)}
            onMouseLeave={() => handleMouseLeave(marqueeRef1, setIsHovered1)}
          >
            <MarqueeGroup className={isHovered1 ? "paused" : ""}>
              {row1.map((el, index) => (
                <ImageGroup key={index}>
                  <Image
                    src={el}
                    onClick={() => handleClick("/woodenCollection")} // Navigate on click
                  />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup className={isHovered1 ? "paused" : ""}>
              {row1.map((el, index) => (
                <ImageGroup key={index}>
                  <Image
                    src={el}
                    onClick={() => handleClick("/woodenCollection")} // Navigate on click
                  />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Section>

        {/* Mercury Collection Slider */}
        <Section>
          <Heading>Mercury Collection</Heading>
          <Marquee
            ref={marqueeRef2}
            onMouseDown={(e) => handleMouseDown(e, marqueeRef2)}
            onTouchStart={(e) => handleTouchStart(e, marqueeRef2)}
            onTouchMove={handleTouchMove}
            onMouseEnter={() => handleMouseEnter(marqueeRef2, setIsHovered2)}
            onMouseLeave={() => handleMouseLeave(marqueeRef2, setIsHovered2)}
          >
            <MarqueeGroup2 className={isHovered2 ? "paused" : ""}>
              {row2.map((el, index) => (
                <ImageGroup key={index}>
                  <Image
                    src={el}
                    onClick={() => handleClick("/mercuryCollection")} // Navigate on click
                  />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2 className={isHovered2 ? "paused" : ""}>
              {row2.map((el, index) => (
                <ImageGroup key={index}>
                  <Image
                    src={el}
                    onClick={() => handleClick("/mercuryCollection")} // Navigate on click
                  />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Section>
      </Wrapper>
    </AppContainer>
  );
};

export default Slider;

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ensure only part of the slider is visible */
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  width: 100%;
  
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  color: #222;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 27px 0;
  grid-gap: 20px;
  align-items: center;
  margin: 80px 0 20px;

  &:after,
  &:before {
    content: " ";
    display: block;
    border-bottom: 1px solid rgb(218,165,32);
    border-top: 1px solid rgb(218,165,32);
    height: 5px;
    background-color: #f8f8f8;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden; /* Ensure only part of the images are visible */
  user-select: none;
  position: relative;
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%); /* Adjusted to show partial images */
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the images */
  white-space: nowrap;
  width: auto; /* Auto width to fit the content */
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -15s;
`;

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(25rem, 20vw, 40rem); /* Adjusted size for larger images */
  margin: 0 2rem; /* Space between images */
  transition: transform 0.3s ease, z-index 0.3s ease; /* Smooth transitions for hover effect */

  &:hover {
    transform: scale(1.1); /* Scale up the image */
    z-index: 10; /* Bring the hovered image to the front */
  }

  @media (max-width: 768px) {
    width: clamp(15rem, 25vw, 35rem); /* Adjusted for smaller screens */
    
  }

  @media (max-width: 480px) {
    width: clamp(10rem, 30vw, 30rem);
    margin: 0 1rem; /* Adjusted for extra-small screens */
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;

`;