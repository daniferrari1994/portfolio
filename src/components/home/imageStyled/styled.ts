import { Box } from "@chakra-ui/layout";
import { styled } from "styled-components";

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 100%;
  margin-left: 40px;

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
  }

  .imageProfile {
    position: relative;
    z-index: 2;
    border-radius: 100%;
    object-fit: cover;
    padding: 5px;
  }
`;