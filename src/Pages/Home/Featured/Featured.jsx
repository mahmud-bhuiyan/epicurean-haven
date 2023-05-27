import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/t8GvCqt/featured.jpg')] pt-8 bg-cover bg-center my-16 bg-fixed text-white">
      <div>
        <SectionTitle
          subHeading="Check it out"
          heading="FROM OUR MENU"
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center md:gap-10 p-16 bg-slate-800 opacity-70 rounded">
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/t8GvCqt/featured.jpg"
            alt=""
          />
        </div>
        <div className="mt-4 md:mt-0 space-y-4">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="uppercase btn btn-outline  btn-info border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
