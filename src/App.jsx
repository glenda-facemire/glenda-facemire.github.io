import './App.css';

const INSTAGRAM_URL = "https://instagram.com/glendafacemire.makeup";
const PROFILE_PIC = "./20905594_143605949561768_6036651507477118976_a.jpg";
const BACKGROUND_PIC = "./pexels-scottwebb-2011824.jpg"
const BACKGROUND_PIC_2 = "./360_F_840898433_o7OSaS3IQb20mZfgM5jyn9ExvJB6Nr9p.jpg"

// Import the 4 pictures that were added
const IMAGE_1 = "./Black female bango.jpeg";
const IMAGE_2 = "./Molly Tucker.jpeg";
const IMAGE_3 = "./Jason Mraz.jpeg";
const IMAGE_4 = "./IMG_2287.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <span className="nav-logo">Glenda V. Facemire</span>
        <ul className="nav-menu">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#instagram" className="nav-link">Instagram</a></li>
          <li><a href="#clients" className="nav-link">Credits</a></li>
          <li><a href="#reviews" className="nav-link">Reviews</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><a href="#cookbook" className="nav-link">Cookbook</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">&copy; {new Date().getFullYear()} Glenda V. Facemire</div>
        <div className="footer-links">
          <a href="mailto:face23@sbcglobal.net" className="footer-link">Email</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

