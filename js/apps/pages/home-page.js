'use strict';

export default {
    template: `
        <section>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/remember.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h2>Never Forget A Thing</h2>
          <h5>Our keep-app will make sure you never miss a single thing</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/email.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h2>The Ability To Send</h2>
          <h5>Use our groundbreaking technology that will aloow you to send emails to yourself</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/imagination.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h2>Read. Imagine. Live.</h2>
          <h5>With our book shop you will find books to nourish you mind and creativity</h5>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
<div class="container-fluid bg-dark text-light p-4 text-center">
        <h1 class="titleApps">Our Apps</h1>
        <div class="row">
            <div>
                <img src="img/emailPic.png" class="mb-3" />
                <h4>misterEmail</h4>
            </div>
            <div >
                <img src="img/keeppic.png" class="mb-3" />
                <h4>missKeep</h4>
            </div>
            <div >
                <img src="img/bookpic.png" class="mb-3">
                <h4>missBook</h4>
            </div>
        </div>
    </div>
        </section>
    `,
};