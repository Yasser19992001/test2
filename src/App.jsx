import Navbar from "./components/Navbar";
import Card from "./components/Card";
import User from "./components/User";
import Button from "./components/Button";
import "./components/components.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Card title="React Card">
          <p>This is a reusable card component.</p>
          <Button text="Click Me" />
        </Card>

        <Card title="User Profile">
          <User
            name="John Doe"
            email="john@example.com"
            avatar="https://i.pravatar.cc/150"
          />
        </Card>
      </div>
    </>
  );
}

export default App;
