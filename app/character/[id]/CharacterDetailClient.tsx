'use client';

import { useRouter } from 'next/navigation';
import { Character } from '@/data/characters';

export default function CharacterDetailClient({ character }: { character: Character }) {
  const router = useRouter();

  return (
    <div className="container character-detail">
      <button className="back-button" onClick={() => router.push('/')}>
        ← العودة للرئيسية
      </button>

      <div className="detail-content">
        <div className="detail-header">
          <img
            src={character.image}
            alt={character.nameAr}
            className="detail-image"
          />
          <div className="detail-info">
            <h1>{character.nameAr}</h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.8, marginBottom: '15px' }}>
              {character.name}
            </p>
            <span className="detail-type">{character.typeAr}</span>
          </div>
        </div>

        <div className="detail-section">
          <h2>📖 نبذة عن الشخصية</h2>
          <p>{character.descriptionAr}</p>
        </div>

        <div className="detail-section">
          <h2>⚡ المهارات والقدرات</h2>
          <ul className="skills-list">
            {character.skillsAr.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>💡 نصائح للاستخدام</h2>
          <p>
            {character.typeAr === 'مهاجم' && 'استخدم هذه الشخصية للهجوم المباشر على الأعداء والتعامل مع الضرر العالي. حاول البقاء في نطاق الهجوم المثالي.'}
            {character.typeAr === 'دبابة' && 'هذه الشخصية مثالية لامتصاص الضرر وحماية الفريق. تقدم في المقدمة واسمح لزملائك بالهجوم من الخلف.'}
            {character.typeAr === 'دعم' && 'ركز على دعم فريقك بالشفاء والمساعدة. ابق بالقرب من زملائك ولكن في مكان آمن.'}
            {character.typeAr === 'قاذف' && 'استخدم الجدران والعوائق لصالحك. يمكنك الهجوم دون أن تكون في خط النار المباشر.'}
            {character.typeAr === 'مقاتل' && 'شخصية متوازنة يمكن استخدامها في معظم المواقف. تعلم متى تهاجم ومتى تدافع.'}
            {character.typeAr === 'قاتل' && 'انتظر اللحظة المناسبة للهجوم. استهدف الأعداء المنفردين أو ضعاف الصحة للحصول على أفضل النتائج.'}
            {character.typeAr === 'قناص' && 'حافظ على مسافة آمنة واستهدف من بعيد. ابق خلف فريقك وقدم الدعم الناري.'}
          </p>
        </div>
      </div>
    </div>
  );
}
