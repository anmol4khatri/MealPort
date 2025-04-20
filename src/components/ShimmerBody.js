import ShimmerCard from "./ShimmerCard";

const ShimmerBody = () => {
    return(
        <div className="shimmer-container flex justify-center flex-wrap">
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
        </div>
    );
}

export default ShimmerBody;