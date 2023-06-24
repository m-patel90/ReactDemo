// import React, { Component, useEffect, useState } from "react";

// function Home() {
//     return (
//         <div>
//             <>
//                 Welcome to the home
//                 {/* <Button type='primary' onClick={window.location.href("\Dashboard")} >Login</Button> */}
//             </>
//         </div>
//     );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import {  notification } from 'antd';
import ClientRegistrationServices from '../Services/ClientRegistration/ClientRegistrationServices'


const openNotificationWithIcon = (type, mesasge, title) => {
    notification[type]({
        message: title,
        description: mesasge
    });
};

function App() {

    const [clientServices] = useState(() => new ClientRegistrationServices())

    const [values, setValues] = useState({
        groupName: 'Test',
        description: 'Health care'
    });

    useEffect(() => {
        GetUser();
    }, [])

    const GetUser = () => {
        let token = localStorage.getItem('token')
        clientServices.GetUser(token).then((res) => {
            if (res?.statusCode === 200) {
                //  setUserId(res?.data?.userId)
            }
        })
    }
    
    const onFinish = (values) => {
        let param = {
            "name": 'Demo',
            "address": "India",
            "number": "9999999999",
        }

        clientServices.SaveClientRegistration(param).then((res) => {
            if (res.statusCode === 200) {
                if (parseInt(res.data) > 0) {
                    openNotificationWithIcon('success', 'Registration', 'Success saved.')
                }
            }
            else {
                openNotificationWithIcon('error', 'Registration2', 'Somthing went wrong.  Please contect administratior')
            }
        })

    };

    return (
        <>This is dashboard</>
    )
}

export default App;