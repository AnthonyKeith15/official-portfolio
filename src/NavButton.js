import  Icons  from "./Icons";
function NavButton({ pageName, buttonColor, activePage, handlePageClick }) {
  return (
    <button
      key={pageName}
      id={`button-${pageName}`}
      style={{ backgroundColor: buttonColor }}
      className={activePage === pageName ? 'active' : ''}
      onClick={() => handlePageClick(pageName, buttonColor)}
    >
      {pageName === 'Home' ? (
        <>
          <h5>{pageName}</h5>
          <Icons />
        </>
      ) : (
        <h5>{pageName}</h5>
      )}
    </button>
  );
}

export default NavButton;
