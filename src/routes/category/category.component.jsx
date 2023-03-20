
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/categories.selectors';
import './category.styles.scss'

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);    
    const {category} = useParams();
    const products = categoriesMap[category];

    return(
        <div className="category-container">
            <h2>{category.toUpperCase()}</h2>
            <div className="products">
                {
                   products && products.map(product => <ProductCard product={product}/>)
                }
            </div>
            
        </div>
    )
}

export default Category;