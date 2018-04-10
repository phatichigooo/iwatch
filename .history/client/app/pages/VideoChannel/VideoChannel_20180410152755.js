import React from 'react';

import { Link } from 'react-router-dom';
import carousel from '../../../public/assets/js/carousel'


const videochannel = () => (
   
  <div className="container background">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="">Home</a></li>
              <li className="breadcrumb-item active">Library</li>
          </ol>
          

          <div className="row">
            <div className="type col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <span>Các sản phẩm hot</span>
            </div>
          </div>
          <div className="row"> 
            <div className="">
              <div className="owl-carousel owlCarouselVertical">
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
              </div>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
              <div className="content-img">
                <a href="#" className="img-thumbnail">
                  <img src="./img/product/2.jpg" alt className="img-responsive" /> </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className = "col-3 col-sm-3 col-md-3 col-lg-3 col-xs-3">
              <div className="type">
                <span>bài viết nổi bật</span>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div className="row owl-carousel owlCarouselHorizontal">
            
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
              <div className="img-thumbnail">
                <img src=" ./assets/img/1.jpg" alt="..." className="img-responsive" />
                <div className="caption">
                  <h4>img-thumbnail label</h4>
                  <p>.............</p>  
                </div>
              </div>
           
          </div>
        </div>
      </div>
);

export default videochannel;
