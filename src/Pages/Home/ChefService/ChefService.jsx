const ChefService = () => {
  return (
    <div className="relative w-full pb-[56.25%] my-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/C60z6Zm/chef-service.jpg")',
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="md:w-9/12 bg-white p-6">
            <h1 className="text-black text-center text-xl md:text-4xl font-semibold uppercase mb-8">
              epicurean haven
            </h1>
            <p className="text-center">
              We offer an exquisite culinary experience, combining the expertise
              of skilled chefs with a focus on delivering exceptional flavors
              and presentation. With a passion for gastronomy and attention to
              detail to create memorable dining moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
