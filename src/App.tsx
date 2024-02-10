import { Route, Routes } from "react-router-dom";
import UserBoard from "./pages/UserBoard";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserBoard />} />
      <Route path="/users/:id" element={<UserDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
