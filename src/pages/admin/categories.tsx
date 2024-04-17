import DashboardLayout from "@/layout/default";
import { CategoryModel } from "@/lib/interface/category";
import { getCategories } from "@/services/api/categories";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <DashboardLayout title="Categories">
      <>
        <Stack mb="1em" alignItems="center" direction="row" justifyContent="space-between">
          <Typography variant="h6">All Categories</Typography>
          <Button variant="contained">Add New</Button>
        </Stack>

        <Box maxWidth="80em">
          {categories.map((category) => (
            <Accordion key={category.id}>
              <AccordionSummary>
                <Typography> {category.name} </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography mb="2em"> {category.description} </Typography>
                <Stack direction="row" justifyContent="end" columnGap="1em">
                  <Button variant="contained" color="primary">
                    Update
                  </Button>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </>
    </DashboardLayout>
  );
}
