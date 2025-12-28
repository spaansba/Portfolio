"use client";
import { Star, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

type ProjectStatsProps = {
  repoName: string | undefined;
  npmPackage?: string;
  isRightAlign: boolean;
};

type Stats = {
  githubStars: number | null;
  npmDownloads: number | null;
};

type PackageType = 'powershell' | 'npm';

const POWERSHELL_PACKAGES = new Set(['PowerTree', 'Get-SVGL']);

const getPackageType = (packageName: string): PackageType => {
  return POWERSHELL_PACKAGES.has(packageName) ? 'powershell' : 'npm';
};

const getPackageUrl = (packageName: string, packageType: PackageType): string => {
  return packageType === 'powershell'
    ? `https://www.powershellgallery.com/packages/${packageName}`
    : `https://www.npmjs.com/package/${packageName}`;
};

function ProjectStats({
  repoName,
  npmPackage,
  isRightAlign,
}: ProjectStatsProps) {
  const [stats, setStats] = useState<Stats>({
    githubStars: null,
    npmDownloads: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!repoName || !npmPackage) return;

    const fetchStats = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/project-stats?repo=${repoName}&npmPackage=${npmPackage}`,
        );
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch project stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [repoName, npmPackage]);

  if (!repoName || !npmPackage || loading) return null;

  return (
    <div
      className={`flex flex-wrap gap-4 text-sm ${isRightAlign ? "justify-end" : ""}`}
    >
      {stats.githubStars !== null && (
        <Link
          href={`https://github.com/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-TextGray hover:text-fgButton flex items-center gap-1 transition-colors"
        >
          <Star size={14} />
          <span>{stats.githubStars.toLocaleString()}</span>
        </Link>
      )}
      {stats.npmDownloads !== null && npmPackage && (
        <Link
          href={getPackageUrl(npmPackage, getPackageType(npmPackage))}
          target="_blank"
          rel="noopener noreferrer"
          className="text-TextGray hover:text-fgButton flex items-center gap-1 transition-colors"
        >
          <Download size={14} />
          <span>
            {stats.npmDownloads.toLocaleString()}
            {getPackageType(npmPackage) === 'npm' ? '/mo' : ''}
          </span>
        </Link>
      )}
    </div>
  );
}

export default ProjectStats;
