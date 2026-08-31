import ViewWrapper from "../components/ViewWrapper";
import coursesData from "../data/courses.json";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const ordered = ["iniciacion", "intermedio", "avanzado"];
  const courses = ordered
    .map((level) => coursesData.find((c) => c.level === level))
    .filter(Boolean);

  return (
    <ViewWrapper>
      <section className="space-y-4">
        <h1 className="text-xl font-semibold">Cursos disponibles</h1>
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Formación estructurada para todos los niveles.
        </p>

        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </ViewWrapper>
  );
}
