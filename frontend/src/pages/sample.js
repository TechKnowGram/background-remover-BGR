import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SampleContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.h6`
  font-size: 1.2rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 400;
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out 1s both;
`;

const CategoryTab = styled.button`
  background: ${props => props.active ? '#3498db' : 'transparent'};
  color: ${props => props.active ? 'white' : '#34495e'};
  border: 2px solid #3498db;
  padding: 0.7rem 1.5rem;
  margin: 0.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #3498db;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out 1.5s both;
`;

const ImageItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  ${props => props.full && `
    grid-column: span 2;
    grid-row: span 2;
  `}
`;

const BeforeAfterContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 400px;
`;

const BeforeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const AfterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inset(0 50% 0 0);
  transition: clip-path 0.3s ease;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: white;
  cursor: ew-resize;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

function Sample() {
  const categories = ['all', 'human', 'product', 'realestate', 'car', 'graphic', 'animals'];
  const [activeCategory, setActiveCategory] = useState('all');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch images
    const fetchImages = async () => {
      // Replace this with actual API call
      const fetchedImages = [
        { category: 'product', id: '001' },
        { category: 'car', id: '001' },
        { category: 'product', id: '003' },
        { category: 'graphic', id: '001' },
        { category: 'realestate', id: '001' },
        { category: 'human', id: '003' },
        { category: 'human', id: '001' },
        { category: 'car', id: '002' },
        { category: 'realestate', id: '004' },
        { category: 'car', id: '005' },
        { category: 'car', id: '003' },
        { category: 'animal', id: '001' },
        { category: 'animal', id: '002' },
        { category: 'human', id: '005' },
        { category: 'animal', id: '005' },
        { category: 'realestate', id: '003' },
        { category: 'product', id: '002' },
        { category: 'graphic', id: '004' },
        { category: 'human', id: '004' },
        { category: 'animal', id: '004' },
        { category: 'graphic', id: '003' },
        { category: 'product', id: '004' },
        { category: 'graphic', id: '002' },
        { category: 'human', id: '002' },
        { category: 'graphic', id: '005' },
        { category: 'animal', id: '003' },
        { category: 'product', id: '005' },
        { category: 'realestate', id: '002' },
        { category: 'car', id: '004' },
        { category: 'realestate', id: '005' },
      ];
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(newPosition);
  };

  return (
    <SampleContainer>
      <Title>Stunning Sample Results</Title>
      <Subtitle>Experience the magic of BGR across diverse image categories</Subtitle>
      
      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab 
            key={category}
            active={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryTab>
        ))}
      </CategoryTabs>

      <ImageGrid>
        {images
          .filter(img => activeCategory === 'all' || img.category === activeCategory)
          .map(img => (
            <ImageItem 
              key={`${img.category}-${img.id}`}
              full={img.category === 'product' && img.id === '003'}
            >
              <BeforeAfterContainer onMouseMove={handleSliderMove}>
                <BeforeImage src={`/static/images/sample/jpg/${img.category}-${img.id}.jpg`} alt="Original" />
                <AfterImage 
                  src={`/static/images/sample/png/${img.category}-${img.id}.jpg`} 
                  alt="Removed Background" 
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                />
                <Slider style={{ left: `${sliderPosition}%` }} />
              </BeforeAfterContainer>
            </ImageItem>
          ))}
      </ImageGrid>
    </SampleContainer>
  );
}

export default Sample;