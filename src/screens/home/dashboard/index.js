//import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react'

function Dashboard() {

  return (
    <div class="wrapper">
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>All India Rahul Gandhi Brigade Congress</h3>
            <hr/>
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
    <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <h3>HOME</h3>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">James Doe</a>
                            </li> */}
                            <li class="nav-item">
                            <div class="dropdown">
                            <span class="username">James Doe</span>
                                <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user fa-2x"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                            <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;Latest News</span></div>
                            <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a> <span class="dot"></span> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a> <span class="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a> </marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wrapper">
                <div class="d-carousel">
                    <ul class="carousel">
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt. </p>
                        </li>
                        <li> <a href="#"><img src="../../assets/css/news/style/images/carousel.jpg" alt="" class="img-news" /></a>
                            <h4><a href="#">Cras varius, sapien egetory sagittis</a></h4>
                            <p>Suspendisse potenti. Nibh miry, ultricies ac molestie sit ameter vestibulum eget nunc. Vivamus vitae aliquam odio. Morbi sit amet odio tincidunt.</p>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
        </div>                    
    </div>
  );
}

export default Dashboard;
