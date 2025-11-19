const NewsletterSignup = () => {
  return (
    <div className="bg-gray-100 p-4 text-center">
      <h2 className="text-lg font-bold">Sign Up for Our Newsletter</h2>
      <input type="email" placeholder="Enter your email" className="border p-2 my-2" />
      <button className="bg-blue-500 text-white p-2">Subscribe</button>
    </div>
  );
};

export default NewsletterSignup;
