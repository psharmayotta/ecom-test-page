import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">FashionStore</Link>
        <nav>
          <Link href="/shop" className="mx-4">Shop</Link>
          <Link href="/about" className="mx-4">About</Link>
          <Link href="/contact" className="mx-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
