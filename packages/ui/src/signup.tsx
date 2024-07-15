import { Card, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { adminState } from '@repo/store/atoms/admin';
import { useRecoilState } from 'recoil';

export function Signup(props: {
    onClick: (username: string, password: string) => void
}) {
    const [admins, setAdmin] = useRecoilState(adminState);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                    value={username}
                    variant="outlined"
                    type="text"
                    label="Username"
                    fullWidth={true}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <br /><br />
                <TextField
                    value={password}
                    variant="outlined"
                    type={"password"}
                    label="Password"
                    fullWidth={true}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br /><br />
                <Button
                    variant="contained"
                    size={"large"}
                    onClick={async () => {
                        props.onClick(username, password)
                        setAdmin([...admins, { username: username, password: password }])
                    }}
                ><Typography>Sign Up</Typography>
                </Button>
            </Card>
        </div>
    </div>
}
