import { useNavigate } from 'react-router-dom'

import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const navigate = useNavigate()
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-tutorial-d123b-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true})
        })
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm OnAddMeetup={addMeetupHandler} />
    </section>
}
export default NewMeetupsPage;