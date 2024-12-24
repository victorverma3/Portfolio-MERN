import React from "react";

import Footer from "../../components/Footer";
import HomeTitle from "../../components/HomeTitle";

const Home = () => {
    return (
        <>
            <div className="w-screen sm:min-h-[65vh] pt-20 sm:pt-28">
                <HomeTitle />
                <p className="w-[65vw] m-auto pt-6 text-xl text-justify sm:w-[60vw] sm:text-2xl sm:mb-12 2xl:text-3xl">
                    I'm a senior at Boston University graduating in spring 2025
                    with a B.A. in Mathematics and Computer science and a minor
                    in Data Science. I am constantly striving to learn new
                    skills and continue to develop myself academically and
                    professionally. I particularly enjoy spending time working
                    on personal projects that solve interesting problems in my
                    life.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Home;
