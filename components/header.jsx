import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/themeToggle'; // If not default exported, use named import

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Site Title */}
        <a href='/#hero' className="text-xl font-bold tracking-tight">Lee Paulison Jr</a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/#about" className="hover:text-foreground">About</a>
          <a href="/#projects" className="hover:text-foreground">Projects</a>
          <a href="/contact" className="hover:text-foreground">Contact</a>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav + Theme Toggle */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8} className="w-40">
              <DropdownMenuItem asChild>
                <a href="#about">About</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#projects">Projects</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact">Contact</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
