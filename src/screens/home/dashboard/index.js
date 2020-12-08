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
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
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

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
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
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    James Doe
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="row">
                <div class="col-lg-8">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../../../assets/images/00-yahoo-homepage.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/images/BBC News.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/images/bbc_web2.jpg" alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/images/BBC News.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/images/bbc_web2.jpg" alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/images/BBC News.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/images/bbc_web2.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                </div>
                <div class="col-lg-4 static-news">
                <div class="row">
                    <div class="col-lg-5">
                    <img class="d-block w-100" src="../../../assets/images/logo.png" style={{height: '105px'}} alt="First slide" />
                    </div>
                    <div class="col-lg-7">
                        <article>Business</article>
                        <p>
                            <strong>Mauris porta quam a lorem honcus</strong><br/>
                            <small>December 8, 2020</small>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5">
                    <img class="d-block w-100" src="../../../assets/images/logo.png" style={{height: '105px'}} alt="First slide" />
                    </div>
                    <div class="col-lg-7">
                        <article>Environmental</article>
                        <p>
                            <strong>Mauris porta quam a lorem honcus</strong><br/>
                            <small>December 8, 2020</small>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5">
                    <img class="d-block w-100" src="../../../assets/images/logo.png" style={{height: '105px'}} alt="First slide" />
                    </div>
                    <div class="col-lg-7">
                        <article>Video</article>
                        <p>
                            <strong>Mauris porta quam a lorem honcus</strong><br/>
                            <small>December 8, 2020</small>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5">
                    <img class="d-block w-100" src="../../../assets/images/logo.png" style={{height: '105px'}} alt="First slide" />
                    </div>
                    <div class="col-lg-7">
                        <article>Design</article>
                        <p>
                            <strong>Mauris porta quam a lorem honcus</strong><br/>
                            <small>December 8, 2020</small>
                        </p>
                    </div>
                </div>
                <h6>MORE TRENDING POSTS</h6>
                </div>
                
            </div>
    </div>

</div>

  );
}

export default Dashboard;
