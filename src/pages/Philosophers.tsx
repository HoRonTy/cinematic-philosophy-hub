import Header from "@/components/Header";
import PhilosopherCard from "@/components/PhilosopherCard";

const philosophers = [
  {
    id: "nietzsche",
    name: "Фридрих Ницше",
    philosophy: "Нигилизм, Воля к власти",
    occupation: "Философ, филолог-классик, композитор",
    years: "1844-1900",
    image: "https://images.unsplash.com/photo-1583921384364-e691f1102abe?auto=format&fit=crop&q=80&w=400",
    description: "Немецкий мыслитель, классический филолог, композитор, поэт, создатель самобытного философского учения, которое носит подчёркнуто неакадемический характер и отчасти поэтому имеет широкое распространение, выходящее далеко за пределы научно-философского сообщества."
  },
  {
    id: "kafka",
    name: "Франц Кафка",
    philosophy: "Экзистенциализм, Абсурдизм",
    occupation: "Писатель, страховой служащий",
    years: "1883-1924",
    image: "https://images.unsplash.com/photo-1583921384364-e691f1102abe?auto=format&fit=crop&q=80&w=400",
    description: "Немецкоязычный писатель-прозаик, большая часть работ которого была опубликована посмертно. Его произведения, пронизанные абсурдом и страхом перед внешним миром и высшим авторитетом, способные пробуждать в читателе соответствующие тревожные чувства, – уникальное явление в мировой литературе."
  }
];

const Philosophers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-deep-black">
      <Header />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2 animate-fade-in">
            Философы
          </h1>
          <p className="text-foreground/80 mb-8 animate-fade-in">
            Исследуйте мировоззрение величайших мыслителей человечества
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophers.map((philosopher) => (
              <PhilosopherCard key={philosopher.id} {...philosopher} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Philosophers;