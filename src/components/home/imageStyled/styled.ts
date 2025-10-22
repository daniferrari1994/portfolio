import { Box } from "@chakra-ui/react";
import { styled } from "styled-components";

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 100%;
  margin-left: 40px;

  /* Tablets en orientación vertical específicos */
  @media (max-width: 920px) and (min-width: 769px) {
    margin-left: 0;
    margin-top: 25px;
    width: auto;
    height: auto;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    margin-left: 0;
    margin-top: 15px;
    width: auto;
    height: auto;
    max-width: 250px;
    max-height: 250px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }

  /* Surface Duo específico */
  @media (max-width: 540px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }

  /* iPhone SE específico */
  @media (max-width: 375px) {
    margin-top: 8px;
  }

  /* Samsung Galaxy S8 específico */
  @media (max-width: 360px) {
    margin-top: 5px;
  }

  @keyframes rotateBorder {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    display: block;
    background: conic-gradient(
      from 90deg,
      #2c645a,
      #5ad3bd 46%,
      transparent 46%
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      #fff calc(100% - 3px + 1px)
    );
    animation: rotateBorder 80s linear infinite;
    aspect-ratio: 1;

    /* Tablets en orientación vertical específicos */
    @media (max-width: 920px) and (min-width: 769px) {
      aspect-ratio: 1;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }

    /* Surface Duo específico */
    @media (max-width: 540px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 2.5px),
        #fff calc(100% - 2.5px + 1px)
      );
    }

    @media (max-width: 480px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 2px),
        #fff calc(100% - 2px + 1px)
      );
    }

    /* iPhone SE y Galaxy S8 específicos */
    @media (max-width: 375px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 1.5px),
        #fff calc(100% - 1.5px + 1px)
      );
      animation: rotateBorder 60s linear infinite;
    }

    @media (max-width: 360px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 1px),
        #fff calc(100% - 1px + 1px)
      );
      animation: rotateBorder 60s linear infinite;
    }
  }

  .imageProfile {
    position: relative;
    z-index: 2;
    border-radius: 100%;
    object-fit: cover;
    padding: 5px;
    aspect-ratio: 1;

    /* Tablets en orientación vertical específicos */
    @media (max-width: 920px) and (min-width: 769px) {
      border-radius: 50%;
      aspect-ratio: 1;
      object-fit: cover;
      width: 280px !important;
      height: 280px !important;
      max-width: 280px;
      max-height: 280px;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      border-radius: 50%;
      aspect-ratio: 1;
      object-fit: cover;
      width: 250px !important;
      height: 250px !important;
      max-width: 250px;
      max-height: 250px;
    }

    /* Surface Duo específico */
    @media (max-width: 540px) {
      padding: 4px;
    }

    @media (max-width: 480px) {
      padding: 3px;
    }

    /* iPhone SE específico */
    @media (max-width: 375px) {
      padding: 2px;
    }

    /* Samsung Galaxy S8 específico */
    @media (max-width: 360px) {
      padding: 2px;
    }
  }
`;