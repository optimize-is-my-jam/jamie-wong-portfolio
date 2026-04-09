import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { SkillChip } from "@/components/ui/SkillChip";
import {
  certifications,
  education,
  technicalSkills,
} from "@/lib/content";

type CredentialsContentProps = {
  className?: string;
};

export function CredentialsContent({ className = "" }: CredentialsContentProps) {
  return (
    <div
      className={`grid gap-12 md:grid-cols-2 ${className}`.trim()}
    >
      <div className="space-y-8">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">
          Technical Skills
        </h3>
        <div className="space-y-6">
          {(Object.entries(technicalSkills) as [string, readonly string[]][]).map(
            ([label, items]) => (
              <div key={label}>
                <span className="mb-3 block text-xs font-bold uppercase tracking-tighter text-slate-500">
                  {label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <SkillChip key={skill}>{skill}</SkillChip>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 text-sm text-on-surface/80"
              >
                <MaterialSymbol
                  name="verified"
                  className="text-sm text-primary"
                  aria-hidden
                />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">
            Education
          </h3>
          <div>
            <p className="font-bold text-white">{education.school}</p>
            <p className="text-sm text-on-surface-variant">{education.college}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary">
              {education.degree}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
