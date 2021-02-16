import "./App.css";
import Cards from "./Cards";
import MyTransactions from "./MyTransactions";
import travelAd from "./travelAd.png";
import board from "./board.png";
import SendMoney from "./SendMoney";
function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <nav>
          <img
            src="https://i.ibb.co/tKr5nvh/Home.png"
            alt="Home"
            width="70"
            height="70"
            id="homeicon"
          />
          <ul className="iconList">
            <img
              src="https://i.ibb.co/F6ztgz7/Tabs.png"
              alt="Home"
              width="50"
              height="40"
            />
            <img
              src="https://i.ibb.co/Rh3Tchv/cards.png"
              alt="Home"
              width="50"
              height="40"
            />
            <img
              src="https://i.ibb.co/zVY2Sgf/profile.png"
              alt="Home"
              width="50"
              height="50"
            />
            <img
              src="https://i.ibb.co/rMjxq3N/security.png"
              alt="Home"
              width="50"
              height="50"
            />
            <img
              src="https://i.ibb.co/XLt6tyy/stats.png"
              alt="Home"
              width="50"
              height="50"
            />
            <img
              src="https://i.ibb.co/QHZRx01/logout.png"
              alt="Home"
              width="50"
              height="50"
            />
          </ul>
        </nav>
      </div>
      <div className="heading">
        <h1>Banking Dashboard</h1>
        <h3>Welcome Back, Monirul</h3>
        <h2>Your Current Balance</h2>
      </div>

      <Cards />
      <div className="dashItems">
        <div className="Myt">
          <h2>My Transactions</h2>
          <MyTransactions className="Mytr" />
        </div>
        <div className="send">
          <h3>Send Money</h3>
          <div className="adimg">
            <SendMoney />
          </div>
          <img className="adimg" src={travelAd} alt="img not found" />
        </div>
        <div className="boardCard">
          <h3>This Month</h3>
          <img className="board" src={board} alt="img not found" />
        </div>
      </div>
    </div>
  );
}

export default App;
