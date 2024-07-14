import { Card, Button, TextField, Typography } from '@mui/material';

export function Signup() {
    return <div>
        <div style={{
            paddingTop: '150px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Typography>
                Welcome to Coursera. Please Sign up below!
            </Typography>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    variant="outlined"
                    type="text"
                    label="Username"
                    fullWidth={true}
                />
                <br /><br />
                <TextField
                    variant="outlined"
                    type="text"
                    label="Password"
                    fullWidth={true}
                />
                <br /><br />
                <Button variant="contained" size={"large"}><Typography>Sign Up</Typography></Button>
            </Card>
        </div>
    </div>
}
