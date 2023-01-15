import { useState, useEffect } from 'react'

import MeetupList from "../components/layout/meetups/MeetupList";


function AllMeetupsPage() {
    const [isLoading, setLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://react-tutorial-d123b-default-rtdb.firebaseio.com/meetups.json'
        ).then(res => {
            return res.json();
        }).then(data => {
            const meetups = []

            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup)
            }
            
            setLoading(false)
            setLoadedMeetups(meetups)
        })
    }, [])

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups page</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage;