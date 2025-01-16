import { Link } from "react-router-dom";

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  movie: string;
  shortDescription: string;
}

const CharacterCard = ({ id, name, image, movie, shortDescription }: CharacterCardProps) => {
  return (
    <Link 
      to={`/character/${id}`}
      className="block bg-card hover:bg-card-hover rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 animate-fade-in"
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
          <h2 className="text-xl font-bold text-foreground">{name}</h2>
          <p className="text-sm text-accent">{movie}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-foreground/80">{shortDescription}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;