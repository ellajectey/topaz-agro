import './Navbar.css';

function Navbar({setPageInView}) {
  return (
    <div>
      Our Navbar
      <button onClick={() => {setPageInView('Landing Page')}}>Home</button>
      <button onClick={() => {setPageInView('Seller Page')}}>Go to seller page</button>
    </div>
  );
}

export default Navbar;
