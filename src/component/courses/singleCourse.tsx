import { CourseModel } from "@/lib/interface/courses";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

interface IProps {
  course: CourseModel;
}

export default function SingleCourseComponent({ course }: IProps) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader titleTypographyProps={{ fontSize: "1.25em" }} title={course.title} />

      <CardContent>
        <Typography> {course.description} </Typography>
      </CardContent>
    </Card>
  );
}
