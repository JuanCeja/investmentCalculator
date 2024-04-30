import React from 'react'
import { calculateInvestmentResults } from '../util/investment';

const Results = ({ userInput }) => {
    const resultsData = calculateInvestmentResults(userInput);

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
        </table>
    )
}

export default Results