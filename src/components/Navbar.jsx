function Navbar() {
  return (
    <>
    <footer className="w-full  mt-auto bg-gray-100 mt-10 border-t p-4 flex justify-between text-sm">
      
      <div className="w-full bg-gray-100 px-4 py-3 flex justify-between items-center">
      <span className="text-sm">Copyright © SohClick Technology</span>

       <nav className="flex space-x-4">
        <a href="/" className="text-black-500">Home</a>
        <a href="/" className="text-black-500">Privacy Policy</a>
        <a href="/" className="text-black-500">Contact Us</a>
        </nav>

      </div>
    </footer>
    </>
  );
}
export default Navbar;
