import React from 'react';

import { Link } from 'react-router-dom';
import Footer from './../../components/Footer/Footer';


const womenswatch = () => (
<div>
    <div className="container-fluid">
        <div className ="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  carousels" >
                    {/*Carousel Wrapper*/}
                    <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                        {/*Indicators*/}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-1z" data-slide-to={0} className="active" />
                            <li data-target="#carousel-example-1z" data-slide-to={1} />
                            <li data-target="#carousel-example-1z" data-slide-to={2} />
                        </ol>
                        {/*/.Indicators*/}
                        {/*Slides*/}
                        <div className="carousel-inner" role="listbox">
                        {/*First slide*/}
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide" />
                        </div>
                        {/*/First slide*/}
                        {/*Second slide*/}
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Second slide" />
                        </div>
                        {/*/Second slide*/}
                        {/*Third slide*/}
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide" />
                        </div>
                        {/*/Third slide*/}
                        </div>
                        {/*/.Slides*/}
                        {/*Controls*/}
                        <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                        {/*/.Controls*/}
                    </div>
                    {/*/.Carousel Wrapper*/}
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                </div>
            </div>
        <div className="main col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row">
                  {/* categories */}
                <div className=" categories col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="title">
                        <h3 className=" bor-bot ">categories</h3>
                        <ul className=" title accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                            <li className="card">
                                <ul className="card-header" role="tab" id="headingOne">
                                    <li data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5 className="mb-0">
                                            Thương hiệu <i className="fa fa-angle-down rotate-icon"></i>
                                        </h5>
                                    </li>
                                </ul>
                                <div id="collapseOne" className="collapse " role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionEx">
                                    <ul className="sub-categories">
                                        <li>
                                        <a href="#"> <p>Đồng hồ Olym Pianus</p> </a>
                                        </li>
                                        <li>
                                        <a href="#"> <h5>Đồng hồ Ogival</h5> </a>
                                        </li>
                                        <li>
                                        <a href="#"> <h5>Đồng hồ Casio</h5></a>
                                        </li>
                                        <li>
                                        <a href="#"><h5>Đồng hồ citizen</h5></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <h3 className=" bor-bot ">Gender</h3>
                       {/*Radio group*/}
                        <div className="form-check">
                            <input className="form-check-input with-gap" name="group100" type="radio" id="radio100" />
                            <label className="form-check-label" htmlFor="radio100">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input with-gap" name="group100" type="radio" id="radio101" defaultChecked />
                            <label className="form-check-label" htmlFor="radio101">Female </label>
                        </div>
                        {/*Radio group*/}
                    </div>
                    <div className="title">
                        <h3 className=" bor-bot ">Gender</h3>
                      {/*Radio group*/}
                        <div className="form-check">
                            <input className="form-check-input with-gap" name="group101" type="radio" id="radio102" />
                            <label className="form-check-label" htmlFor="radio102">dưới 2.000.000</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input with-gap" name="group101" type="radio" id="radio103" defaultChecked />
                            <label className="form-check-label" htmlFor="radio103"> 2.000.000<sup>đ</sup> - 4.000.000 <sup>đ</sup> </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input with-gap" name="group101" type="radio" id="radio104" defaultChecked />
                            <label className="form-check-label" htmlFor="radio104"> trên 4.000.000 </label>
                        </div>
                        {/*Radio group*/}
                      
                    </div>
                    <div className="title">
                      <h3 className=" bor-bot ">Recent Product</h3>
                      <div className="single-product">
                      <div className="recent image">
                          <img src="./img/product/2.jpg" alt className="img-responsive" />
                      </div>
                      <div className="recent-infor">
                          <h6>Tên sản phẩm</h6>
                          <div className="price">
                              <span>1.500.000 <sup>đ</sup></span>
                          </div>
                          <div className="line" />
                          
                      </div> 
                      </div>   
                  </div>
              </div>
              {/* products */}
              
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">

                  <div class="btn-group">
                      <button class="btn btn-blue-grey btn-rounded dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Basic dropdown</button>

                      <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <a class="dropdown-item" href="#">Something else here</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Separated link</a>
                      </div>
                  </div>
                                  
                  <div className="products">
                      <div className="row">
                          <div className="single-product">
                              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 image">
                              <img src="./img/product/watch3.jpg" alt className="img-responsive img-rounded" />
                              </div>
                              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 infor">
                                  <h3>Tên sản phẩm</h3>
                                  <div className="price">
                                      <span>1.500.000 <sup>đ</sup></span>
                                  </div>
                                  <div className="line" />
                                  <div className="introduce">
                                      Lorem ipsum dolor sit amet consectetur.
                                  </div>
                                  <div className="buttons">
                                      <button type="button" className="btn btn-success">Add to cart</button>
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <div className="row">
                          <div className="single-product">
                              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 image">
                              <img src="./img/product/watch3.jpg" alt className="img-responsive img-rounded" />
                              </div>
                              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 infor">
                                  <h3>Tên sản phẩm</h3>
                                  <div className="price">
                                      <span>1.500.000 <sup>đ</sup></span>
                                  </div>
                                  <div className="line" />
                                  <div className="introduce">
                                      Lorem ipsum dolor sit amet consectetur.
                                  </div>
                                  <div className="buttons">
                                      <button type="button" className="btn btn-success">Add to cart</button>
                                  </div>
                              </div> 
                          </div>
                      </div>
                        
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
);

export default womenswatch;
