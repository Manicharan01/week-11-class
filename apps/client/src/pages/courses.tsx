import Courses from '@repo/ui/courses';
import { BASE_URL } from '../config';
import axios from 'axios';
import { courseState } from '@repo/store/atoms/courses';
import { useRecoilState } from 'recoil';

export default function App() {
    const [courses, setCourses] = useRecoilState(courseState);

    return <div>
        <Courses init={async () => {
            const response = await axios.get(`${BASE_URL}/api/admin/courses`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            setCourses(response.data.courses);
        }}></Courses>
    </div >
}
