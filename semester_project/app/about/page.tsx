export const metadata = {
  title: "About",
};


export default function About() {
  return (
    <section className="container mx-auto my-8 lg:my-2 px-4 lg:px-0 max-w-screen-lg">
      <h1 className="font-serif text-5xl text-center lg:text-left xl:text-6xl font-extrabold text-brand-blue-50">
        About Us
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 mb-8 lg:pr-12">
          <div className="mb-8 mt-16 p-4 bg-white rounded shadow">
            <span className="font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap block mb-2">
              Who We Are
            </span>
            <p className="font-roboto text-brand-grey-900 whitespace-break-spaces">
              Hajduk Story is more than just a fan page; it's a dedicated community of passionate supporters, bringing you the latest news, updates, and stories about the legendary football club, Hajduk Split. Our mission is to create a hub where fans can connect, celebrate, and stay informed about everything related to Hajduk.
            </p>
          </div>

          <div className="mb-8 p-4 bg-white rounded shadow">
            <span className="font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap block mb-2">
              What We Offer
            </span>
            <p className="font-roboto text-brand-grey-900 whitespace-break-spaces">
              Stay ahead of the game with our real-time news and updates. From match analyses to exclusive interviews, we cover every aspect of Hajduk Split's journey.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="mb-8 mt-16 p-4 bg-white rounded shadow">
            <span className="font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap block mb-2">
              Fan Engagement
            </span>
            <p className="font-roboto text-brand-grey-900 whitespace-break-spaces">
              Join our community of Hajduk fans from around the world. Share your thoughts, experiences, and passion for the club.
            </p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <span className="font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap block mb-2">
              Our Commitment
            </span>
            <p className="font-roboto text-brand-grey-900 whitespace-break-spaces">
              At Hajduk Story, we are committed to delivering accurate, reliable, and engaging content. Our team of dedicated writers and contributors ensures that you get the latest scoop while fostering a sense of unity among Hajduk fans globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}















