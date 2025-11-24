export const SocialProof = () => {
  const brands = [
    "Brand One",
    "Brand Two", 
    "Brand Three",
    "Brand Four",
    "Brand Five"
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8 text-lg">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="text-2xl font-semibold text-muted opacity-60 hover:opacity-100 transition-opacity"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