function InstagramGallery() {
  // Use the actual images that were added
  const images = [
    IMAGE_1,
    IMAGE_2,
    IMAGE_3,
    IMAGE_4,
  ];
  
  const imageDescriptions = [
    "Black female bango",
    "Molly Tucker",
    "Jason Mraz",
    "IMG_2287"
  ];
  
  return (
    <section id="instagram" className="instagram-section">
      <div className="container">
        <h2 className="section-title">Instagram</h2>
        <p className="instagram-text">
          See more of Glenda's work on <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>.
        </p>
        <div className="instagram-gallery">
          {images.map((src, idx) => (
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" key={idx} className="instagram-photo-link">
              <img src={src} alt={imageDescriptions[idx]} className="instagram-photo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Function to toggle review photo
function toggleReview(event) {
  const button = event.target.closest('.see-more-btn');
  const card = button.closest('.review-card');
  const text = card.querySelector('.review-text');
  const photo = card.querySelector('.review-photo');
  const arrow = button.querySelector('.arrow');
  
  if (photo.style.display === 'none') {
    text.style.display = 'none';
    photo.style.display = 'block';
    button.innerHTML = 'See Less <span class="arrow">↑</span>';
  } else {
    text.style.display = 'block';
    photo.style.display = 'none';
    button.innerHTML = 'See More <span class="arrow">→</span>';
  }
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Glenda V. Facemire</h1>
            <h2 className="hero-subtitle">Celebrity Makeup Artist</h2>
            <p className="profile-text">
              Professional film, television, video, and print artist with 36+ years experience. List of clients reads like a who's who of music and Hollywood.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="section-title">About</h2>
            <div className="about-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img src={PROFILE_PIC} alt="Glenda V. Facemire" className="profile-photo" />
              <p className="about-text">
                New Yorker by birth, raised in Miami Beach, moved to Atlanta with her cinematographer/IATSE husband and ultimately landed in Austin. In the process, she studied both art and acting and even joined the Screen Actors' Guild before finally realizing her true niche by combining her two passions of art and theater into professional makeup artistry.
              </p>
              <p className="about-text">
                Author of the cookbook, <strong>Music In The Kitchen – Favorite Recipes from Austin City Limit's Performers</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Gallery Section */}
        <InstagramGallery />

        {/* Clients Section */}
        <section id="clients" className="clients-section">
          <div className="container">
            <h2 className="section-title">Professional Credits In Brief</h2>
            <div className="clients-opportunity">
              Unique opportunity to be one-on-one and face-to-face with the best of international and national celebrities, music artists, and other production companies.
            </div>
            <h3 className="clients-subtitle">Head Makeup Artist at Austin City Limits, PBS<br />(since 1987)</h3>
            <div className="clients-content">
              <div className="clients-left">
                <div className="clients-list">
                  Willie Nelson, Stevie Ray Vaughan, Jeff Bridges, Steve Martin, Alessia Carr, John Legend, John Mayer, Yola, Billie Eilish, Ed Sheeran, Dave Matthews, Kendrick Lamar, Kenny Chesney, Jason Miraz, Gary Clark Jr., Lukas Nelson, Jackson Brown, Pearl Jam's Eddy Vender, Florence and the Machine, Khalid, Herbie Handcock, LCD Sound System, B.B. King, Keith Urban, Jason Isbell, Joan Biaz, Cassandra Wilson, H.E.R., Bruce Hornsby, August Greene, Jenny Lewis, Bonnie Raitt, Avett Brothers, Lyle Lovett, Nickel Creek, Nine Inch Nails, TAJ Mahal, Esperanza Spalding, Joe Cocker, Steve Miller Band, Los Lobos, Thievery Corporation, Dixie Chicks, Jack White, Lykke Le, Wilco, Sarah McLachlan, Ryan Bingham, Buddy Guy, Jimmy Cliff, Robert Plant, Alan Jackson, Phoenix, David Gray, Juanes, Commons, James Bay, The Revivalists, Loretta Lynn, Garth Brooks, etc.
                </div>
              </div>
            </div>
            <div className="clients-bottom">
              <h3 className="clients-subtitle">Freelance Work</h3>
              <div className="clients-events">
                2002 first American Idol auditions/Ryan Seacrest, Simon, and Randy (Austin), Austin City Limits Music Festival, Access Hollywood, NBC Universal, Dateline, 60 Minutes- Anderson Cooper, Good Morning America- Director James Cameron, Ambush Makeover, E-Entertainment, Home & Garden- HGTV; SXSW, The Food Network, Amy Poehler, Budweiser; Beer ; Comic Ben Schwartz Dos Equis Beer , Dennis Hopper; CBS Sports, Nightline, Dan Rather; Director Cameron Crowe; Fuse-TV NY – Amy Schumer ; John Walsh/Americas Most Wanted; Nashville Connection; Tejano Music Awards,San Antonio: Spike TV, Lifetime, MTV-Real World, VH-1; TV Guide - 2010-American Idol Host: Justin Guarini, Good Morning America, Panasonic, Harry Connick Jr ; Henry Louis Gates Jr.; Ken Burns, Mike Judge, Randi Zuckerberg,, Luke Wilson, Whoopie Goldberg, ,60 Minutes, Julia Child, Ben Vereen–San Antonio, George Bush Jr. PBS, BBC, BET, NBC, ABC, ESPN, CNN, Fox Network-News, CDC-Atlanta, 20th Century Fox, Hope Floats, Columbia Pictures/ "The Buddy Holly Story", New Line Pictures, Time-Warner, Charities, Corporate, record companies/videos, Texas Athletes - Ben Crenshaw, Tom Kite, quarterback Colt McCoy, USA Olympian decathlete Trey Hardee to cyclist Lance Armstrong for Texas Monthly
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Reviews</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-text">
                  "Glenda V. Facemire's cookbook 'Music In The Kitchen' beautifully captures the essence of Austin City Limits through the favorite recipes of our performers. Her dedication to both the culinary arts and music culture shines through in this remarkable collection."
                </div>
                <div className="review-photo" style={{display: 'none'}}>
                  <div className="testimonial-document">
                    <a href="/Terry Lickona Forward MITK.pages" target="_blank" rel="noopener noreferrer" className="document-link">
                      📄 View Terry Lickona's Forward from Cookbook
                    </a>
                  </div>
                </div>
                <div className="review-actions">
                  <button className="see-more-btn" onClick={(e) => toggleReview(e)}>
                    See More <span className="arrow">→</span>
                  </button>
                </div>
                <div className="review-author">- Terry Lickona, Executive Producer, Austin City Limits PBS</div>
              </div>
              <div className="review-image-container">
                <img src="/testimonial-image.jpeg" alt="Additional testimonial image" className="review-image" />
              </div>
              <div className="review-card">
                <div className="review-text">
                  "Glenda V. Facemire's work with the Humane Society has been nothing short of remarkable. Her commitment to animal welfare and her professional skills have made a significant impact on our organization."
                </div>
                <div className="review-photo" style={{display: 'none'}}>
                  <div className="testimonial-document">
                    <a href="/Amer Humane Assoc.pdf" target="_blank" rel="noopener noreferrer" className="document-link">
                      📄 View Amer Humane Association's Full Testimonial
                    </a>
                  </div>
                </div>
                <div className="review-actions">
                  <button className="see-more-btn" onClick={(e) => toggleReview(e)}>
                    See More <span className="arrow">→</span>
                  </button>
                </div>
                <div className="review-author">- Amer Humane Association</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="contact-text">
              <strong>Email:</strong> <a href="mailto:face23@sbcglobal.net" className="contact-link">face23@sbcglobal.net</a><br />
              <strong>Phone:</strong> <a href="tel:15124132359" className="contact-link">(512) 413-2359</a><br />
              <strong>Instagram:</strong> <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="contact-link">@glendafacemire.makeup</a>
            </p>
          </div>
        </section>

        {/* Cookbook Section */}
        <section id="cookbook" className="instagram-section">
          <div className="container">
            <h2 className="section-title">Cookbook</h2>
            <p className="instagram-text">
              <span className="author-name">Glenda V Facemire</span> is the author of <strong>Music In The Kitchen – Favorite Recipes from Austin City Limit's Performers</strong><br />
              <a href="https://www.amazon.com/dp/0292718152?ref=cm_sw_r_ffobk_cso_cp_apin_dp_S3HWDPZ4F0V8NY1YZQA0&ref_=cm_sw_r_ffobk_cso_cp_apin_dp_S3HWDPZ4F0V8NY1YZQA0&social_share=cm_sw_r_ffobk_cso_cp_apin_dp_S3HWDPZ4F0V8NY1YZQA0&bestFormat=true&previewDohEventScheduleTesting=C&csmig=1" target="_blank" rel="noopener noreferrer" className="instagram-button">View on Amazon</a>
            </p>
            <div className="cookbook-images">
              <div className="cookbook-image-container">
                <img src="/1752949881888blob.jpg" alt="1752" className="cookbook-image" />
              </div>
              <div className="cookbook-image-container bb-king-container">
                <img src="/B_B_ King.jpeg" alt="B.B. King" className="cookbook-image bb-king-image" />
                <div className="cookbook-caption">Complements of B.B. King</div>
              </div>
              <div className="cookbook-image-container">
                <img src="/5931071016_7a6c134830_c.jpeg" alt="Cookbook image" className="cookbook-image" />
              </div>
              <div className="cookbook-image-container">
                <img src="/5927352358_dc43899f64_z.jpeg" alt="Cookbook image" className="cookbook-image" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
