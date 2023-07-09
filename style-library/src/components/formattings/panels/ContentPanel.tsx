import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorRoute from "../../routes/ErrorRoute";

function ContentPanel() {
  return (
    <Router>
      <Routes>
        <Route path="/error" Component={ErrorRoute} />
        <Route path="/error" Component={ErrorRoute} />
      </Routes>
    </Router>
  );
}
export default ContentPanel;
