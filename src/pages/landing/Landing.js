import './Landing.css';
import About from '../../components/about/About';
import Products from '../../components/products/Products';
import DiscountBanner from '../../components/discountBanner/DiscountBanner';
import PromoBanner from '../../components/promoBanner/PromoBanner';

function Landing() {
  return (
    <div>
      <About/>
      <PromoBanner/>
      <Products/>
      <DiscountBanner/>
    </div>
  );
}

export default Landing;
