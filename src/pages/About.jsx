const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6  items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Experience
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-3xl font-bold tracking-widest">
              Furni Zone
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to Furnizone, your ultimate destination for stylish and
        affordable furniture. Whether you're looking to revamp your living room,
        upgrade your bedroom, or furnish your entire home, we offer a wide range
        of high-quality pieces to suit every taste and budget. Explore our
        curated collections and find the perfect blend of comfort and elegance
        to transform your space into a haven of relaxation and style. Shop with
        confidence at Furnizone, where quality meets affordability
      </p>
    </>
  );
};
export default About;
