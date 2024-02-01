import Navbar from "./layouts/Navbar";
import LoginPage from "./layouts/LoginPage";
import RegisterForm from "./layouts/RegisterForm";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar/>
      </div>
      <div data-theme="">
        <h1 className="text-4xl text-blue-600 text-center border bg-yellow-200 py-5 m-6 top-5 font-bold">
          Hello world!
        </h1>
        <div className="flex">
          <hr />
          <RegisterForm />
          <hr />
          <LoginPage />
        </div>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default App;