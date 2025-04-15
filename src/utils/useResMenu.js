import { useEffect, useState } from "react"
import { Restaurant_Menu_Prefix } from "../utils/constants";

const useResMenu = (id) => {
    const [ resMenu, setresMenu ] = useState(null);
    
    useEffect( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menu = await fetch(Restaurant_Menu_Prefix + id);
        const jsonMenu = await menu.json();
        setresMenu(jsonMenu);
    };

    return resMenu;
}

export default useResMenu;