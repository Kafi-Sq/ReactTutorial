import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupID) => {},
    itemIsFavorite: (meetupID) => {}
})

export function FavoritesContextProvider(props) {
    const [userFavs, setUserFavs] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavs((prev) => {
            return prev.concat(favoriteMeetup)
        })
    }
    function removeFavoriteHandler(meetupID) {
        setUserFavs((prev) => {
            return prev.filter(meetup => meetup.id !== meetupID)
        })
    }
    function itemIsFavoriteHandler(meetupID) {
        return userFavs.some(meetup => meetup.id === meetupID)
    }

    const context = {
        favorites: userFavs,
        totalFavorites: userFavs.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext