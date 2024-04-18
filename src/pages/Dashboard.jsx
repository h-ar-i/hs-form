import React, { useState, useEffect } from 'react';
import { getAllUsersAPI } from '../services/allAPI';

function Dashboard() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const result = await getAllUsersAPI();
            if (result.status === 200) {
                setAllUsers(result.data);
            } else {
                console.log("Failed to fetch data");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <h2>Higher Secondary Admission Details</h2>
            {allUsers.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.dob}</td>
                                <td>{user.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="fw-bolder">No registrations yet!!!</div>
            )}
        </div>
    );
}

export default Dashboard;