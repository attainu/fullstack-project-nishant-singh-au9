import React from 'react'
const imgurl = "https://lh3.googleusercontent.com/proxy/S6n6wAb1y4ZmJ35WLkkKF0dU4nn9mlRD4yhRSZqeFpCUH8YnEJ0RZVrEZtO1nXpgUt0fneCJjM5auTUanOoGtYcxCvSAiC7Z62HF"
import DashNav from "../Layout/dashNav"

const bill = () => {
    return (
        <>
        <DashNav/>
        <center><img src={imgurl} alt="in progress" /></center>
        </>
    )
}

export default bill