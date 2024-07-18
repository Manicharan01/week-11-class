import { Button, Card, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Course } from '@repo/store/atoms/courses';
import { getCourses } from '@repo/store/selectors/courses'
import { useRecoilValue } from 'recoil';

function Courses(props: {
    init: () => void
}) {
    useEffect(() => {
        props.init();
    }, []);

    const courses = useRecoilValue(getCourses);

    return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {courses.map(course => {
            return <CourseCard course={course} />
        })}
    </div>
}

export function CourseCard({ course }: { course: Course }) {
    const router = useRouter();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{ width: 300 }} ></img>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <Button variant="contained" size="large" onClick={() => {
                router.push("/course/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>

}

export default Courses;
