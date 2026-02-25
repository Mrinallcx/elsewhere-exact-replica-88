/**
 * PersonStructuredData — outputs @graph of Person schemas for leadership team.
 * Used on About page for E-E-A-T; each person linked to Organization via worksFor.
 */

export interface TeamMember {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  sameAs?: string[];
}

interface PersonStructuredDataProps {
  members: TeamMember[];
}

const BASE_URL = 'https://totofinance.co';

export function PersonStructuredData({ members }: PersonStructuredDataProps) {
  if (!members?.length) return null;

  const personSchemas = members.map((member, index) => ({
    '@type': 'Person',
    '@id': `${BASE_URL}/about#person-${index + 1}`,
    name: member.name,
    jobTitle: member.jobTitle,
    ...(member.description && { description: member.description }),
    ...(member.image && { image: { '@type': 'ImageObject', url: member.image } }),
    ...(member.sameAs && member.sameAs.length > 0 && { sameAs: member.sameAs }),
    worksFor: { '@id': `${BASE_URL}/#org` },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': personSchemas,
        }),
      }}
    />
  );
}
