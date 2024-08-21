import { Link } from "react-router-dom";
import todocard from "./assets/todocard.jpg";
import calculatorcard from "./assets/calculatorcard.jpg";
import notepad from "./assets/notepad.webp";

export default function Home() {
  return (
    <div className="home">
      <div className="hometop">
        <h1>Mini Tool Kit</h1>
      </div>
      <div className="border">welcome</div>

      <div className="body">
        <div className="cardboxtitle">
          <h2>Task Name</h2>
        </div>

        <div className="cards">
          <div className="card">
            <h3 className="cardtitle">ToDo List</h3>

            <div className="cardimg">
              <img className="cardimg" src={todocard} alt="ToDos Image"></img>
            </div>

            <div className="cardsubtitle">
              I'm your To-Do List, your trusty companion in staying organized! I
              keep all your tasks in one place.{" "}
            </div>

            <div className="cardbutton">
              <Link to="/todolist">
                <button>Click Me</button>
              </Link>
            </div>
          </div>

          <div className="card">
            <h3 className="cardtitle">Calculator</h3>

            <div className="cardimg">
              <img
                className="cardimg"
                src={calculatorcard}
                alt="Calculator"
              ></img>
            </div>

            <div className="cardsubtitle">
              Always ready to crunch the numbers for you!Just give me the
              numbers, and I'll handle the rest with precision and speed!
            </div>

            <div className="cardbutton">
              <Link to="/calculator">
                <button>Click Me</button>
              </Link>
            </div>
          </div>

          <div className="card">
            <h3 className="cardtitle">Notepad</h3>

            <div className="cardimg">
              <img className="cardimg" src={notepad} alt="Notepad"></img>
            </div>

            <div className="cardsubtitle">
              "Hey there! I'm your Notepad, ready to capture your thoughts.
              Type, format, and I'll save everything—no worries, I've got it!"
            </div>

            <div className="cardbutton">
              <Link to="/notepad">
                <button>Click Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
