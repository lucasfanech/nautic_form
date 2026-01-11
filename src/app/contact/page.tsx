import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, FileText, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: "Contactez Nautic' Forme - Inscription et Renseignements",
    description: "Contactez-nous pour votre inscription au permis bateau ou pour toute demande d'information.",
};

export default function ContactPage() {
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScx47cvPsLxWg9Lid-ivg3x0GmCnNWRTc5xxSV2qrYfI8F-tw/viewform?usp=dialog";

    return (
        <div className="flex flex-col w-full">
            <section className="bg-ocean text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
                    <p className="text-xl max-w-2xl mx-auto text-ocean-light">
                        Prêt à naviguer ? Nous sommes là pour vous accompagner.
                    </p>
                </div>
            </section>

            <Section className="bg-white">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">Nos Coordonnées</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-ocean" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal">Téléphone</h3>
                                        <p className="text-gray-600 font-medium">Adrien : 06 81 55 90 11</p>
                                        <p className="text-gray-600 font-medium">Laurent : 06 59 71 29 34</p>
                                        <p className="text-sm text-gray-500 mt-1">Choisissez selon vos affinités !</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-ocean" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal">Email</h3>
                                        <a href="mailto:nauticforme@gmail.com" className="text-ocean hover:underline">nauticforme@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-ocean" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal">Base Nautique</h3>
                                        <p className="text-gray-600">Laurent Brosseau</p>
                                        <p className="text-sm text-gray-500 mt-1">Sur rendez-vous</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-teal" /> Étapes pour votre Permis Bateau
                            </h3>
                            <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
                                <li className="pl-2">
                                    <strong>Remplir le Google Forms</strong> (ci-contre) en indiquant vos disponibilités.
                                </li>
                                <li className="pl-2">
                                    <strong>Retourner le dossier d&apos;inscription complet :</strong>
                                    <ul className="pl-6 mt-1 space-y-1 list-disc">
                                        <li>Le Cerfa</li>
                                        <li>Le certificat médical</li>
                                        <li>Le timbre fiscal de 78€ (impots.gouv.fr)</li>
                                        <li>Photo d&apos;identité (photomaton) + Selfie</li>
                                    </ul>
                                </li>
                                <li className="pl-2">
                                    <strong>Formation Théorique (7h00) :</strong>
                                    <ul className="pl-6 mt-1 space-y-1 list-disc">
                                        <li>Nous positionnerons vos 2h de pratique.</li>
                                        <li>Nous validerons votre dossier pour l&apos;examen du code.</li>
                                    </ul>
                                </li>
                                <li className="pl-2">
                                    <strong>Inscription au Code :</strong> À effectuer par vos soins (La Poste, Dekra...) une fois la formation validée (30€/passage).
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Form / Action */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center items-center text-center space-y-6 h-fit sticky top-24">
                        <div className="bg-blue-50 p-4 rounded-full">
                            <FileText className="w-8 h-8 text-ocean" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-charcoal mb-2">Inscription & Disponibilités</h2>
                            <p className="text-gray-600">
                                Indiquez toutes les dates sur lesquelles vous pouvez vous positionner. Nous vous recontacterons pour valider.
                            </p>
                        </div>

                        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button size="lg" className="w-full gap-2">
                                Accéder au Formulaire <ExternalLink className="w-4 h-4" />
                            </Button>
                        </a>

                        <div className="text-xs text-gray-400 max-w-xs">
                            Vous serez redirigé vers Google Forms.
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
