// import { h } from 'preact';
// import Header from "../../components/title";
// import Home from "../../components/__unused";
// import Play from "../../components/gameplay";
// import Footer from "../../components/footer";

// const App = () => {

//     const [myPick, setMyPick] = useState("");
//     const [housePick, setHousePick] = useState("");
//     const [gameScore, setGameScore] = useState(0);

//     function newHousePick() {
//         const choices = ["rock", "paper", "scissors"];
//         const randomChoice = choices[Math.floor((Math.random()*3))];
//         setHousePick(randomChoice);
//     }

//     useEffect(() => {
//         newHousePick();
//     },[setMyPick]);

//     return (
//          <Router>
//              <div className="wrapper">
//             <Header score={gameScore}/>
//             <Switch className="main">
//                 <Route path="/play">
//                     <Play mine={myPick} house={housePick} score={gameScore} setScore={setGameScore} setHousePick={newHousePick}/>
//                 </Route>
//                 <Route path="/">
//                     <Home setPick={setMyPick} />
//                 </Route>
//             </Switch>
//             <Footer />
//             </div>
//         </Router>
//     )
// }

// export default App;