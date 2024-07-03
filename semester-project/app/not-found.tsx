const NotFoundPage = () => {
  return (
    <section className="container mx-auto my-8 lg:my-2 px-4 lg:px-0 max-w-screen-lg">
  <div className="flex flex-col items-center justify-center gap-8 max-w-xl mx-auto lg:mx-0">
    <h1 className="font-serif text-5xl text-center lg:text-center xl:text-6xl font-extrabold text-brand-blue-50 whitespace-break-spaces">
      404 - Not Found
    </h1>
    
    <p className="font-roboto text-brand-grey-900 text-center lg:text-left xl:text-lg whitespace-break-spaces">
      Sorry, the page you are looking for does not exist.
    </p>
  </div>
</section>

  );
};

export default NotFoundPage;
