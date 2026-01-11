import { Metadata } from "next";
import Link from "next/link";
import { Check, Info } from "lucide-react";
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: "Tarifs Permis Bateau et Stages - Nautic' Forme",
    description: "Découvrez nos tarifs transparents pour les permis côtier, fluvial, hauturier et nos stages de perfectionnement.",
};

export default function TarifsPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-white py-16 text-center border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">Tarifs & Investissement</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-500">
                        Une tarification transparente pour votre formation nautique.
                    </p>
                </div>
            </section>

            <Section className="bg-gray-50">
                <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-4 font-semibold text-charcoal">Formation</th>
                                <th className="p-4 font-semibold text-charcoal">Durée Théorie</th>
                                <th className="p-4 font-semibold text-charcoal">Durée Pratique</th>
                                <th className="p-4 font-semibold text-charcoal w-32">Tarif</th>
                                <th className="p-4 font-semibold text-charcoal hidden md:table-cell">Inclus</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-ocean">Permis Côtier</td>
                                <td className="p-4">7 heures</td>
                                <td className="p-4">2 heures</td>
                                <td className="p-4 font-bold text-lg">400 €</td>
                                <td className="p-4 text-sm text-gray-500 hidden md:table-cell">Support de cours, Accès salle</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-teal">Permis Fluvial</td>
                                <td className="p-4">5 heures</td>
                                <td className="p-4">2 heures</td>
                                <td className="p-4 font-bold text-lg">350 €</td>
                                <td className="p-4 text-sm text-gray-500 hidden md:table-cell">Support de cours, Livret</td>
                            </tr>
                            <tr className="hover:bg-ocean/5 transition-colors border-l-4 border-l-ocean">
                                <td className="p-4 font-bold text-charcoal">Pack Duo (Côtier + Fluvial)</td>
                                <td className="p-4" colSpan={2}>Formation complète</td>
                                <td className="p-4 font-bold text-xl text-ocean">600 €</td>
                                <td className="p-4 text-sm text-gray-500 hidden md:table-cell font-medium">Offre spéciale combinée</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-charcoal">Permis Hauturier</td>
                                <td className="p-4">15 heures</td>
                                <td className="p-4 text-gray-400">-</td>
                                <td className="p-4 font-bold text-lg">450 €</td>
                                <td className="p-4 text-sm text-gray-500 hidden md:table-cell">Matériel de navigation, Carte examen</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                <td className="p-4 font-medium text-charcoal">Perfectionnement</td>
                                <td className="p-4" colSpan={2}>Sur demande (min 2h)</td>
                                <td className="p-4 font-bold text-lg">80 € / h</td>
                                <td className="p-4 text-sm text-gray-500 hidden md:table-cell">Carburant inclus</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 text-sm text-gray-500 flex gap-2 items-center">
                    <Info className="w-4 h-4" /> Les tarifs sont indicatifs et peuvent être sujets à modification. Prix TTC.
                </div>
            </Section>

            <Section className="bg-white">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-charcoal mb-6">Options Supplémentaires</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                <span>Préparation code en ligne (3 mois)</span>
                                <span className="font-semibold text-ocean">30 €</span>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                <span>Livret de suivi personnalisé</span>
                                <span className="font-semibold text-ocean">15 €</span>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                <span>Session de rattrapage</span>
                                <span className="font-semibold text-ocean">50 €</span>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                <span>Séance pratique extra (1h)</span>
                                <span className="font-semibold text-ocean">70 €</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-charcoal mb-6">Frais Administratifs</h3>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 space-y-4">
                            <p className="text-sm text-blue-800">
                                <strong>Note importante :</strong> Ces frais sont à régler directement auprès de l&apos;administration ou des organismes agréés, ils ne sont pas encaissés par Nautic&apos; Form.
                            </p>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Timbre fiscal (Droit d&apos;examen)</span>
                                    <span className="font-bold text-charcoal">78 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Inscription au code (par passage)</span>
                                    <span className="font-bold text-charcoal">30 €</span>
                                </div>
                            </div>
                            <div className="pt-4">
                                <a href="https://timbres.impots.gouv.fr/" target="_blank" className="text-sm text-ocean hover:underline flex items-center gap-1">
                                    Acheter mon timbre fiscal sur impots.gouv.fr <Info className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-beige">
                <div className="text-center max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-charcoal">Envie de faire plaisir ?</h2>
                    <p className="text-gray-600">
                        Nos <strong>coffrets cadeaux</strong> permettent à vos proches de découvrir ou améliorer leurs compétences de navigation dans un contexte ludique et enrichissant. Disponibles pour toutes les formations.
                    </p>
                    <Link href="/contact">
                        <Button>Commander un bon cadeau</Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
