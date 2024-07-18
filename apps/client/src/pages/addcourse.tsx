import { AddCourse } from '@repo/ui/addCourse';
import axios from 'axios';
import { BASE_URL } from '../config';

export default function App() {
    return <div>
        <AddCourse onClick={async (id, title, description, imageLink, price, published) => {
            const data = {
                _id: id,
                title: title,
                description: description,
                imageLink: imageLink,
                price: price,
                published: published,
            }

            const headers = {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }

            const response = await axios.post(`${BASE_URL}/api/admin/courses`, data, { headers });
            alert(response.data.message);
        }}></AddCourse>
    </div >
}
