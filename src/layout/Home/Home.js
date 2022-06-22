import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filter from "./components/Filter/Filter";
const Home = () => {
  const message = useSelector((state) => state?.user?.registerUser?.data);
  const loginMessage = useSelector(
    (state) => state?.user?.loginUser?.data.token
  );
  useEffect(() => {
    if (message?.token) {
      toast.success("Login Successfull!");
    }
  }, [message?.token]);
  useEffect(() => {
    if (loginMessage) {
      toast.success("Login Successfull!");
    }
  }, [message]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Filter />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
