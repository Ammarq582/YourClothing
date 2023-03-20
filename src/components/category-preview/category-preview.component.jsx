import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss'

const CategoryPreview = ({products, title}) => {

    const navigate = useNavigate()

    const navigateToCategoryHandler = () => {
        navigate(title)
    }
    
    return(
        <div className="category-preview-container">
            <h2>
                <span className="title" onClick={navigateToCategoryHandler}>
                    {title.toUpperCase()}
                </span>
            </h2>
            <div className="preview">
                {
                    products.filter((_, idx) => idx < 4)
                    .map(product => {
                        return <ProductCard product={product} key={product.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPreview;