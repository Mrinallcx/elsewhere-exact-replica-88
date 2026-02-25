/**
 * PersonStructuredData — E-E-A-T: outputs @graph of Person schemas with worksFor: Organization.
 * Used on the About page to give leadership team structured data visibility.
 */

export interface TeamMember {
  name: string;
  jobTitle: string;
  description: string | string[];
  image?: string;
  sameAs?: string | string[];
}

interface PersonStructuredDataProps {
  members: TeamMember[];
}

const BASE_URL = 'https://totofinance.co';
const ORG_ID = `${BASE_URL}/#org`;

export function PersonStructuredData({ members }: PersonStructuredDataProps) {
  if (!members || members.length === 0) return null;

  const personSchemas = members.map((member, index) => {
    const description =
      typeof member.description === 'string'
        ? member.description
        : (member.description || []).join(' ');
    return {
      '@type': 'Person',
      '@id': `${BASE_URL}/about#person-${index}`,
      name: member.name,
      jobTitle: member.jobTitle,
      description: description || undefined,
      ...(member.image && { image: member.image }),
      ...(member.sameAs && { sameAs: Array.isArray(member.sameAs) ? member.sameAs : [member.sameAs] }),
      worksFor: {
        '@id': ORG_ID,
      },
    };
  });

  const schema = {
    '@context': 'https://schema.org',
    '@graph': personSchemas,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
