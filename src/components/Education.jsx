import { EDUCATION } from "..";
import SectionHeading from "./SectionHeading";
import { Timeline, TimelineItem } from "./Timeline";

const Education = () => {
  return (
    <div className="py-16">
      <SectionHeading eyebrow="Where I studied" title="Education" />

      <Timeline>
        {EDUCATION.map((edu, index) => (
          <TimelineItem key={index} date={edu.timeline}>
            <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
            <p className="mb-3 text-sm text-purple-300">{edu.institution}</p>
            {edu.description && <p className="mb-4 text-neutral-400">{edu.description}</p>}
            <div className="flex flex-wrap gap-2">
              {edu.courses?.map((course) => (
                <span key={course} className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-purple-400">
                  {course}
                </span>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Education;
