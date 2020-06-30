/* eslint-disable react/prefer-stateless-function */
/* eslint-disable space-before-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import styled from 'styled-components';
import { COLOR_MAIN_DARK, LAYOUT, COLOR_MAIN_LIGHT } from '../constants';
import Button from './Button';
import webpic from './ray_dalio_hero_web.jpg';
import educatedPic from './educated_web_hero.jpg';
import playstation from './playstation.jpg';
import blackberry from './blackberry.jpg';
import redbull from './redbull.jpg';
import tiktok from './tiktok.jpg';
import sennheiser from './sennheiser.jpg';



const HeroWrapper = styled.div`
    width: 100%;
    background-color: ${COLOR_MAIN_DARK};

`;

const HeroContent = styled.div`
    width: auto;
    margin-left: auto;
    margin-right: auto;
    max-width: ${LAYOUT.desktop.maxWidth}px;
    padding: ${LAYOUT.desktop.spacing}px;
    overflow: hidden;

    justify-content: space-between;
    a {
        text-decoration: none;
        color: #fff;
    }
    
`;

const HeroLeft = styled.div`
    font-size: 2rem;
    font-weight: 350;
    color: #fff;
    width:350px;
    float: left;
    margin-left: 20px;
    margin-top: 100px;
`;

const HeroRight = styled.div`
    margin-right: 100px;
    float: right;
    display: inline-block;
    margin-bottom: -800px;
    img{
        border-radius: 40px
    }
    .raydalio {
        transform: rotate(-10deg) scale(0.4, 0.4) translate(800px, -1250px)
    }
    .educated {
        transform: rotate(10deg) scale(0.7, 0.7) translate(-200px, -1000px)
    }

`;

const Sponsors = styled.div`
    background-color: ${COLOR_MAIN_LIGHT};
    overflow: hidden;
    img {
        width: 220px;
        height: auto;
        padding-left: 10px;
        padding-right: 10px;
    }
    .redbull {
        transform: translate(0, 12px)
    }
    .playstation {
        transform: translate(0, 15px)
    }
    .blackberry {
        transform: translate(0, 5px)
    }
    
`;



class Hero extends Component {
    render(){
        return (
            <HeroWrapper>
                <HeroContent>
                    <HeroLeft>
                        <p>What is success? 
                            <br></br><b>Number of books read</b></p>
                        <Button>
                            <a href="www.stackmentor.xyz">Try it free</a>
                        </Button>
                    </HeroLeft>
                    <HeroRight>
                        <img className="raydalio" src={webpic} alt="" />
                        <img className="educated" src={educatedPic} alt="" />
                    </HeroRight>
                </HeroContent>
                <Sponsors>
                    <img className="playstation" src={playstation} alt="" />
                    <img className="blackberry" src={blackberry} alt="" />
                    <img className="redbull" src={redbull} alt="" />
                    <img className="tiktok" src={tiktok} alt="" />
                    <img className="sennheiser" src={sennheiser} alt="" />
                </Sponsors>
            </HeroWrapper>
        );
    }
}

export default Hero;
