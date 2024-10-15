import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowDownWideShort, faArrowUpWideShort, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ComboCheckboxPlain.module.css';

const ComboCheckboxPlain = ({id, open, setOpen, title, options, selectedItems, setSelectedItems, handleItemClick}: any) => {
  const [isOpen, setIsOpen] = useState(true);
  
 
  const toggleOpen = () => {   
    setIsOpen(!isOpen); 
  };

  const toggleOpened = () => {
    open!==id ? setOpen(id) : setOpen(null);
  }
 
  return (
    <>
        <div className={styles.selectBtn} onClick={toggleOpened}> 
            <p>{title}</p>
        </div>
        <ul className={open===id ? styles.listItemsOpen : styles.listItems}>
            {options.map((op: string, i: number) => 
                <li key={i} onClick={() => handleItemClick(op)} className={selectedItems && selectedItems.length>0 && selectedItems.includes(op) ? `${styles.item} ${styles.selected}` : styles.item}>
                    <span className={styles.itemText}>{op}</span>
                </li>
            )}
        </ul>
    </>
 );
};

export default ComboCheckboxPlain;
