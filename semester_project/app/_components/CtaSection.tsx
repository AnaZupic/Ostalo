import Image from "next/image";
import Button from "@/components/Button";
import image from "@/public/cta/98bf637c-c097-4fb8-b21c-9158b3d28847.jpg";

const CtaSection = () => (
  <div className="bg-brand-grey-600 w-full">
    <section className="pb-8 lg:container flex flex-wrap justify-center items-center gap-10 w-full ">
      <div className="relative h-96 w-full lg:h-80 lg:w-80">
        <Image
          src={image}
          placeholder="blur"
          alt={"CTA image"}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="lg:rounded-lg"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="px-5 lg:px-0 flex flex-col gap-5 max-w-lg">
        <div>
          
          <h1 className="hidden sm:block font-serif text-3xl font-extrabold text-brand-blue-50">
            Mislav Karoglan
          </h1>
          <h4 className="font-roboto text-xl text-brand-grey-900">
            Coach of Hajduk
          </h4>
        </div>
        <p className="font-roboto text-brand-grey-900 whitespace-break-spaces">
        The current coach of Hajduk in Split, 
        <br />brings a fresh perspective and passion to the game. 
        <br />His tactical discipline and emphasis on team spirit 
        bring revitalization to the club, 
        promising an exciting future for Split's football scene.
        </p>
        <p></p>
        <Button blue className="text-base">
          Read more
        </Button>
      </div>
    </section>
  </div>
);

export default CtaSection;
