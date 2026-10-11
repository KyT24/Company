import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = lazy(function () {
  return import("./pages/Home");
});
const About = lazy(function () {
  return import("./pages/About");
});
const Services = lazy(function () {
  return import("./pages/Services");
});
const Teams = lazy(function () {
  return import("./pages/Teams");
});
const BlogList = lazy(function () {
  return import("./pages/BlogList");
});
const CreateBlog = lazy(function () {
  return import("./pages/CreateBlog");
});
const Login = lazy(function () {
  return import("./pages/Login");
});

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/create-blog"
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;