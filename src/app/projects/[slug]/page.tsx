import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProjectDetailsAnimations } from "@/components/motion/ProjectDetailsAnimations";
import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Rasel Ahmed`,
    description: project.shortDescription,
  };
};

const ProjectDetailsPage = async ({
  params,
}: ProjectDetailsPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="relative z-10 min-h-screen px-5 pb-20 pt-28 md:px-6">
        <div className="mx-auto max-w-6xl">
          <ProjectDetailsAnimations
            project={{
              title: project.title,
              image: project.image,
              tags: project.tags,
              technologies: project.technologies,
              mainFeatures: project.mainFeatures,
              challenges: project.challenges,
              futurePlans: project.futurePlans,
              fullDescription: project.fullDescription,
              liveLink: project.liveLink,
              clientRepo: project.clientRepo,
              serverRepo: project.serverRepo,
              clientLabel: project.clientLabel,
              serverLabel: project.serverLabel,
            }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
