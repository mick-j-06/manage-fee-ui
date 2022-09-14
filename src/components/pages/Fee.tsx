import React, {useEffect, useState} from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import {BASE_URL} from "../../properties";
import {FeeType} from "../../types";

const Fee: React.FC<{
    toggleModal: (modal: string) => void,
    setModalValue: (value: any) => void,
    setRequest: (value: string | null) => void
}> = (props) => {
    const {toggleModal, setModalValue, setRequest} = props;
    const [fees, setFees] = useState<FeeType[] | null>(null);

    useEffect(() => {
        axios.get(BASE_URL + "/fees")
            .then((res: any): void => {
                setFees(res.data);
                console.log(res.data)
            }).catch((err) => {
            console.log(err)
        })
    }, []);

    const getModalValue = async (id: number | string) => {
        await axios.get(BASE_URL + "/fees/" + id)
            .then((res: any) => {
                setModalValue(res.data);
            }).catch((err) => {
                console.log(err);
            })
        await toggleModal("feeModal");
    }

    return (
        <>
            <Navbar/>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => {
                            setRequest("add");
                            toggleModal("feeModal");
                        }}>ADD NEW FEE
                        </button>
                        <select name={"sortByLastName"} id={"sortByLastName"}
                                className="btn btn-sm btn-outline-secondary">
                            <option value={undefined} selected={true}>Sort by lastname</option>
                            <option value={"asc"}>asc</option>
                            <option value={"desc"}>desc</option>
                        </select>
                    </div>
                    <button disabled={true} type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                </div>
            </div>

            <h2>Fees List</h2>
            <div className="table-responsive">
                <table id={"table"} className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th scope="col">Student Id</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Type</th>
                        <th scope="col">Remaining</th>
                        <th scope="col">Total</th>
                        <th scope="col">School Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (fees || []).map((fee: FeeType) => {
                            return (
                                <tr key={fee.id}>
                                    <td>{fee.student == null ? "" : fee.student.id}</td>
                                    <td>{fee.student == null ? "" : fee.student.lastname}</td>
                                    <td>{fee.type}</td>
                                    <td>{fee.remainingAmount} Ar</td>
                                    <td>{fee.totalAmount} Ar</td>
                                    <td>{
                                        (fee.schoolYear == null ? "" : fee.schoolYear.startYear)
                                        + "-" +
                                        (fee.schoolYear == null ? "" : fee.schoolYear.endYear)
                                    }</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-outline-secondary"
                                                onClick={() => {
                                                    getModalValue(fee.id == null ? 0 : fee.id);
                                                    setRequest("update");
                                                }}>SHOW/UPDATE
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Fee;
