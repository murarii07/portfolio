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
    // Level meter: Advanced = 3 bars, Proficient = 2, anything else = 1
    const bars = skill.level === 'Advanced' ? 3 : skill.level === 'Proficient' ? 2 : 1;

    return (
        <div
            id={`skill-${index}`}
            data-animate
            className={`group flex flex-col justify-between rounded-lg border border-[#DDD6C6] bg-[#FBF8F1] p-5 transition-all duration-700 hover:border-[#C8461B] hover:-translate-y-1 ${isVisible[`skill-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <div className="mb-8 flex items-center justify-between">
                <Icon className="h-5 w-5 text-[#C8461B]" />
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#6B655A]">
                    {skill.level}
                </span>
            </div>
            <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-[#16140F]">
                    {skill.name}
                </h3>
                <div className="mt-4 flex gap-1" aria-hidden="true">
                    {[1, 2, 3].map((n) => (
                        <span
                            key={n}
                            className={`h-1 w-8 rounded-full ${n <= bars ? 'bg-[#C8461B]' : 'bg-[#DDD6C6]'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
