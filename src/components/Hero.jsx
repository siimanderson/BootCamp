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
    overflow: auto;

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
    margin-right: 10px;
    float: right;

    img{
        border-radius: 20px
        width: 20%   
    }
    .raydalio {
        width: 200px
    }
    .educated {
        width: 150px
    }

`;

const Sponsors = styled.div`
    background-color: ${COLOR_MAIN_LIGHT}
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
                    
                </Sponsors>
            </HeroWrapper>
        );
    }
}

export default Hero;
