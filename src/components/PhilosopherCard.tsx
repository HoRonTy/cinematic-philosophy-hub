interface PhilosopherCardProps {
  id: string;
  name: string;
  philosophy: string;
  occupation: string;
  years: string;
  image: string;
  description: string;
}

const PhilosopherCard = ({ name, philosophy, occupation, years, image, description }: PhilosopherCardProps) => {
  return (
    <div className="bg-gradient-to-br from-card to-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 h-[600px]">
      <div className="relative h-80">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-black to-transparent p-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">{name}</h2>
          <p className="text-lg text-foreground/80">{years}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-1">Философия</h3>
          <p className="text-foreground/80">{philosophy}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-1">Род деятельности</h3>
          <p className="text-foreground/80">{occupation}</p>
        </div>
        <p className="text-foreground/80 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default PhilosopherCard;