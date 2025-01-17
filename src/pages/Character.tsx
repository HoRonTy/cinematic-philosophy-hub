import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

const charactersData = {
  "joker": {
    name: "Джокер",
    movie: "Темный рыцарь",
    image: "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?auto=format&fit=crop&q=80&w=400",
    philosophy: "Джокер представляет собой воплощение хаоса и анархии. Он считает, что цивилизованность - это лишь маска, которую люди носят, и достаточно одного плохого дня, чтобы самый законопослушный гражданин превратился в преступника.",
    quotes: [
      "Безумие, как гравитация: нужен лишь небольшой толчок.",
      "Я верю, что всё, что не убивает тебя, просто делает тебя... страннее.",
    ]
  },
  "tyler-durden": {
    name: "Тайлер Дёрден",
    movie: "Бойцовский клуб",
    image: "https://images.unsplash.com/photo-1579983926774-842190c2200d?auto=format&fit=crop&q=80&w=400",
    philosophy: "Тайлер Дёрден выступает против современного консьюмеризма и того, как общество определяет личность через материальные ценности. Он продвигает идею освобождения через разрушение и возвращения к более примитивному, но аутентичному существованию.",
    quotes: [
      "Ты не твоя работа. Ты не деньги в твоем банке. Ты не машина, которую ты водишь. Ты не содержимое твоего кошелька.",
      "Лишь потеряв всё до конца, мы обретаем свободу."
    ]
  },
  "morpheus": {
    name: "Морфеус",
    movie: "Матрица",
    image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=400",
    philosophy: "Морфеус олицетворяет поиск истины и освобождение сознания. Он верит, что реальность может быть иллюзией, и что истинная свобода начинается с принятия этой возможности.",
    quotes: [
      "Я могу показать тебе дверь, но войти в неё ты должен сам.",
      "Ты должен понять, что большинство этих людей не готовы быть отключенными от системы."
    ]
  }
};

interface Comment {
  id: string;
  text: string;
  date: string;
}

const Character = () => {
  const { id } = useParams();
  const character = charactersData[id as keyof typeof charactersData];
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Загрузка комментариев из localStorage при монтировании компонента
  useEffect(() => {
    if (id) {
      const savedComments = localStorage.getItem(`comments-${id}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [id]);

  // Сохранение комментариев в localStorage при их изменении
  useEffect(() => {
    if (id) {
      localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
    }
  }, [comments, id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, напишите комментарий",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
    
    const newComment = {
      id: Date.now().toString(),
      text: comment,
      date: new Date().toLocaleDateString(),
    };
    
    setComments(prev => [newComment, ...prev]);
    setComment("");
    setIsSubmitting(false);
    
    toast({
      title: "Готово!",
      description: "Ваш комментарий добавлен",
    });
  };

  if (!character) {
    return (
      <div className="min-h-screen bg-background p-8 text-center">
        <h1 className="text-4xl text-foreground mb-4">Персонаж не найден</h1>
        <Link to="/" className="text-accent hover:underline">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-accent hover:underline inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Вернуться на главную
        </Link>
        
        <div className="bg-card rounded-lg overflow-hidden animate-fade-in">
          <div className="h-96 relative">
            <img 
              src={character.image} 
              alt={character.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-8">
              <h1 className="text-4xl font-bold text-foreground">{character.name}</h1>
              <p className="text-xl text-accent">{character.movie}</p>
            </div>
          </div>
          
          <div className="p-8 animate-slide-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">Философия</h2>
            <p className="text-foreground/80 mb-8">{character.philosophy}</p>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">Цитаты</h2>
            <div className="space-y-4 mb-8">
              {character.quotes.map((quote, index) => (
                <blockquote 
                  key={index}
                  className="border-l-4 border-accent pl-4 py-2 text-foreground/80 italic"
                >
                  "{quote}"
                </blockquote>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Комментарии</h2>
            <form onSubmit={handleCommentSubmit} className="space-y-4 mb-8">
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Оставьте свой комментарий..."
                className="min-h-[100px]"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить комментарий"}
              </Button>
            </form>

            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-card/50 p-4 rounded-lg">
                  <p className="text-foreground/80 mb-2">{comment.text}</p>
                  <p className="text-sm text-foreground/60">{comment.date}</p>
                </div>
              ))}
              {comments.length === 0 && (
                <p className="text-center text-foreground/60">
                  Пока нет комментариев. Будьте первым!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;