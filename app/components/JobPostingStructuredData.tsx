import { JobPostingJsonLd } from 'next-seo';

type EmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "TEMPORARY" | "INTERN" | "VOLUNTEER" | "PER_DIEM" | "OTHER";

interface JobPosting {
  title: string;
  description: string;
  location: string;
  employmentType: EmploymentType;
  datePosted: string;
  validThrough: string;
  hiringOrganization: {
    name: string;
    sameAs: string;
  };
  jobLocation: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  baseSalary?: {
    currency: string;
    value: {
      minValue: number;
      maxValue: number;
      unitText: string;
    };
  };
  applicantLocationRequirements?: {
    name: string;
  };
}

interface JobPostingStructuredDataProps {
  jobs: JobPosting[];
}

export function JobPostingStructuredData({ jobs }: JobPostingStructuredDataProps) {
  return (
    <>
      {jobs.map((job, index) => (
        <JobPostingJsonLd
          key={index}
          datePosted={job.datePosted}
          description={job.description}
          hiringOrganization={{
            name: job.hiringOrganization.name,
            sameAs: job.hiringOrganization.sameAs,
          }}
          jobLocation={{
            address: {
              addressLocality: job.jobLocation.addressLocality,
              addressRegion: job.jobLocation.addressRegion,
              addressCountry: job.jobLocation.addressCountry,
            },
          }}
          title={job.title}
          validThrough={job.validThrough}
          employmentType={job.employmentType}
          applicantLocationRequirements={job.applicantLocationRequirements}
          baseSalary={job.baseSalary}
          scriptId={`job-posting-${index}`}
        />
      ))}
    </>
  );
}

