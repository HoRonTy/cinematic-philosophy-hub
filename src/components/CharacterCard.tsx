import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface CharacterCardProps {
  id: string;
  name: string;
  images: string[];
  movie: string;
  shortDescription: string;
}

const CharacterCard = ({ id, name, images, movie, shortDescription }: CharacterCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  const getCharacterBackground = (characterId: string) => {
    const gradients: Record<string, string> = {
      joker: "bg-gradient-to-br from-joker-dark to-purple-900",
      "tyler-durden": "bg-gradient-to-br from-tyler-dark to-red-900",
      morpheus: "bg-gradient-to-br from-morpheus-dark to-gray-900",
      v: "bg-gradient-to-br from-v-dark to-red-950",
      yoda: "bg-gradient-to-br from-yoda-dark to-green-900",
      terminator: "bg-gradient-to-br from-terminator-dark to-blue-900",
      "rick-sanchez": "bg-gradient-to-br from-rick-dark to-cyan-900",
    };
    return gradients[characterId] || "bg-gradient-to-br from-card to-gray-800";
  };

  return (
    <Link 
      to={`/character/${id}`}
      className={`block ${getCharacterBackground(id)} rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 animate-fade-in h-[500px]`}
    >
      <div className="relative h-64 flex-shrink-0">
        {images.length > 1 ? (
          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="w-full h-full">
                  <div className="aspect-[16/9] w-full h-full">
                    <img 
                      src={image} 
                      alt={`${name} ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="aspect-[16/9] w-full h-full">
            <img 
              src={images[0]} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-black to-transparent p-4">
        <h2 className="text-xl font-bold text-foreground mb-2">{name}</h2>
        <p className="text-sm text-foreground/80 mb-4">{movie}</p>
      </div>
      <div className="p-4 mt-2">
        <p className="text-foreground/80 line-clamp-3">{shortDescription}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;