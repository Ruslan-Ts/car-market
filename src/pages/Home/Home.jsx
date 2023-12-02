import Loader from 'components/Loader';
import { Footer, Header, Section } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

const Home = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops... Something went wrong...</p>}
      <div>
        <Header>
          <h1>Welcome to Our Car Rental Service</h1>
          <p>Discover the Joy of Travel with Our Premium Car Fleet</p>
        </Header>

        <Section>
          <h2>Why Choose Us?</h2>
          <p>
            At our Car Rentals, we strive to provide you with a seamless and
            enjoyable car rental experience. Whether you're planning a weekend
            getaway or a long road trip, we have the perfect vehicle for every
            occasion.
          </p>
          <ul>
            <li>Wide Selection of Quality Cars</li>
            <li>Affordable Rental Rates</li>
            <li>Flexible Rental Periods</li>
            <li>24/7 Customer Support</li>
          </ul>
        </Section>

        <Section>
          <h2>How It Works</h2>
          <p>
            Renting a car with us is quick and easy. Follow these simple steps
            to get started:
          </p>
          <ol>
            <li>Explore Our Fleet</li>
            <li>Select Your Preferred Car</li>
            <li>Choose Rental Dates</li>
            <li>Complete the Reservation</li>
            <li>Pick Up and Enjoy Your Ride!</li>
          </ol>
        </Section>

        <Section>
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Our friendly customer support
            team is here to help. Contact us at
            <a href="tel:+380730000000">&nbsp;+38073-000-00-00</a> or email us
            at
            <a href="mailto:info@carforrent.com">&nbsp;info@carforrent.com</a>.
          </p>
        </Section>

        <Footer>
          <p>Follow Us on Social Media for the Latest Updates and Promotions</p>
        </Footer>
      </div>
    </>
  );
};

export default Home;
