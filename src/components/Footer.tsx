// Footer Component. Currently wrapped in div root, would cause to not be fixed
const Footer = () => {
  return (
    <>
    <footer className="py-3 my-4 bg-black">
    <div className="nav justify-content-center border-bottom pb-3 mb-3">
      <p className="nav-item nav-link px-2 text-muted">Giphy API Project Built With React.js And Typescript<span>&#9823;</span>

</p>
    </div >
    <p className="text-center text-muted">© 2022 Daniel, Ikekwem</p>
    <p className="text-center text-muted">Made with <span>&#128156;</span>

</p>
  </footer>
  </>);
  
};
export default Footer;