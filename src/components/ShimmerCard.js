import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -800px 0;
  }
  100% {
    background-position: 800px 0;
  }
`;

const ImgShimmer = styled.div`
  background: linear-gradient(
    to right,
    #f6f6f6 0%,
    #e0e0e0 20%,
    #f6f6f6 40%,
    #f6f6f6 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 3s infinite linear;
  position: relative;
  overflow: hidden;
`;

const TextShimmer1 = styled.div`
  width: 330px;
  background: linear-gradient(
    to right,
    #f6f6f6 0%,
    #e0e0e0 20%,
    #f6f6f6 40%,
    #f6f6f6 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 3s infinite linear;
  position: relative;
  overflow: hidden;
`;

const TextShimmer2 = styled.div`
  width: 200px;
  background: linear-gradient(
    to right,
    #f6f6f6 0%,
    #e0e0e0 20%,
    #f6f6f6 40%,
    #f6f6f6 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 3s infinite linear;
  position: relative;
  overflow: hidden;
`;

const ShimmerCard = () => {
  return (
    <div className="w-96 p-2.5 m-3.5 rounded-2xl">
      <ImgShimmer className="h-64 rounded-2xl" />
      <div>
        <TextShimmer1 className="h-4 m-2 rounded-xl" />
        <TextShimmer2 className="h-4 m-2 rounded-xl" />
      </div>
    </div>
  );
};

export default ShimmerCard;
