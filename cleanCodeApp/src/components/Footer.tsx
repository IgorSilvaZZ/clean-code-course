export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>Copyright &copy; Igor Silva {currentYear}</footer>
    </>
  );
};
