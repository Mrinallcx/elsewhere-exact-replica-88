"use client";

import { useState } from 'react';

interface ResponsibilityCategory {
  category: string;
  items: string[];
}

interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  preview: string;
  fullDescription: string;
  requirements: string[];
  responsibilities: string[] | ResponsibilityCategory[];
  benefits?: string[];
  preferredSkills?: string[];
  niceToHave?: string[];
  applyUrl?: string;
}

interface JobListProps {
  jobs: JobPosition[];
}

export function JobList({ jobs }: JobListProps) {
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  const isExpanded = (jobId: string) => expandedJobs.has(jobId);

  const renderResponsibilities = (responsibilities: string[] | ResponsibilityCategory[]) => {
    if (responsibilities.length === 0) return null;

    // Check if it's an array of ResponsibilityCategory objects
    if (typeof responsibilities[0] === 'object' && 'category' in responsibilities[0]) {
      return (
        <div className="space-y-4">
          {(responsibilities as ResponsibilityCategory[]).map((cat, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 mb-2">{cat.category}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    // Regular string array
    return (
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {(responsibilities as string[]).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {job.type}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.department}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{job.preview}</p>
            </div>
            <button
              onClick={() => toggleJobExpansion(job.id)}
              className="flex-shrink-0 px-6 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap"
            >
              {isExpanded(job.id) ? 'Show Less' : 'View Details'}
            </button>
          </div>

          {isExpanded(job.id) && (
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Description</h4>
                <p className="text-gray-600 leading-relaxed">{job.fullDescription}</p>
              </div>

              {job.requirements && job.requirements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.responsibilities && job.responsibilities.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                  {renderResponsibilities(job.responsibilities)}
                </div>
              )}

              {job.preferredSkills && job.preferredSkills.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Preferred Skills</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.preferredSkills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.niceToHave && job.niceToHave.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nice to Have</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.niceToHave.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.benefits && job.benefits.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.applyUrl && (
                <div className="pt-4">
                  <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

