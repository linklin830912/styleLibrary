import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorRoute from "../../routes/ErrorRoute";
import QuantityPickerRoute from "../../routes/QuantityPickerRoute";

function ContentPanel() {
  return (
    <Router>
      <Routes>
        <Route path="/quantity-picker" Component={QuantityPickerRoute} />
        <Route path="/error" Component={ErrorRoute} />
      </Routes>
    </Router>
  );
}
export default ContentPanel;
