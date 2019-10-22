import React from "react";
import BoardView from "content/board_view/board_view";
import MainNav from "main_nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <MainNav>
        <Route path="/board/:id" component={BoardView} />
      </MainNav>
    </Router>
  );
};

export default App;
