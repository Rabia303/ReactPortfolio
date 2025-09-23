import { EDUCATION } from "..";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education</h1>

      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-8 text-sm text-neutral-400">{education.institution}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-8 font-semibold">
                {education.degree} -{" "}
                <span className="text-md text-purple-100 font-light">
                  {education.timeline}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
              <div className="flex flex-wrap">
                {education.courses?.map((course, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
