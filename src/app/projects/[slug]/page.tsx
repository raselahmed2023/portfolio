import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
          <Link
            href="/#projects"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>

            Back to Projects
          </Link>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="relative aspect-video min-h-[240px] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Project Details
                </p>

                <h1 className="heading-font text-3xl font-extrabold md:text-5xl">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="p-5 md:p-10">
              <div className="mb-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div
                className={`mb-10 grid gap-3 ${
                  project.serverRepo
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-2"
                }`}
              >
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>

                    Live Project
                  </a>
                )}

                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition-all hover:-translate-y-1 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
                >
                  <span className="material-symbols-outlined">
                    code
                  </span>

                  {project.clientLabel ?? "Client Code"}
                </a>

                {project.serverRepo && (
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  >
                    <span className="material-symbols-outlined">
                      dns
                    </span>

                    {project.serverLabel ?? "Server Code"}
                  </a>
                )}
              </div>

              <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-10">
                  <section>
                    <h2 className="heading-font mb-4 text-2xl font-bold">
                      Project Description
                    </h2>

                    <p className="leading-8 text-slate-600 dark:text-slate-300">
                      {project.fullDescription}
                    </p>
                  </section>

                  <section>
                    <h2 className="heading-font mb-4 text-2xl font-bold">
                      Main Features
                    </h2>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.mainFeatures.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                        >
                          <span className="material-symbols-outlined text-lg text-primary">
                            check_circle
                          </span>

                          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="heading-font mb-4 text-2xl font-bold">
                      Challenges Faced
                    </h2>

                    <div className="space-y-3">
                      {project.challenges.map(
                        (challenge, index) => (
                          <div
                            key={challenge}
                            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                              {index + 1}
                            </span>

                            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                              {challenge}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </section>

                  <section>
                    <h2 className="heading-font mb-4 text-2xl font-bold">
                      Future Improvements
                    </h2>

                    <div className="space-y-3">
                      {project.futurePlans.map((plan) => (
                        <div
                          key={plan}
                          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                        >
                          <span className="material-symbols-outlined text-lg text-secondary">
                            rocket_launch
                          </span>

                          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {plan}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside>
                  <div className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/50">
                    <h2 className="heading-font mb-5 text-xl font-bold">
                      Main Technology Stack
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetailsPage;