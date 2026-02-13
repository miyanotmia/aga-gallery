
import './home.scss';

function Home() {
  return (
    <div className="home-page">
      <section className="hero container">
        <img src="/images/Anything Goes Art-logo.png" alt="Anything-goes-art-logo-with artworks" className='AGA-Banner'/>
        
      </section>
      


      <section className="slideshow container">
        <div className='album collection'>
          <img src='/images/both_members_of_this_club_George-Bellows.jpg' alt='Photo by George Bellows'className='album-img'></img>
          </div>
        
        <div className='album collection'><img src="/images/the_church_of_souain_Felix-Vallotton.jpg" className='album-img'></img></div>
        
        <div className='album collection'><img src="/images/nude_women_with_a_child_in_the_forest_2012.92.695.jpg" className='album-img'></img></div>

        {/*<div className='album collection'><img src="/images/nude_women_with_a_child_in_the_forest_2012.92.695.jpg" className='album-img'></img></div>*/}
       
      </section>

      
    </div>
  );
}

export default Home;