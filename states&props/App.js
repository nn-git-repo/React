
import './App.css';
import CourseApp from './components/E-LearningPlatform';
import FitnessApp from './components/FitnessTrackerDashboard';
import FoodOrderApp from './components/FoodOrder';
import HotelBookingApp from './components/HotelRoomReservation';
import MovieBookingApp from './components/MovieTicketBooking';

function App() {
  return (
    <div className="App">
      <FoodOrderApp />
      <CourseApp  />
      <MovieBookingApp />
      <FitnessApp />
      <HotelBookingApp />
    </div>
  );
}

export default App;

