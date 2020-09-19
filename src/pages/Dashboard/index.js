import React from 'react';
import { useDispatch } from "react-redux";

const Dashboard = () => {
    return (
        <table>
            <tr>
                <td>Nome</td>
                <td>E-mail</td>
            </tr>
            <tr>
                <td>Gustavo</td>
                <td>devgustavofarias@gmail.com</td>
            </tr>
        </table>
    )
}

export default Dashboard;