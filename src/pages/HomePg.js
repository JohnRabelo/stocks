import homecl from './HomePg.module.css'
import hbgIcon from '../Assets/hbg.JPG'
import Stck1 from '../Assets/stck1.png'
import Ecn1 from '../Assets/ecn1.jpg'
import Ecn2 from '../Assets/ecn2.jpg'
import Ecn3 from '../Assets/ecn3.jpg'
import Ecn4 from '../Assets/ecn4.jpg'
import Ecn5 from '../Assets/ecn5.jpg'
import { useState,useEffect } from 'react';
import ItemOrganizer from '../components/ItemOrganizerTemplate';


const LIST_DATA = [
  {
    Title: 'Debt Limit Negotiators Debate Spending Caps to Break Standoff',
    Description: 'The strategy, which was used in 2011, could allow both sides to save face but would most likely do little to chip away at the national debt.',
    ItemImage: Ecn1,
    WbSite: 'https://www.nytimes.com/2023/05/22/us/politics/debt-limit-spending-caps.html',
  },
  {
    Title: 'Silicon Valley, Cradle of Computer Chips, Gains Big New Research Center',
    Description: 'Anticipating federal subsidies, Applied Materials said it planned to invest up to $4 billion in the semiconductor project in Sunnyvale, Calif.',
    ItemImage: Ecn2,
    WbSite: 'https://www.nytimes.com/2023/05/22/technology/applied-materials-silicon-valley.html',
  },  {
    Title: 'The U.S. Needs Minerals for Electric Cars. Everyone Else Wants Them Too.',
    Description: 'The United States is entering an array of agreements to secure the critical minerals necessary for the energy transition, but it’s not clear which of the arrangements can succeed.',
    ItemImage: Ecn3,
    WbSite: 'https://www.nytimes.com/2023/05/21/business/economy/minerals-electric-cars-batteries.html',
  },
  {
    Title: 'Why Is Inflation So Stubborn? Cars Are Part of the Answer.',
    Description: 'Prices of new and used vehicles were supposed to recede quickly as supply chain problems dissipated. The market had other ideas.',
    ItemImage: Ecn4,
    WbSite: 'https://www.nytimes.com/2023/05/20/business/economy/car-prices-inflation.html'

  },
  {
    Title: 'America’s Semiconductor Boom Faces a Challenge: Not Enough Workers',
    Description: 'Strengthened by billions of federal dollars, semiconductor companies plan to create thousands of jobs. But officials say there might not be enough people to fill them',
    ItemImage: Ecn5,
    WbSite: 'https://www.nytimes.com/2023/05/19/us/politics/semiconductor-worker-shortage.html',
  }
];


function Home() {




  return (  
    <div>
      <div className={homecl.BannerOrganizer}>
        <div className={homecl.BannerContainer}>
          <span className={homecl.BannerDisplay}>
            <div>
              <img src={Stck1} alt=''/>
            </div>
          </span>
        </div>
      </div>
      <div className={homecl.statement}>Economy / News </div>
      <div className={homecl.listLayout}> 
        <ItemOrganizer List = {LIST_DATA}  />
      </div>
    </div>
  );
  }
  
  export default Home;