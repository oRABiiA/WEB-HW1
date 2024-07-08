import React, {useEffect, useState} from "react";
import Home from "./Components/Home.jsx"
import Footer from "./Components/Footer"
import UploadPage from "./Components/UploadPage.jsx";
import ChartPage from "./Components/ChartPage.jsx";

const App = () => {

    const [currentPage, setCurrentPage] = useState('home' || localStorage.getItem('currentPage') )

    useEffect(() => {
        localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    const chartNames = ["Bar Chart", "Line Chart"]; // temporary data for the demo

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home setCurrentPage={setCurrentPage}/>;
            case 'chartPage':
                return <ChartPage data={chartNames} setCurrentPage={setCurrentPage}/>;
            case ('uploadPage'):
                return <UploadPage setCurrentPage={setCurrentPage}/>;
        }
    };
    return (
        <div className="bg-customDark">
            {renderPage()}
            <Footer />
        </div>
    );
}
export default App;
