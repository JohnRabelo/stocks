import ItemOrgcl from './ItemOrganizerTemplate.module.css'
import SingleItem from './SingleItemTemplate';

function ItemOrganizer(props) {
    return ( 
    <div>
        <div className={ItemOrgcl.StdListContainer}>
            {props.List.map((ItemUnit) => {
                return <SingleItem Title={ItemUnit.Title} Address={ItemUnit.Address} Description={ItemUnit.Description} ItemImage={ItemUnit.ItemImage} GMaps={ItemUnit.GMaps} WbSite={ItemUnit.WbSite} />
            })}
        </div>
      </div>
    );
  }
  
  export default ItemOrganizer;
  