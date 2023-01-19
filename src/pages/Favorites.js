import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/layout/meetups/MeetupList";

function FavoritesPage(){
    const FavoitesCtx = useContext(FavoritesContext)

    let content;

    if(FavoitesCtx.totalFavorites === 0){
        content = <p>No favorites yet...</p>
    }else {
        content = <MeetupList meetups={FavoitesCtx.favorites}/>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;