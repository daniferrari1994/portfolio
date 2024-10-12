import { Box } from "@chakra-ui/layout";
import { styled } from "styled-components";

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  height: 100%;
  position: relative;
  width: fit-content;
  
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
  border-radius: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: rotateBorder 80s linear infinite;
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
}

  .imageProfile {
    object-fit: cover;
    border-radius: 100%;
    position: relative;
    padding: 5px;
    z-index: 2;
  }
`;