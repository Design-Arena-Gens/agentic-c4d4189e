'use client';

import { useState } from 'react';
import Link from 'next/link';
import { characters } from '@/data/characters';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = characters.filter(character =>
    character.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.typeAr.includes(searchTerm)
  );

  return (
    <div className="container">
      <header className="header">
        <h1>🎮 دليل Squad Busters للمبتدئين</h1>
        <p>اكتشف جميع شخصيات اللعبة ومهاراتهم</p>
      </header>

      <input
        type="text"
        className="search-bar"
        placeholder="ابحث عن شخصية..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="characters-grid">
        {filteredCharacters.map((character) => (
          <Link href={`/character/${character.id}`} key={character.id}>
            <div className="character-card">
              <img
                src={character.image}
                alt={character.nameAr}
                className="character-image"
              />
              <h2 className="character-name">{character.nameAr}</h2>
              <span className="character-type">{character.typeAr}</span>
            </div>
          </Link>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.5rem' }}>
          لم يتم العثور على شخصيات مطابقة
        </div>
      )}
    </div>
  );
}
