import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const Staff = () => {
    return (
        <div className="row px-3 py-3 bg-white rounded-3">
            <div className='staff-table'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Staff Name</th>
                        <th scope="col">Efficiency Delta</th>
                        <th scope="col">NPS Delta</th>
                        <th scope="col">Efficiency</th>
                        <th scope="col">Reported Issues</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mercy Mukoya</td>
                        <td>
                            <span className='fw-bold'>2,7</span>
                            <span className='text-muted mx-2'>2,5</span>
                            <span> <FaCaretUp className='text-success' /></span>
                        </td>
                        <td>
                            <span className='fw-bold'>2,0</span>
                            <span className='text-muted mx-2'>1,8</span>
                            <span> <FaCaretUp className='text-success' /></span>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        96%
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        3
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Kennedy Ayako</td>
                        <td>
                            <span className='fw-bold'>2,7</span>
                            <span className='text-muted mx-2'>2,5</span>
                            <span> <FaCaretUp className='text-success' /></span>
                        </td>
                        <td>
                            <span className='fw-bold'>2,0</span>
                            <span className='text-muted mx-2'>1,8</span>
                            <span> <FaCaretUp className='text-success' /></span>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        92%
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        6
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Stephannie Tomset</td>
                        <td>
                            <span className='fw-bold'>2,7</span>
                            <span className='text-muted mx-2'>2,5</span>
                            <span> </span>
                        </td>
                        <td>
                            <span className='fw-bold'>2,0</span>
                            <span className='text-muted mx-2'>1,8</span>
                            <span> </span>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        58%
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        1
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Faith Kityo</td>
                        <td>
                            <span className='fw-bold'>2,7</span>
                            <span className='text-muted mx-2'>2,5</span>
                            <span> <FaCaretDown className='text-danger' /></span>
                        </td>
                        <td>
                            <span className='fw-bold'>2,0</span>
                            <span className='text-muted mx-2'>1,8</span>
                            <span> <FaCaretDown className='text-danger' /></span>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        74%
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className='w-100'>
                                <tr>
                                    <td className='fw-bold'>
                                        8
                                    </td>
                                    <td>
                                        <div className="progress mt-1" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: 50 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="0"></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Staff