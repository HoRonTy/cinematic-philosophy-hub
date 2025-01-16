import CharacterCard from "../components/CharacterCard";

const characters = [
  {
    id: "joker",
    name: "Джокер",
    movie: "Темный рыцарь",
    image: "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?auto=format&fit=crop&q=80&w=400",
    shortDescription: "Агент хаоса, который верит в абсурдность порядка и морали."
  },
  {
    id: "tyler-durden",
    name: "Тайлер Дёрден",
    movie: "Бойцовский клуб",
    image: "https://images.unsplash.com/photo-1579983926774-842190c2200d?auto=format&fit=crop&q=80&w=400",
    shortDescription: "Анархист, выступающий против консьюмеризма и социальных норм."
  },
  {
    id: "morpheus",
    name: "Морфеус",
    movie: "Матрица",
    image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=400",
    shortDescription: "Проводник истины в мире иллюзий."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-2 animate-fade-in">
          Философия киногероев
        </h1>
        <p className="text-foreground/80 mb-8 animate-fade-in">
          Исследуйте мировоззрение самых интересных персонажей кинематографа
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;