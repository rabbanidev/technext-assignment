import { Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
