import React from "react";
import './style.css';
import Page01 from '../img/pag01.jpg'
import Page02 from '../img/pag02.jpg'
import Page03 from '../img/pag03.jpg'
import Page04 from '../img/pag04.jpg'


const Content = () =>{
    return (<section>
                <div id="slider1" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#slider1" data-slide-to="0" class="active"></li>
                    <li data-target="#slider1" data-slide-to="1"></li>
                    <li data-target="#slider1" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={Page01} class="d-block w-100" alt="The developer is an asshole and didn't want to help you, I'm sorry about that."/>
                        </div>
                        <div class="carousel-item">
                            <img src={Page02} class="d-block w-100" alt="The developer is an asshole and didn't want to help you, I'm sorry about that."/>
                        </div>
                        <div class="carousel-item">
                            <img src={Page03} class="d-block w-100" alt="The developer is an asshole and didn't want to help you, I'm sorry about that."/>
                        </div>
                        <div class="carousel-item">
                            <img src={Page04} class="d-block w-100" alt="The developer is an asshole and didn't want to help you, I'm sorry about that."/>
                        </div>
                </div>
                <a class="carousel-control-prev" href="#slider1" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#slider1" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </section>
            
    );    
}
export default Content;