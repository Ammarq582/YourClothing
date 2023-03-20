import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getCategoriesandDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesandDocuments();
            const newCategoriesMap = categories.reduce((obj, current) => {
                const {title, items} = current;
                obj[title.toLowerCase()] = items;
                return obj;
            }, {})
            setCategoriesMap(newCategoriesMap)
        }
        getCategories();
    }, [])

    const value = {categoriesMap};

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
    
}

