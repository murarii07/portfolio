import React from 'react';
import { Github,ExternalLink } from 'lucide-react';
import { Project, VisibilityState } from '../state.types';

export default function Card({
    project, index, isVisible
}: {
    project: Project,
    index: number,
    isVisible: VisibilityState
}) {


    return (
        <div
            key={project.title}
            id={`project-${index}`}
            data-animate
            className={`group transition-all duration-1000 ${isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 right-4 flex gap-2">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors"
                            >
                                <Github className="w-5 h-5 text-white" />
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5 text-white" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                        {project.description}
                    </p>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features:</h4>
                        <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full backdrop-blur-sm border border-blue-500/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" />
                            View Code
                        </a>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}