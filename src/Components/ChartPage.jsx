import React from "react";
import ChartHeader from "./ChartHeader.jsx";
import { TEChart } from "tw-elements-react";

const ChartPage = (props) => {
    return (
        <section>
            <div className="min-h-screen bg-customDark mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
                <ChartHeader data={props.data[0]} />
                <div className="flex flex-col items-center justify-center mb-12">
                    <button
                        onClick={() => props.setCurrentPage('uploadPage')}
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Go Back
                    </button>
                </div>
                <div
                    className="relative isolate overflow-hidden bg-zinc-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-32">
                    <div className="flex flex-col items-center justify-center w-full h-full lg:ml-30 sm:pb-20">
                        <div className="relative mt-16 lg:mt-8 w-4/5 h-[400px]">
                            <TEChart
                                type="bar"
                                data={{
                                    labels: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    datasets: [
                                        {
                                            label: "Traffic",
                                            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                                            backgroundColor: "white",

                                        },
                                    ],
                                }}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
                <ChartHeader data={props.data[1]} />
                <div
                    className=" relative isolate overflow-hidden bg-zinc-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="flex flex-col items-center justify-center w-full h-full lg:ml-30 sm:pb-20">
                        <div className="relative mt-16 lg:mt-8 w-4/5 h-[400px]">
                            <TEChart
                                type="line"
                                data={{
                                    labels: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    datasets: [
                                        {
                                            label: "Traffic",
                                            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                                            backgroundColor: "white",
                                        },
                                    ],
                                }}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChartPage;
