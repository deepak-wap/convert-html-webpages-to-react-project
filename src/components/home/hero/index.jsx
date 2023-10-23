import SliderImg from "../../../images/slider-img.png";

const Hero = () => {
  return (
    <section class="slider_section hero_area">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ">
            <div class="detail-box">
              <h1>
                Repair and <br />
                Maintenance <br />
                Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                pariatur, tempora iusto, ad possimus soluta hic praesentium
                mollitia consequatur beatae, aspernatur culpa.
              </p>
              <a href="">Contact Us</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="img-box">
              <img src={SliderImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
