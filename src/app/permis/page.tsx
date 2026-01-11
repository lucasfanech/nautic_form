import { Metadata } from "next";
import Link from "next/link";
import { Anchor, Ship, MapPin, CheckCircle2, ArrowRight, Clock, Users } from "lucide-react";
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: "Permis Bateau (Côtier, Fluvial, Hauturier) - Nautic' Forme",
    description: "Passez votre permis bateau avec Nautic' Forme. Formation agréée pour permis côtier, fluvial et extension hauturière.",
};

export default function PermisPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Header */}
            <section className="bg-ocean text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Formations Permis Bateau</h1>
                    <p className="text-xl max-w-2xl mx-auto text-ocean-light">
                        Des programmes complets et certifiants pour naviguer en toute autonomie.
                    </p>
                </div>
            </section>

            {/* Permis Côtier */}
            <Section id="cotier" className="bg-white">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="bg-ocean/5 p-8 rounded-2xl flex flex-col items-center text-center">
                            <Anchor className="w-20 h-20 text-ocean mb-6" />
                            <h3 className="text-2xl font-bold text-charcoal mb-2">Permis Côtier</h3>
                            <span className="bg-ocean text-white px-3 py-1 rounded-full text-sm font-medium mb-6">Le plus populaire</span>
                            <p className="text-gray-600 mb-6">Explorez les eaux côtières, les lacs et plans d&apos;eau fermés.</p>
                            <Link href="/contact" className="w-full">
                                <Button className="w-full">S&apos;inscrire</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-bold text-charcoal">Explorez les eaux côtières et intérieures</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Le permis côtier vous habilite à naviguer en toute autonomie sur les eaux maritimes, les plans d&apos;eau fermés et les lacs.
                            Cette certification constitue le premier palier de formation destiné aux navigateurs souhaitant explorer les zones côtières et littorales de manière responsable et sécurisée.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div>
                                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-teal" /> Durée
                                </h4>
                                <p className="text-gray-600">7h théorique + 2h pratique</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-teal" /> Public
                                </h4>
                                <p className="text-gray-600">Débutants, Passionnés, Explorateurs</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mt-6">
                            <h4 className="font-semibold text-lg mb-4">Programme de formation</h4>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Maîtrise des règles de sécurité",
                                    "Lecture des cartes marines",
                                    "Manœuvres essentielles",
                                    "Navigation par beau temps",
                                    "Signalisation maritime",
                                    "Communication VHF de base"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <hr className="border-gray-200" />

            {/* Permis Fluvial */}
            <Section id="fluvial" className="bg-white">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="bg-teal/5 p-8 rounded-2xl flex flex-col items-center text-center">
                            <Ship className="w-20 h-20 text-teal mb-6" />
                            <h3 className="text-2xl font-bold text-charcoal mb-2">Permis Fluvial</h3>
                            <span className="bg-teal text-white px-3 py-1 rounded-full text-sm font-medium mb-6">Navigation Intérieure</span>
                            <p className="text-gray-600 mb-6">Naviguez sur l&apos;ensemble du réseau fluvial : rivières, fleuves, canaux.</p>
                            <Link href="/contact" className="w-full">
                                <Button className="w-full bg-teal hover:bg-teal-dark">S&apos;inscrire</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-bold text-charcoal">Naviguez sur les voies intérieures</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Le permis fluvial vous permet de piloter un navire sur l&apos;ensemble du réseau français des eaux intérieures.
                            Idéal pour les passionnés de croisière fluviale et d&apos;exploration des régions continentales.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg mt-6">
                            <h4 className="font-semibold text-lg mb-4">Programme Spécifique</h4>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Règles de barre et de route fluviales",
                                    "Passage des écluses et manœuvres",
                                    "Signalisation spécifique voies intérieures",
                                    "Utilisation de la radio en fluvial",
                                    "Respect de l'environnement",
                                    "Sécurité des passagers"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <hr className="border-gray-200" />

            {/* Permis Hauturier */}
            <Section id="hauturier" className="bg-white">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="bg-charcoal/5 p-8 rounded-2xl flex flex-col items-center text-center">
                            <MapPin className="w-20 h-20 text-charcoal mb-6" />
                            <h3 className="text-2xl font-bold text-charcoal mb-2">Permis Hauturier</h3>
                            <span className="bg-charcoal text-white px-3 py-1 rounded-full text-sm font-medium mb-6">Expert</span>
                            <p className="text-gray-600 mb-6">Extension pour naviguer sans limite de distance ni restriction.</p>
                            <Link href="/contact" className="w-full">
                                <Button variant="outline" className="w-full border-charcoal text-charcoal hover:bg-charcoal hover:text-white">S&apos;inscrire</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-bold text-charcoal">Pour les navigateurs expérimentés</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Le permis hauturier représente la certification de haut niveau pour la navigation en haute mer et les eaux internationales.
                            Destiné aux navigateurs confirmés, il accorde l&apos;accès complet à tous les domaines maritimes sans restriction de distance à la côte.
                        </p>

                        <div className="flex items-start gap-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
                            <div className="shrink-0 mt-1">⚠️</div>
                            <p className="text-sm">Pré-requis : Le permis côtier est obligatoire pour passer l&apos;extension hauturière.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mt-6">
                            <h4 className="font-semibold text-lg mb-4">Compétences Avancées</h4>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Navigation sur carte (points, routes)",
                                    "Calculs de marée et courants",
                                    "Météorologie marine avancée",
                                    "Matériel de sécurité hauturier",
                                    "Navigation électronique (GPS, Radar)",
                                    "Autonomie sur plusieurs jours"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
