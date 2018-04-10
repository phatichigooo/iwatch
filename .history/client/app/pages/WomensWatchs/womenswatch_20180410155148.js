import React from 'react';

import { Link } from 'react-router-dom';
import Footer from './../../components/Footer/Footer';


const womenswatch = () => (
  <div>
      <div className="container-fluid">
      {/* info */}
      <div className="container">
          <div style={{height: 30, backgroundColor: '#f2f2f2'}}></div>
      </div>
      <div className="container">
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
          </nav>
          <div className="main col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                  {/* categories */}
              <div className=" categories col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <div className="title">
                      <h3 className=" bor-bot ">categories</h3>
                      <ul class=" title accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                          <li class="card">
                              <ul class="customCardHeader card-header" role="tab" id="headingOne">
                                  <li data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Thương hiệu<i className="fa fa-angle-down rotate-icon" />
                                  </li>                                     
                              </ul>
                              <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionEx">
                                      <ul class="sub-categories">
                                          <li>
                                          <a href="#"> <h5>Đồng hồ Olym Pianus</h5> </a>
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
                      <div className="checkbox">
                          <label>
                              <input type="radio" defaultValue />
                              Male
                          </label>
                          <label>
                              <input type="radio"  />
                              Female
                          </label>
                      </div>
                  </div>
                  <div className="title">
                      <h3 className=" bor-bot ">Gender</h3>
                      <div className="radio">
                      <label>
                          <input defaultChecked="true" type="radio" name="optradio" defaultValue />
                          dưới 2.000.000 <sup>đ</sup>
                      </label>
                      <label>
                          <input type="radio" name="optradio" defaultValue />
                          2.000.000<sup>đ</sup> - 4.000.000 <sup>đ</sup>
                      </label>
                      <label>
                          <input type="radio" name="optradio" defaultValue />
                          4.000.000<sup>đ</sup> - 6.000.000 <sup>đ</sup>
                      </label>
                      <label>
                          <input type="radio" name="optradio" defaultValue />
                          trên 6.000.000 <sup>đ</sup>
                      </label>
                      </div>
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
