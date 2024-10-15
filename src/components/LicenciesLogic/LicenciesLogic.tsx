import styles from './LicenciesLogic.module.css'
import PositionRelative from '@/components/PositionRelativeLayout/PositionRelativeLayout'
import ExportedImage from "next-image-export-optimizer";
import { Nunito } from "next/font/google";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectLanguages } from '@/services/LanguagesReducer';
import { azlicencies, enlicencies, licencies } from '../../../lib/data';

const nunito = Nunito({subsets: ["latin"]});   

const LicenciesLogic = ({languages}: any) => { 

  const [article, setArticle] = useState<any>([]);

  const params = useParams(); 
  
  const language = useSelector(selectLanguages).language;

  const translate = () => {
	if (params?.language === 'RU') return licencies;
	if (params?.language === 'EN') return enlicencies;
	if (params?.language === 'AZ') return azlicencies;
 }

  useEffect(() => {
    // if (params && params.language && params.language === 'RU'){
      setArticle(translate());
    // } else if (params && params.language && params.language === 'AZ'){
    //   setArticle(languages.az);
    // } if (params && params.language && params.language === 'EN'){
    //   setArticle(languages.en);
    // }
    console.log(languages)
  }, [article, language, params])

	const showContentParts = (part: any, type: string, num: number) => {
		if (type === 'img' && part.img){
		  console.log('babe')
		  return <ExportedImage loading="eager"  className={`${styles.img}`} src={part.img} alt={part.img} width={200} height={200} />
		}
		if (type === 'heading' && part.heading){
		  return num ===0 ? <h1 className={styles.heading}>{part.heading}</h1> : <h2 className={styles.heading}>{part.heading}</h2>
		}
		if (type === 'article' && part.article){
		  return <p className={styles.p}>{part.article}</p>
		}
		if (type === 'card' && part.img){
		    return (<li className={`${styles.card} ${styles[`card_${num}`]}`}>
						<div className={styles.card__content}>
							<figure>
								<ExportedImage loading="eager"  width={300} height={300} src={part.img} alt={part.img} />
							</figure>
							<div>
								<h2 className={styles.licenceTitle}>{part.heading}</h2>
								<p className={styles.pcard}>{part.article}</p>
							</div>

						</div>
					</li>) 
		  }
	  }

	const drawCards = (cards: any) => {
		return cards.map((c: any, n: number) => showContentParts(c, 'card', n))
	}

	const drawArticle = () => {
		return article.map((l: any, i: number) => {
			return !l.cards ? 
			<div key={i} className={styles.mainContainer}>
				{showContentParts(l, 'heading', i)}
				{showContentParts(l, 'article', i)}
		  	</div> :
			<div className={styles.cardsContainer}>
				<main className={styles.container}>
					<ul className={styles.cards}>
						{drawCards(l.cards)}
					</ul>
				</main>
			</div>
		})
	}
    
    return ( 
    <PositionRelative> 
		{article && article.length>0 && drawArticle()}
    </PositionRelative>
    )
}

export default LicenciesLogic

