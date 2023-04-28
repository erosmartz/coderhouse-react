import { useState, useEffect } from "react";
import "./App.css";

/* FIREBASE */
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs , where} from "firebase/firestore";

const App = () => {
  const [games, setGames] = useState([])

  const q = query(collection(db, "games"))

  useEffect(() => {
    const getGames = async() => {
      const querySnapshot = await getDocs(q);
      const docs = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        /* console.log(doc.id, " => ", doc.data()); */
        docs.push({...doc.data(), id: doc.id})
      });

      setPlayers(docs)
    }
    getGames()
  }, [])

  return (
    <div className="App">
      <h1>Firebase</h1>
    </div> 
  )
}

export default App;
