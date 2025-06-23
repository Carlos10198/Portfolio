import styled from "styled-components";

export const MyProjetos = styled.div`
  min-height: 100vh; 
  background: ${({ theme }) => theme.backgroundGradientBottomToTop};
  padding: 70px 20px; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;     
  text-align: center;
  color: ${({ theme }) => theme.text};

  h1 {
    font-size: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 40px;
  }

  .projects {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    justify-content: center;
    overflow-x: auto;
    max-width: 90vw;    
    margin: 0 auto;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .image-container {
    position: relative;
    overflow: hidden;
    height: 300px;
    width: 300px;
    border-radius: 8px;
    flex-shrink: 0;
    cursor: pointer;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: filter 0.3s ease;
  }

  .image-container:hover .project-image {
    filter: blur(1.5px);
  }

  .hover-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  .image-container:hover .hover-button {
    opacity: 1;
  }

  .carousel-control-prev,
  .carousel-control-next {
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    color: white;
    z-index: 10;
  }

  .carousel-control-prev {
    left: 10px;
  }

  .carousel-control-next {
    right: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }

    .image-container {
      height: 200px;
      width: 200px;
    }
  }

  @media (max-width: 425px) {
    .image-container {
      height: 150px;
      width: 150px;
    }

    .carousel-control-prev,
    .carousel-control-next {
      width: 30px;
      height: 30px;
    }
  }
`;
