"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Permis Côtier', href: '/permis#cotier' },
        { name: 'Permis Fluvial', href: '/permis#fluvial' },
        { name: 'Permis Hauturier', href: '/permis#hauturier' },
        { name: 'Perfectionnement', href: '/perfectionnement' },
        { name: 'Tarifs', href: '/tarifs' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-10 w-10">
                            <Image
                                src="/logo.png"
                                alt="Nautic' Forme Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-charcoal">Nautic&apos; Forme</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-charcoal hover:text-ocean transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/contact">
                            <Button size="sm">Contact</Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-charcoal"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-base font-medium text-charcoal hover:text-ocean py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                <Button className="w-full">Contact</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
