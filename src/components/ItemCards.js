import { Image_URL_PREFIX } from "../utils/constants"

const ItemCards = ({ data }) => {
    return (
        data.map((item) => (
            <div key={item?.card?.info?.id} className="flex justify-between border-b-2">
                <div className="w-9/12 m-1 flex flex-col my-4">
                    <span>{item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                        ? <img src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
                            className="w-4"></img>
                        : <img src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png"
                            className="w-4"></img>
                    }</span>
                    <span className="text-xl font-bold">{item?.card?.info?.name}</span>
                    <span className="font-lg font-bold">₹ {(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) / 100}</span>
                    <span className="my-3">{item?.card?.info?.description}</span>
                </div>
                <div className="w-3/12 flex items-center">
                    <img src={Image_URL_PREFIX + item?.card?.info?.imageId} alt="dishImg"
                        className="rounded-2xl my-4" />
                </div>
            </div>
        ))
    );
};

export default ItemCards;