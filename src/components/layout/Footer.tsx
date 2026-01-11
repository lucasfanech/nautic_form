import Link from 'next/link';
import Image from 'next/image';
import { Anchor, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand/About */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative h-8 w-8">
                                <Image
                                    src="/logo.png"
                                    alt="Nautic' Forme Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-xl font-bold">Nautic&apos; Forme</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Centre de formation agréé pour les permis bateau et stages de perfectionnement.
                            Naviguez en toute sécurité avec nos experts passionnés.
                        </p>
                    </div>

                    {/* Formations */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-teal">Formations</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/permis#cotier" className="hover:text-white transition-colors">Permis Côtier</Link></li>
                            <li><Link href="/permis#fluvial" className="hover:text-white transition-colors">Permis Fluvial</Link></li>
                            <li><Link href="/permis#hauturier" className="hover:text-white transition-colors">Permis Hauturier</Link></li>
                            <li><Link href="/perfectionnement" className="hover:text-white transition-colors">Stages pratique</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-teal">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-teal shrink-0" />
                                <span>Base Nautique<br />06000 Nice</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-teal shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:0659712934" className="hover:text-white">06 59 71 29 34</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-teal shrink-0" />
                                <a href="mailto:nauticforme@gmail.com" className="hover:text-white">nauticforme@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Horaires */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-teal">Horaires</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex justify-between">
                                <span>Lundi - Dimanche</span>
                                <span>9h - 12h</span>
                            </li>
                            <li className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                                <span>Après-midi</span>
                                <span>14h - 18h</span>
                            </li>
                            <li className="text-xs text-gray-500 mt-4">
                                Sur rendez-vous en dehors de ces horaires.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Nautic&apos; Forme. Tous droits réservés.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
