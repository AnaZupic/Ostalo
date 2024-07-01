export const metadata = {
  title: "Contact",
};



export default function Contact() {
  return (
    <section className="container flex justify-between items-center gap-10 w-screen mb-8">
      <div className="flex flex-col justify-start gap-5 max-w-xl m-auto lg:m-0">
        <h1 className="font-serif text-5xl text-center lg:text-left xl:text-6xl font-extrabold text-brand-blue-50 whitespace-break-spaces">
          Contact Us
        </h1>
        <br />
        <p className="font-roboto text-brand-grey-900 text-center lg:text-left xl:text-lg whitespace-break-spaces">
          Thank you for exploring{" "}
          <span className="font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap">
            hajduk story.
          </span>
          <br />
          <br /> If you have any comments or useful information that we can post, feel free to contact us.
          <br /> Also, if you have any photos from Hajduk's matches, share them with us via WhatsApp!
        </p>
      </div>
      <div className="hidden lg:block flex-shrink-0" style={{ marginTop: '40px', position: 'relative' }}>
        <div
          className="bg-white rounded-md p-6 shadow-md"
          style={{
            borderRadius: '15px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span className="block font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap">
            E-mail:
          </span>
          <span className="font-roboto text-brand-grey-900 text-center lg:text-left xl:text-lg whitespace-break-spaces">
            hajdukstory@gmail.com
          </span>
          <br />
          <br />
          <span className="block font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap">
            WhatsApp:
          </span>
          <span className="font-roboto text-brand-grey-900 text-center lg:text-left xl:text-lg whitespace-break-spaces">
            0918885656
          </span>
        </div>
        <div
          className="absolute bg-white rounded-md shadow-md"
          style={{
            width: 'calc(100% + 40px)',
            height: 'auto',
            top: '100%',
            left: '-20px',
            borderRadius: '15px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        ></div>
      </div>
    </section>
  );
}
