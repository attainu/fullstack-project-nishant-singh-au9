import React from 'react';



const Trans = (props) => {
    const transactionTable = (data) => {
        return data.map((item) => {
            return(
                <>
                <tr key={item._id}>
                    <th>{item.date.slice(0,10)}</th>
                    <th>{item.about}</th>
                    <th>{item.amount}</th>
                    <th>{item.type}</th>
                    <th>{item.curBalance}</th>
                </tr>
                </>
            )
        })
    }
    return (
        <>
            <h6>Your Recent Transaction</h6>
            <div className="table-responsive trans2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Type</th>
                            <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionTable(props.trans)}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Trans