import { notFound } from 'next/navigation';
import CharacterDetailClient from './CharacterDetailClient';
import { characters } from '@/data/characters';

export function generateStaticParams() {
  return characters.map((character) => ({
    id: character.id,
  }));
}

export default function CharacterDetail({ params }: { params: { id: string } }) {
  const character = characters.find(c => c.id === params.id);

  if (!character) {
    notFound();
  }

  return <CharacterDetailClient character={character} />;
}
