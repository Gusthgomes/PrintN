import { Camera, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';

export default function Header() {
    return (
        <header className="border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                <div className="flex items-center gap-2">
                    <Camera className="h-6 w-6 text-indigo-600" />
                    <h1 className="text-xl font-bold text-foreground">printN</h1>
                </div>


                <div className="hidden md:flex md:items-center md:gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                                    Services
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                        <User className="mr-2 h-4 w-4" />
                        Login
                    </Button>
                </div>

                <div className="flex items-center md:hidden">
                    <Button variant="outline" size="sm" className="mr-2 bg-indigo-600 text-white hover:bg-indigo-700">
                        <User className="mr-2 h-4 w-4" />
                        Login
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                    <line x1="4" x2="20" y1="12" y2="12" />
                                    <line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="grid gap-6 text-lg font-medium">
                                <a href="#" className="flex items-center gap-2 text-lg font-semibold">
                                    <Camera className="h-6 w-6 text-indigo-600" />
                                    <span className="font-bold">printN</span>
                                </a>
                                <a href="#" className="hover:text-indigo-600">Home</a>
                                <a href="#" className="hover:text-indigo-600">Services</a>
                                <a href="#" className="hover:text-indigo-600">About</a>
                                <a href="#" className="hover:text-indigo-600">Contact</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}