import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutMe from './MySkills/MySkills';
import Banner from './Banner/Banner';
import MySkills from './MySkills/MySkills';
import MyService from './MyService/MyService';
import MyProjects from './MyProjects/MyProjects';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <MyService></MyService>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;