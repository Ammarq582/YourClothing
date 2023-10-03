import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selectors";
import Spinner from "../../components/spinner/spinner.component";



const CategoriesContainer = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
    return(
        <div className="categories-container">
            {
                categoriesIsLoading
                ?
                <div> <Spinner/></div>
                :
                Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview products={products} title={title}/>
                })
            }
        </div>
    )
}

export default CategoriesContainer;