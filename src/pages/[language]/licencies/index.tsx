import { Nunito } from "next/font/google";
import { azlicencies, enlicencies, licencies } from '../../../../lib/data';
import { Provider, useSelector } from "react-redux";
import { store } from "@/services/store";
import LicenciesLogic from '@/components/LicenciesLogic/LicenciesLogic';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { selectLanguages } from "@/services/LanguagesReducer";
 
const nunito = Nunito({subsets: ["latin"]});  

const Licencies = () => { 

  //   const [languages, setLanguages] = useState({}); 

  //   const params = useParams();

  //   const translate = () => {
  //      if (params?.language === 'RU') return licencies;
  //      if (params?.language === 'EN') return enlicencies;
  //      if (params?.language === 'AZ') return azlicencies;
  //   }
    

  // useEffect(() => { 
  //   setLanguages(translate);
  //   console.log(languages)
  // }, [params]);
    
    return ( 
    <Provider store={store}>
        {/* <PositionRelative> 
	    	{drawArticle()}
        </PositionRelative> */}
        <LicenciesLogic />
    </Provider>
    )
} 

export default Licencies
