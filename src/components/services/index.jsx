import maintenanceImg from "../../images/s1.png";
import electricalImg from "../../images/s2.png";
import plumbingImg from "../../images/s3.png";

const Services = () => {
  return (
    <section class="service_section layout_padding">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2> Our Services </h2>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4 mx-auto">
            <div class="box ">
              <div class="img-box">
                <img src={maintenanceImg} alt="" />
              </div>
              <div class="detail-box">
                <h5>Maintenance</h5>
                <p>
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 mx-auto">
            <div class="box ">
              <div class="img-box">
                <img src={electricalImg} alt="" />
              </div>
              <div class="detail-box">
                <h5>Electrical</h5>
                <p>
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 mx-auto">
            <div class="box ">
              <div class="img-box">
                <img src={plumbingImg} alt="" />
              </div>
              <div class="detail-box">
                <h5>Plumbing</h5>
                <p>
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <a href="">View More</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
