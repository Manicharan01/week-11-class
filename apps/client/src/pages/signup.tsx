import { Signup } from '@repo/ui/signup';
import { BASE_URL } from '../config';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function App() {
    const router = useRouter();
    return <div>
        <Signup onClick={async (username, password) => {
            const response = await axios.post(`${BASE_URL}/api/admin/signup`, {
                username,
                password,
            });
            alert(response.data.message);
            localStorage.setItem("token", response.data.token);
            router.push('/courses');
        }} />
    </div>
}
