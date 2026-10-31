import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project, VisibilityState } from '../state.types';

export default function Card({
    project, index, isVisible
}: {
    project: Project,
    index: number,
    isVisible: VisibilityState
}) {
    const flip = index % 2 === 1;

    return (
        <article
            id={`project-${index}`}
            data-animate
            className={`group transition-all duration-1000 ${isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="grid items-start gap-10 lg:grid-cols-12">
                <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-lg border border-[#DDD6C6] bg-[#E9E3D3]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-72 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        />
                        <span className="absolute left-4 top-4 rounded bg-[#F5F1E8] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs tracking-widest text-[#16140F]">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight text-[#16140F] md:text-4xl">
                        {project.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#6B655A]">
                        {project.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                        {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3 text-[#3A362E]">
                                <span className="mt-2.5 h-px w-4 shrink-0 bg-[#C8461B]" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="rounded border border-[#DDD6C6] bg-[#FBF8F1] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[#6B655A]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#16140F] px-5 py-2.5 text-sm font-medium text-[#16140F] transition-colors hover:bg-[#16140F] hover:text-[#F5F1E8]"
                        >
                            <Github className="h-4 w-4" />
                            View code
                        </a>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-[#C8461B] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#16140F]"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}
