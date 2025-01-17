import { Link } from "react-router-dom";

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  movie: string;
  shortDescription: string;
}

const CharacterCard = ({ id, name, image, movie, shortDescription }: CharacterCardProps) => {
  // Определяем цвет фона для каждого персонажа
  const getCharacterBackground = (characterId: string) => {
    const colors: Record<string, string> = {
      joker: "bg-joker-dark",
      "tyler-durden": "bg-tyler-dark",
      morpheus: "bg-morpheus-dark",
      v: "bg-v-dark",
      yoda: "bg-yoda-dark",
      terminator: "bg-terminator-dark",
      "rick-sanchez": "bg-rick-dark",
    };
    return colors[characterId] || "bg-card";
  };

  return (
    <Link 
      to={`/character/${id}`}
      className={`block ${getCharacterBackground(id)} hover:bg-card-hover rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 animate-fade-in`}
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-black to-transparent p-4">
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