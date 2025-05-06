import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Image_URL_PREFIX } from "../utils/constants";

const Cart = () => {

    const cartItems = useSelector((store) => (store.cart.items))

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="w-6/12 mx-auto my-5 p-1">
            <h1 className="text-3xl font-bold my-5 text-center">Your Cart</h1>
            <div className="flex justify-center gap-x-8 my-8">
                <button className=" bg-green-600 text-white px-2.5 py-2 rounded-2xl cursor-pointer">Place Order</button>
                <button className=" bg-red-600 text-white px-2.5 py-2 rounded-2xl cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {cartItems.map((item) => (
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
                        <div className="relative">
                            <img
                                src={Image_URL_PREFIX + item?.card?.info?.imageId}
                                alt="dishImg"
                                className="rounded-2xl my-4"
                            />
                            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-2 rounded-2xl cursor-pointer">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;