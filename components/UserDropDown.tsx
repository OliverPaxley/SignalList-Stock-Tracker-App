'use client'
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItem from "./NavItems";

const UserDropDown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = { name : 'Oliver Paxley', email: 'srin1@myseneca.ca' } ;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild> 
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-400">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/175280273?v=4" alt="User avatar" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="text-gray-400 w-56">
                {/* User Info Section */}
                <DropdownMenuLabel>
                    <div className="flex items-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/175280273?v=4" alt="User avatar" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-400">
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator className="bg-gray-600"/>
                
                {/* Log Out Button */}
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer hover:text-yellow-400">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
                <nav className="sm:hidden">
                    <NavItem />
                </nav>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropDown