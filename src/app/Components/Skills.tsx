"use client"
import { LucideIcon } from "lucide-react";
import { Skill, VisibilityState } from "../state.types"
import React from 'react';

export default function SkillCard({ skill, index, isVisible, Icon }: {
    skill: Skill,
    index: number,
    isVisible: VisibilityState,
    Icon: LucideIcon

}) {
    return (
        <div
            key={skill.name}
            id={`skill-${index}`}
            data-animate
            className={`group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 ${isVisible[`skill-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} p-2 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">
                {skill.name}
            </h3>
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${skill.level === 'Advanced' ? 'bg-green-500/20 text-green-400' :
                    skill.level === 'Proficient' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                }`}>
                {skill.level}
            </span>
        </div>
    )
}