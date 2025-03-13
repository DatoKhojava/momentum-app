"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = useMediaQuery("(max-width: 768px)")

    return (
        <header className="w-full flex justify-center border-b bg-white">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-600">Momentum</span>
                    <span className="text-purple-600">⌛</span>
                </Link>

                {isMobile ? (
                    <>
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>

                        {isMenuOpen && (
                            <div className="absolute inset-x-0 top-16 z-50 bg-white p-4 shadow-lg md:hidden">
                                <div className="flex flex-col space-y-4">
                                    <Button variant="outline" className="w-full justify-center">
                                        თანამშრომლის შეყვანა
                                    </Button>
                                    <Button className="w-full justify-center bg-purple-600 hover:bg-purple-700">
                                        <span className="mr-1">+</span> შეკვეთის ახალი თავფურცელი
                                    </Button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex items-center gap-4">
                        <Button variant="outline">თანამშრომლის შეყვანა</Button>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                            <span className="mr-1">+</span> შეკვეთის ახალი თავფურცელი
                        </Button>
                    </div>
                )}
            </div>
        </header>
    )
}

