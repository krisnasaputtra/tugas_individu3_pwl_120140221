const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow">
      <div className="w-full max-w-screen-xl mx-auto py-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center mb-0">
            <span className="text-white text-2xl font-semibold">Movie App</span>
          </a>
          <ul className="flex flex-wrap items-center mb-0 text-sm font-medium text-gray-400">
            <li>
              <a href="/about" className="mr-6 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-8 mx-auto border-gray-700" />
        <span className="block text-sm text-gray-400 text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Movie App
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
