import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";
import { useState } from "react";

const characters = [
  {
    id: "joker",
    name: "Джокер",
    movie: "Темный рыцарь",
    images: [
      "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/01.png",
      "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?auto=format&fit=crop&q=80&w=400"
    ],
    shortDescription: "Агент хаоса, который верит в абсурдность порядка и морали."
  },
  {
    id: "tyler-durden",
    name: "Тайлер Дёрден",
    movie: "Бойцовский клуб",
    images: [
      "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/02.png",
      "https://images.unsplash.com/photo-1579983926774-842190c2200d?auto=format&fit=crop&q=80&w=400"
    ],
    shortDescription: "Анархист, выступающий против консьюмеризма и социальных норм."
  },
  {
    id: "morpheus",
    name: "Морфеус",
    movie: "Матрица",
    images: [
      "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/03.png",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=400"
    ],
    shortDescription: "Проводник истины в мире иллюзий."
  },
  {
    id: "v",
    name: "V",
    movie: "V значит Вендетта",
    images: [
      "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/04.png",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=400"
    ],
    shortDescription: "Революционер, борющийся за свободу через идеи и символы."
  },
  {
    id: "yoda",
    name: "Мастер Йода",
    movie: "Звёздные войны",
    images: [
      "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/05.png",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=400"
    ],
    shortDescription: "Мудрый наставник, учащий балансу и внутренней силе."
  },
  {
    id: "terminator",
    name: "T-800",
    movie: "Терминатор 2",
    images: [
      "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/06.png",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=400"
    ],
    shortDescription: "Машина, научившаяся ценности человеческой жизни."
  },
  {
    id: "rick-sanchez",
    name: "Рик Санчез",
    movie: "Рик и Морти",
    images: [
      "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/avatars/07.png",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=400"
    ],
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-deep-black">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2 animate-fade-in">
            Философия киногероев
          </h1>
          <p className="text-foreground/80 mb-8 animate-fade-in">
            Исследуйте мировоззрение самых интересных персонажей кинематографа
          </p>

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
      </main>
    </div>
  );
};

export default Index;
