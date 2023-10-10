import Container from "./components/SimpleContainer";
import TodosPage from "./pages/TodosPage/TodosPage";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Navbar />
      <TodosPage />
    </Container>
  );
};

export default App;
