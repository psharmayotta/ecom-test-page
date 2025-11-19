const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">Latest Fashion Trends</h1>
      </div>
    </section>
  );
};

export default Hero;
