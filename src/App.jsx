import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';
import avatarUrl from './assets/avatar.jpg'

function App() {
  return (
    <div className="App">
      <Greeting />

      <UserCard 
        name='Ксения Жужлева'
        role='простой смертный'
        avatarUrl={avatarUrl}
        isOnline={true}
      />
      <TaskList />
    </div>
  );
}

export default App;
