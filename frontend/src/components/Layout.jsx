const Layout = ({ children, itemsCenter }) => {
  return (
    <div
      className={`relative flex justify-center min-h-screen overflow-hidden bg-purple-400 ${
        itemsCenter && "items-center"
      }`}
    >
      <div className="absolute hidden transform rotate-45 bg-purple-300 w-60 h-60 rounded-xl -top-5 -left-16 md:block"></div>
      <div className="absolute hidden w-48 h-48 transform bg-purple-300 rounded-xl -bottom-6 -right-10 rotate-12 md:block"></div>
      {children}
      <div className="absolute top-0 hidden w-40 h-40 bg-purple-300 rounded-full right-12 md:block" />
      <div className="absolute hidden w-20 h-40 transform rotate-45 bg-purple-300 rounded-full bottom-20 left-10 md:block"></div>
    </div>
  );
};
export default Layout;
