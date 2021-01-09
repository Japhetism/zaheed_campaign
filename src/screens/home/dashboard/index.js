import React, { useState, useEffect, useRef } from 'react'
import LatestNews from  './components/latest-news'
import NewsSlider from './components/news-slider'

function Dashboard() {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "./assets/carousel.js"
        script.async = true
        document.body.appendChild(script)
    })
    return (
        <React.Fragment>
            <LatestNews />
            <NewsSlider />
        </React.Fragment>
    );
}

export default Dashboard;
