import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Feed from "./pages/Feed";
import BooksDetail from "./pages/BooksDetail";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/ProfilePage";
import Ecourse from "./pages/Ecourse";
import Login from "./pages/Login";
import Auction from "./pages/Auction";
import Auctiondetails from "./pages/Auctiondetails";
import CoursesDetails from "./pages/CoursesDetails";
import EventsDetails from "./pages/EventsDetails";
import Electronics from "./components/Electronics";
import ElectronicsDetail from "./components/ElecDetails";
import AdminPanel from "./pages/AdminPanel";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/auctions/:id" element={<Auctiondetails />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/basket" element={<BasketPage />} />

        <Route path="/electronics" element={<Electronics />} />
        <Route path="/electronics/:id" element={<ElectronicsDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auctions" element={<Auction />} />
        <Route path="/" element={<Feed />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventsDetails />} />
        <Route path="/courses" element={<Ecourse />} />
        <Route path="/courses/:id" element={<CoursesDetails />} />
        <Route path="/books/:id" element={<BooksDetail />} />
        <Route path="/books" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
