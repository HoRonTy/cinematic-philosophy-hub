import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Suggest = () => {
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, напишите вашу идею",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Здесь можно добавить логику отправки данных на бэкенд
    await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
    
    toast({
      title: "Спасибо!",
      description: "Ваша идея была успешно отправлена",
    });
    
    setSuggestion("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-accent hover:underline inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Вернуться на главную
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2 animate-fade-in">
          Предложить идею
        </h1>
        <p className="text-foreground/80 mb-8 animate-fade-in">
          Расскажите, какого персонажа вы хотели бы увидеть на сайте и почему его философия вам интересна
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
          <Textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Опишите вашу идею..."
            className="min-h-[200px]"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить идею"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Suggest;