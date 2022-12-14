import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromFirestore } from "../utility/firestoreFetch";
import styles from "./ItemListContainer.module.css"

const ItemListContainer = () =>{
    const [info, setInfo] = useState([]);
    
    const { id } = useParams()

    useEffect(() =>{
        fetchFromFirestore(id)
            .then(res => setInfo(res))
            .catch(err => console.log(err));
    }, [id]);

    useEffect(() =>{
        return(()=>{
            setInfo([]);
        })
    },[id]);

    return(
        <main className={styles.main}>
             <ItemList data={info}/>
        </main>
    )
};

export default ItemListContainer;