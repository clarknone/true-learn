import SingleCourseComponent from "@/component/courses/singleCourse";
import DashboardLayout from "@/layout/default";
import { CourseModel } from "@/lib/interface/courses";
import { getCourses } from "@/services/api/courses";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function StudentDashboard() {
  const [courses, setCourses] = useState<CourseModel[]>([]);

  useEffect(() => {
    getCourses()
      .then((data) => setCourses(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <DashboardLayout title="Dashboard">
      <>
        <Typography mb="2em" variant="h6">
          Available Courses
        </Typography>

        <Grid container columnSpacing="1em" rowSpacing="1em">
          {courses.map((course) => (
            <Grid item xs={6} md={4} key={course.id}>
              <SingleCourseComponent course={course} />
            </Grid>
          ))}
        </Grid>
      </>
    </DashboardLayout>
  );
}
