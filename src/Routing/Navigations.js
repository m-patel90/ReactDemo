import React, { Component } from "react";
// import jwt from "jsonwebtoken";
import {
    // BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import Home from '../Screens/Home.screen'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<div style={{ marginTop: '25%', backgroundColor : 'lightblue' }}> <Home /></div>} />
                        {/* <Route element={<LayoutPage />}>
                            <Route path="/dashboard" element={<Dashboard />} {...this.props} />
                        </Route> */}
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
