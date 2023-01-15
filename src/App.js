import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';

import AllMeetupsPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllMeetupsPage />} />
                <Route path="/new-meetup" element={<NewMeetupsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
