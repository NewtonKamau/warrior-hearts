import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Dumbbell className="h-8 w-8" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              WarriorHearts
            </span>
          </motion.div>

          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {[
                  "Home",
                  "About",
                  "Services",
                  "Remote",
                  "BMI",
                  "Team",
                  "Gallery",
                  "Testimonials",
                  "Contact",
                ].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
