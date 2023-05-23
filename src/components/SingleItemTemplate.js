import SItemcl from './SingleItemTemplate.module.css'
import { Link } from 'react-router-dom';

function SingleItem(props) {
    return (
      <div>
        <div className={SItemcl.StdListItemContainer}>
            <div className={SItemcl.StdListItem}>
                <p className={SItemcl.Title}>{props.Title}</p>
                <p className={SItemcl.Description}>{props.Description}</p>
                <img src={props.ItemImage}  alt=''/>
                <p className={SItemcl.Source}>Source link:</p>
                <Link className={SItemcl.Lk} to={props.WbSite} target='_blank'>Read more</Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default SingleItem;