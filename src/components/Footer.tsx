import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 FashionStore. All Rights Reserved.</p>
        <div className="flex justify-center mt-2">
          <Link href="#" className="mx-2">Facebook</Link>
          <Link href="#" className="mx-2">Instagram</Link>
          <Link href="#" className="mx-2">Twitter</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
