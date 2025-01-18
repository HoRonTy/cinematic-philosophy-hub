import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Home } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const charactersData = {
  "joker": {
    name: "Джокер",
    movie: "Темный рыцарь",
    images: [
      "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=400",
    ],
    philosophy: "Джокер представляет собой воплощение хаоса и анархии. Он считает, что цивилизованность - это лишь маска, которую люди носят, и достаточно одного плохого дня, чтобы самый законопослушный гражданин превратился в преступника.",
    quotes: [
      "Безумие, как гравитация: нужен лишь небольшой толчок.",
      "Я верю, что всё, что не убивает тебя, просто делает тебя... страннее.",
    ]
  },
  "tyler-durden": {
    name: "Тайлер Дёрден",
    movie: "Бойцовский клуб",
    images: [
      "https://images.unsplash.com/photo-1579983926774-842190c2200d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1579983926774-842190c2200d?auto=format&fit=crop&q=80&w=400",
    ],
    philosophy: "Тайлер Дёрден выступает против современного консьюмеризма и того, как общество определяет личность через материальные ценности. Он продвигает идею освобождения через разрушение и возвращения к более примитивному, но аутентичному существованию.",
    quotes: [
      "Ты не твоя работа. Ты не деньги в твоем банке. Ты не машина, которую ты водишь. Ты не содержимое твоего кошелька.",
      "Лишь потеряв всё до конца, мы обретаем свободу."
    ]
  },
  "morpheus": {
    name: "Морфеус",
    movie: "Матрица",
    images: [
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=400",
    ],
    philosophy: "Морфеус олицетворяет поиск истины и освобождение сознания. Он верит, что реальность может быть иллюзией, и что истинная свобода начинается с принятия этой возможности.",
    quotes: [
      "Я могу показать тебе дверь, но войти в неё ты должен сам.",
      "Ты должен понять, что большинство этих людей не готовы быть отключенными от системы."
    ]
  },
  "rick-sanchez": {
    name: "Рик Санчез",
    movie: "Рик и Морти",
    images: [
      "https://images.unsplash.com/photo-1579983926774-842190c2200d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1579983926774-842190c2200d?auto=format&fit=crop&q=80&w=400",
    ],
    philosophy: "Рик — гениальный ученый, который благодаря своим изобретениям получил доступ к бесконечным вселенным и измерениям, что привело его к осознанию абсурдности и бессмысленности существования. Он понимает, что в бесконечной мультивселенной нет никакой высшей цели или смысла, а все действия и стремления людей в конечном итоге не имеют значения. Это делает его философию глубоко нигилистической, так как он отрицает любые объективные ценности или моральные принципы. Однако, несмотря на это, Рик продолжает жить и действовать, что можно рассматривать как проявление экзистенциалистского подхода: он сам создает свой смысл в бессмысленном мире, даже если этот смысл заключается лишь в удовлетворении собственных желаний и интересов. Рик часто демонстрирует крайний скептицизм по отношению к общественным нормам, религии, морали и даже науке, считая их ограниченными и иллюзорными. Он открыто высмеивает попытки людей найти смысл или оправдать свои действия, считая их наивными и глупыми. Его цинизм проявляется в том, что он видит корысть, эгоизм и глупость в основе большинства человеческих поступков, включая свои собственные. При этом Рик не отрицает, что он сам является частью этой системы, и часто признает, что его действия так же бессмысленны, как и действия других. Одной из ключевых особенностей философии Рика является его отношение к свободе. Он считает себя свободным от любых ограничений, будь то законы физики, моральные нормы или эмоциональные привязанности. Однако эта свобода оборачивается для него одиночеством и внутренней пустотой, так как он не может найти ничего, что могло бы дать ему подлинное удовлетворение. Его отношения с семьей, особенно с Морти, показывают, что, несмотря на все свои попытки отрицать важность эмоций и связей, он все же не может полностью от них отказаться. Это создает внутренний конфликт в его философии: с одной стороны, он утверждает, что ничего не имеет значения, а с другой — его действия часто говорят о том, что он все же ценит некоторые аспекты жизни, даже если не признает этого открыто. Философия Рика Санчеза — это философия человека, который столкнулся с бесконечностью и хаосом мироздания и пришел к выводу, что единственный способ существовать в таком мире — это принимать его абсурдность и жить в соответствии с собственными правилами, даже если эти правила кажутся бессмысленными или аморальными. Его взгляды заставляют зрителей задуматься о природе смысла, свободы, морали и человеческих отношений, но при этом оставляют больше вопросов, чем ответов, что делает его персонажа одновременно притягательным и противоречивым.",
    quotes: [
      "Ничто не имеет значения, никто не важен, никто никому не нужен, все умрут, приходите смотреть телевизор.",
      "Чтобы быть честным, я не знаю, зачем я это делаю. Я просто знаю, что я единственный во вселенной, кто может."
    ]
  },
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

  useEffect(() => {
    if (id) {
      const savedComments = localStorage.getItem(`comments-${id}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [id]);

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
        <h1 className="text-4xl text-foreground mb-4">Персонаж в разработке</h1>
        <p className="text-foreground/80 mb-6">Мы работаем над добавлением этого персонажа. Загляните позже!</p>
        <Button asChild variant="outline">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            На главную
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
        </Button>
        
        <div className="bg-gradient-to-br from-card to-gray-800 rounded-lg overflow-hidden animate-fade-in">
          <div className="h-96 relative">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {character.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img 
                      src={image} 
                      alt={`${character.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {character.images.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-8">
              <h1 className="text-4xl font-bold text-foreground">{character.name}</h1>
              <p className="text-xl text-foreground/80">{character.movie}</p>
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
        
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Character;