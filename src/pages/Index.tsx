import CharacterCard from "../components/CharacterCard";
import { Input } from "../components/ui/input";
import { useState } from "react";

const characters = [
  {
    id: "joker",
    name: "Джокер",
    movie: "Темный рыцарь",
    image: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/01.png",
    shortDescription: "Агент хаоса, который верит в абсурдность порядка и морали."
  },
  {
    id: "tyler-durden",
    name: "Тайлер Дёрден",
    movie: "Бойцовский клуб",
    image: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/02.png",
    shortDescription: "Анархист, выступающий против консьюмеризма и социальных норм."
  },
  {
    id: "morpheus",
    name: "Морфеус",
    movie: "Матрица",
    image: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/03.png",
    shortDescription: "Проводник истины в мире иллюзий."
  },
  {
    id: "v",
    name: "V",
    movie: "V значит Вендетта",
    image: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/04.png",
    shortDescription: "Революционер, борющийся за свободу через идеи и символы."
  },
  {
    id: "yoda",
    name: "Мастер Йода",
    movie: "Звёздные войны",
    image: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/05.png",
    shortDescription: "Мудрый наставник, учащий балансу и внутренней силе."
  },
  {
    id: "terminator",
    name: "T-800",
    movie: "Терминатор 2",
    image: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/06.png",
    shortDescription: "Машина, научившаяся ценности человеческой жизни."
  },
  {
    id: "rick-sanchez",
    name: "Рик Санчез",
    movie: "Рик и Морти",
    image: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/07.png",
    shortDescription: "Гениальный ученый, нигилист, считающий вселенную абсурдной и бессмысленной."
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCharacters = characters.filter((character) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      character.name.toLowerCase().includes(searchLower) ||
      character.movie.toLowerCase().includes(searchLower) ||
      character.shortDescription.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-2 animate-fade-in">
          Философия киногероев
        </h1>
        <p className="text-foreground/80 mb-8 animate-fade-in">
          Исследуйте мировоззрение самых интересных персонажей кинематографа
        </p>
        
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Поиск по имени, фильму или описанию..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <p className="text-center text-foreground/60 mt-8">
            Персонажи не найдены
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;