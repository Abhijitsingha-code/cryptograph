import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Space, Layout, Typography } from "antd";
import "./App.css";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Exchanges,
} from "./components/index";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route path="/exchanges" element={<Exchanges />}></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/crypto/:Id" element={<CryptoDetails />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
            <Typography.Title level={3} style={{color:"white", textAlign:'center'}}>
                CryptoGraph <br />
                All rights reseverd
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
            </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
