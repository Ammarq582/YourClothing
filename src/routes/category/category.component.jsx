
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selectors';
import './category.styles.scss'
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap);    
    const {category} = useParams();
    const products = categoriesMap[category];

    return(
        <div className="category-container">
            <h2>{category.toUpperCase()}</h2>
            {
                categoriesIsLoading
                ?
                <Spinner/>
                :
                <div className="products">
                    {
                    products && products.map(product => <ProductCard product={product}/>)
                    }
                </div>
            }
        </div>
    )
}

export default Category;