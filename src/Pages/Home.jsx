import React from 'react';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import { useLoaderData, useLocation } from 'react-router-dom';

import Faqs from '../Components/Faqs';
import Footer from '../Components/Footer';

const Home = () => {
    const assignments = useLoaderData() || [];
    return (
        <div>
            <Banner></Banner>
            <Feature assignments={assignments}></Feature>
            <Faqs></Faqs>
            <Footer></Footer>
        </div>
    );
};

export default Home;