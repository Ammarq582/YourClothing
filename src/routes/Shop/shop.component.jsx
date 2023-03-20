import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesAsync } from "../../store/categories/categories.actions";
import CategoriesContainer from "../categories-container/categories-container.component";
import Category from "../category/category.component";

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    })

    return(
        <Routes>
            <Route index element={<CategoriesContainer/>}/>
            <Route path=":category" element={<Category/> }/>
        </Routes>
    )
}

export default Shop;