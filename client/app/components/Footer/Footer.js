import React from 'react';

const Footer = () => (
  <footer className="page-footer" style={{backgroundColor: '#212121', color: '#fff'}}>
        {/*Footer Links*/}
        <div className="container">
          {/* Footer links */}
          <div className="row text-center text-md-left mt-3 pb-3">
            {/*First column*/}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h1>PCiWatch</h1>
              <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              {/*Social buttons*/}
              <div className="social-section text-center text-md-left">
                <ul>
                  <li><a className="btn-floating btn-sm rgba-white-slight mr-xl-4"><i className="fa fa-facebook" /></a></li>
                  <li><a className="btn-floating btn-sm rgba-white-slight mr-xl-4"><i className="fa fa-twitter" /></a></li>
                  <li><a className="btn-floating btn-sm rgba-white-slight mr-xl-4"><i className="fa fa-google-plus" /></a></li>
                  <li><a className="btn-floating btn-sm rgba-white-slight mr-xl-4"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
              {/*/.Social buttons*/}
            </div>
            {/*/.First column*/}
            {/*Second column*/}
            <div className="col-sm-3">
              <div className="news-item ">
                <div className="row ">
                  <div className="btn-title">RECENT PORT</div>
                  <a href>
                    <div className>
                      <img src="../assets/img/01.jpg" className="img-responsive-footer" alt />
                    </div>
                    <div className>
                      <p className="news-title">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="news-item">
                <div className="row">
                  <a href>
                    <div className>
                      <img src="../assets/img/01.jpg" className="img-responsive-footer" alt />
                    </div>
                    <div className>
                      <p className="news-title">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="news-item">
                <div className="row">
                  <a href>
                    <div className>
                      <img src="../assets/img/01.jpg" className="img-responsive-footer" alt />
                    </div>
                    <div className>
                      <p className="news-title">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*/.Second column*/}
            {/*Third column*/}
            <div className="col-sm-3">
              <div className="news-item ">
                <div className="row ">
                  <div className="btn-title">POPULAR PORT</div>
                  <a href>
                    <div className>
                      <img src="../assets/img/01.jpg" className="img-responsive-footer" alt />
                    </div>
                    <div className>
                      <p className="news-title">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="news-item">
                <div className="row">
                  <a href>
                    <div className>
                      <img src="../assets/img/01.jpg" className="img-responsive-footer" alt />
                    </div>
                    <div className>
                      <p className="news-title">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="news-item">
                <div className="row">
                  <a href>
                    <div className>
                      <img src="../assets/img/01.jpg" className="img-responsive-footer" alt />
                    </div>
                    <div className>
                      <p className="news-title">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*/.Third column*/}
          </div>
          {/* Footer links */}
          <div className="row py-3 d-flex align-items-center">
            {/*Grid column*/}
            <div className="col-md-8 col-lg-9">
              {/*Copyright*/}
              <p className="text-center text-md-left grey-text">© 2018 Copyright:WEFIXALL</p>
              {/*/.Copyright*/}
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-4 col-lg-3 ml-lg-0">
            </div>
            {/*Grid column*/}
          </div>
        </div>
      </footer>
);

export default Footer;
