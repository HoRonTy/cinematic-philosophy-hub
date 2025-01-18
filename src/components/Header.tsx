import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { LightbulbIcon, BookOpenIcon, FilmIcon } from "lucide-react";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

const Header = ({ searchQuery = "", onSearchChange }: HeaderProps) => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <Button variant="link" asChild className="text-2xl font-bold hover:no-underline hover:text-accent transition-colors p-0">
          <Link to="/">
            Filosofy
          </Link>
        </Button>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Input
            type="search"
            placeholder="Поиск по имени, фильму или описанию..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="max-w-md"
          />
          
          <Button asChild variant="outline">
            <Link to="/" className="flex items-center gap-2">
              <FilmIcon className="w-4 h-4" />
              Киногерои
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/philosophers" className="flex items-center gap-2">
              <BookOpenIcon className="w-4 h-4" />
              Философы
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/suggest" className="flex items-center gap-2">
              <LightbulbIcon className="w-4 h-4" />
              У меня есть идея
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;