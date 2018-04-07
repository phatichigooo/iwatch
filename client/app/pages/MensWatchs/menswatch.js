import React from 'react';

import { Link } from 'react-router-dom';
import Footer from './../../components/Footer/Footer';


const menswatch = () => (
  <div>
  <div className="container">
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* Product */}
          <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
              <div className="view overlay hm-white-slight z-depth-1">
                <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72" className="img-fluid" alt />
                <a>
                  <div className="mask waves-light waves-effect waves-light" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">
                  <strong>
                    <a>Iphone 6 Plus</a>
                  </strong>
                </h4>
                <ul className="rating">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <p className="card-text">
                  Sản phẩm do apply sản xuất
                </p>
                <div className="card-footer">
                  <span className="left">15$</span>
                  <span className="right">
                    <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer/>
  </div>
);

export default menswatch;
