import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <Greeting />

      <UserCard 
        name='Ксения Жужлева'
        role='простой смертный'
        avatarUrl={'../public/avatar.jpg'}
        isOnline={true}
      />
      <TaskList />
    </div>
  );
}

export default App;
