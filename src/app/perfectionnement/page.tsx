import { Metadata } from "next";
import Link from "next/link";
import { Award, Compass, LifeBuoy, Zap } from "lucide-react";
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: "Stages de Perfectionnement Nautique - Nautic' Forme",
    description: "Améliorez vos compétences de navigation. Coaching, manœuvres, et reprise de confiance en mer.",
};

export default function PerfectionnementPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-charcoal text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Stages de Perfectionnement</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-300">
                        Progressez à votre rythme et gagnez en confiance sur l&apos;eau.
                    </p>
                </div>
            </section>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-charcoal mb-6">Au-delà du permis</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Au-delà de la certification, développez vos compétences en navigation grâce à nos modules de perfectionnement.
                        Que vous souhaitiez améliorer une technique spécifique, progresser dans un domaine particulier ou reprendre confiance après une expérience difficile, nos formateurs proposent un accompagnement personnalisé.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all space-y-4">
                        <div className="w-14 h-14 bg-ocean/10 text-ocean rounded-full flex items-center justify-center">
                            <Compass className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-charcoal">Coaching Technique</h3>
                        <p className="text-gray-600 text-sm">Pour maîtriser des aspects précis de la navigation.</p>
                        <ul className="space-y-2 mt-4 text-sm text-gray-700">
                            <li>• Amélioration des manœuvres de port</li>
                            <li>• Gestion météo difficile</li>
                            <li>• Navigation de nuit</li>
                            <li>• Optimisation consommation carburant</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all space-y-4">
                        <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-charcoal">Stages Intensifs</h3>
                        <p className="text-gray-600 text-sm">Immersion complète pour une progression rapide.</p>
                        <ul className="space-y-2 mt-4 text-sm text-gray-700">
                            <li>• Navigation côtière avancée</li>
                            <li>• Sécurité approfondie en mer</li>
                            <li>• Lecture cartes & GPS expert</li>
                            <li>• Règles de priorité complexes</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all space-y-4">
                        <div className="w-14 h-14 bg-charcoal/10 text-charcoal rounded-full flex items-center justify-center">
                            <LifeBuoy className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-charcoal">Reprise de Confiance</h3>
                        <p className="text-gray-600 text-sm">Pour reprendre la barre sereinement.</p>
                        <ul className="space-y-2 mt-4 text-sm text-gray-700">
                            <li>• Accompagnement bienveillant</li>
                            <li>• Gestion du stress en mer</li>
                            <li>• Révision des fondamentaux</li>
                            <li>• Progression sans pression</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section className="bg-beige">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 md:w-2/3">
                        <h3 className="text-2xl font-bold text-charcoal">Modalités Flexibles</h3>
                        <p className="text-gray-600">
                            Nos stages s&apos;adaptent à vos besoins : <strong>groupes réduits</strong> ou <strong>cours particuliers</strong>.
                            La durée est variable, de quelques heures à plusieurs jours, et les sessions sont possibles en toute saison.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end w-full">
                        <Link href="/contact">
                            <Button size="lg" className="w-full md:w-auto">Demander un stage</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
