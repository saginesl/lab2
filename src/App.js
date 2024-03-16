import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Container from './Components/Container';
import Navigation from './Components/Navigation';
import Header from './Header';
import Menu from './Components/Menu';

function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Navigation />
      <Container>
        <Button text="Зарегистрироваться" />
      </Container>
    </div>
  );
}

export default App;