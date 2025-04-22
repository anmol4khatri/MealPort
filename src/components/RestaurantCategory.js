import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({data}) => {

    const [showItem, setshowItem] = useState(false);
    const handleClick = () => {
        setshowItem(!showItem)
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-2 p-4 cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between"> 
                    <span className="font-extrabold text-xl">{data.title} ({data.itemCards.length} Items)</span>
                    <span className="text-2xl">🔽</span>
                </div>
                {showItem && <ItemCards data={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;