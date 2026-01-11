import Link from "next/link";
import { Award, Anchor, Clock, Users, MapPin, BadgeCheck, Ship, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white bg-ocean-dark overflow-hidden">
        {/* Background placeholder - in real app would be an image */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark to-ocean opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder-sea.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay z-0"></div>

        <div className="container relative z-10 px-4 space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Maîtrisez l&apos;art de la navigation
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Formations complètes pour tous les niveaux de pratique. Du permis côtier au hauturier.
          </p>
          <div className="pt-4">
            <Link href="/permis">
              <Button size="lg" className="bg-white text-ocean hover:bg-gray-100 border-none">
                Commencer ma formation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-charcoal">Votre centre de formation agréé</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nautic&apos; Forme est un centre de formation spécialisé dans l&apos;acquisition et l&apos;amélioration des compétences nautiques.
            Forte d&apos;une longue expérience du secteur maritime, notre équipe transmet ses connaissances de manière pédagogique et sécurisée, adaptée à tous les profils.
          </p>
        </div>
      </Section>

      {/* Avantages */}
      <Section className="bg-beige">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-ocean/10 text-ocean rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal">Formations agréées</h3>
            <p className="text-gray-600">Diplômes reconnus officiellement par l&apos;État pour vous garantir conformité et sérieux.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-ocean/10 text-ocean rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal">Moniteurs expérimentés</h3>
            <p className="text-gray-600">Encadrement par des professionnels du secteur maritime passionnés et pédagogues.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-ocean/10 text-ocean rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal">Flexible</h3>
            <p className="text-gray-600">Sessions 7j/7 toute l&apos;année pour s&apos;adapter à votre emploi du temps.</p>
          </div>
        </div>
      </Section>

      {/* Formations Preview */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal mb-4">Nos Formations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explorez nos programmes certifiants et nos stages de perfectionnement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative overflow-hidden rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center bg-ocean-light/20">
              <Anchor className="w-16 h-16 text-ocean opacity-50" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-charcoal">Permis Côtier</h3>
              <p className="text-sm text-gray-500">Navigation en mer jusqu&apos;à 6 milles d&apos;un abri.</p>
              <Link href="/permis#cotier" className="inline-flex items-center text-ocean font-medium hover:underline">
                En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="absolute top-0 right-0 p-2">
              <BadgeCheck className="w-6 h-6 text-teal" />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center bg-teal/10">
              <Ship className="w-16 h-16 text-teal opacity-50" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-charcoal">Permis Fluvial</h3>
              <p className="text-sm text-gray-500">Navigation sur les fleuves, canaux et rivières.</p>
              <Link href="/permis#fluvial" className="inline-flex items-center text-ocean font-medium hover:underline">
                En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center bg-charcoal/10">
              <MapPin className="w-16 h-16 text-charcoal opacity-50" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-charcoal">Permis Hauturier</h3>
              <p className="text-sm text-gray-500">Extension pour naviguer en haute mer sans limite.</p>
              <Link href="/permis#hauturier" className="inline-flex items-center text-ocean font-medium hover:underline">
                En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center bg-ocean/10">
              <Award className="w-16 h-16 text-ocean opacity-50" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-charcoal">Perfectionnement</h3>
              <p className="text-sm text-gray-500">Stages pratiques pour progresser à votre rythme.</p>
              <Link href="/perfectionnement" className="inline-flex items-center text-ocean font-medium hover:underline">
                En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/permis">
            <Button variant="outline">Voir tout le catalogue</Button>
          </Link>
        </div>
      </Section>

      {/* Experts / Team */}
      <Section className="bg-beige">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            {/* Image Placeholder */}
            <div className="bg-gray-200 w-full h-[300px] md:h-[400px] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-gray-500 font-medium">Photo Équipe / Moniteur</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-charcoal">L&apos;expérience au service de votre réussite</h2>
            <p className="text-lg text-gray-600">
              Nos instructeurs cumulent des décennies d&apos;expérience pratique. Formés aux méthodes pédagogiques modernes, ils adaptent chaque cours à votre profil pour garantir une progression optimale dans un environnement bienveillant.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal"></div>
                <span className="text-charcoal font-medium">Pédagogie bienveillante</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal"></div>
                <span className="text-charcoal font-medium">Sécurité avant tout</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal"></div>
                <span className="text-charcoal font-medium">Expertise maritime reconnue</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Prochainement */}
      <Section className="bg-ocean text-white">
        <div className="md:flex items-center gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Un projet en réflexion...</h2>
            <p className="text-lg text-ocean-light mb-6">
              Lorsque nous aurons réalisé un nombre suffisant de permis, et si vous y voyez un intérêt, nous envisageons l&apos;achat d&apos;un bateau supplémentaire.
            </p>
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                <Ship className="w-5 h-5 text-teal" /> Objectif Location
              </h3>
              <p>
                Ce bateau pourrait être mis à votre disposition en location sur l&apos;Oise.
                L&apos;objectif : vous permettre, d&apos;ici un an environ, de profiter de la rivière pour vous détendre le week-end en toute autonomie.
              </p>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/3 justify-center">
            <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/10 animate-pulse">
              <Anchor className="w-24 h-24 text-white/50" />
            </div>
          </div>
        </div>
      </Section>

      {/* Location info */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal">Nous Trouver</h2>
          <p className="text-gray-600 mt-2">Deux emplacements stratégiquement situés pour votre confort.</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-ocean mb-6 shadow-sm">
            <MapPin className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-4">Base Nautique Principale</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            À proximité des principaux points d&apos;eau de la région, nos centres sont conçus pour une immersion pédagogique complète.
          </p>
          <div className="bg-white p-4 rounded inline-block text-left text-sm text-gray-600 border border-gray-200">
            <p className="font-semibold text-charcoal mb-2">Horaires d&apos;ouverture</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <span>Lundi - Dimanche</span>
              <span>9h-12h / 14h-18h</span>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button>Nous contacter</Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
