import { Card, TextField, Button } from '@mui/material';
import { useState } from 'react';

export function AddCourse(props: {
    onClick: (id: string, title: string, description: string, imageLink: string, price: string, published: boolean) => void
}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('')

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
            <TextField
                type="text"
                variant="outlined"
                label="Course ID"
                fullWidth={true}
                value={id}
                onChange={(e) => {
                    setId(e.target.value);
                }}
            ></TextField>
            <br /><br />
            <TextField
                type="text"
                variant="outlined"
                label="Title"
                fullWidth={true}
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            ></TextField>
            <br /><br />
            <TextField
                type="text"
                variant="outlined"
                label="Description"
                fullWidth={true}
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            ></TextField>
            <br /><br />
            <TextField
                type="text"
                variant="outlined"
                label="Image Link"
                fullWidth={true}
                value={imageLink}
                onChange={(e) => {
                    setImageLink(e.target.value);
                }}
            ></TextField>
            <br /><br />
            <TextField
                variant="outlined"
                label="Price"
                fullWidth={true}
                value={price}
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            ></TextField>
            <br /><br />
            <Button
                size={"large"}
                variant="contained"
                onClick={async () => {
                    props.onClick(id, title, description, imageLink, price, true)
                }}
            >Add Course</Button>
        </Card>
    </div>
}
