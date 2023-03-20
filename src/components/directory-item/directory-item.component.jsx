import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({category}) => {
    const {title, imageUrl, route} = category;

    const navigate = useNavigate();

    const navigateToCategoryHandler = () => {
        navigate(route);
    }
    return(
        <div className="directory-item-container" onClick={navigateToCategoryHandler}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="directory-body-container">
                <h2>{title}</h2>
                <span>Shop Now</span>
            </div>
        </div>
    )
}

export default DirectoryItem;