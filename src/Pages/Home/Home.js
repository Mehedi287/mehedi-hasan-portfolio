import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutMe from './MySkills/MySkills';
import Banner from './Banner/Banner';
import MySkills from './MySkills/MySkills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
        </div>
    );
};

export default Home;