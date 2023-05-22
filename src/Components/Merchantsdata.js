// import React from 'react'
// import axios from 'axios'
// import Sidebar from './Sidebar'
// import { useState, useEffect } from 'react'
// import { useDownloadExcel } from 'react-export-table-to-excel'
// import { useRef } from 'react'
// import { utils, read } from 'xlsx'
// import { excel } from 'react-export-table-to-excel/lib/lib'

// //--------------------------Axios Api Data Fatch -------------------------------
// const Merchantsdata = () => {
//     const [ExcelData, setExcelData] = useState([]);
//     // const [excelErorr, setexcelErorr] = useState([])
//     const [merchants, setmerchants] = useState([]);

//     useEffect(() => {
//         axios.get('https://stekpayout.onrender.com/merchants', {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(function (response) {
//                 console.log(response);
//                 setmerchants(response.data);

//             })
//             .catch(function (error) {
//                 console.log(error);

//             });
//     }, []);

//     const tableRef = useRef(null);
//     //--------------------------Export Excel Sheet Data -------------------------------
//     const { onDownload } = useDownloadExcel({
//         currentTableRef: tableRef.current,
//         filename: "All Merchant Data.xls",
//         sheet: "All Merchant Data.xls",
//     });

//     //--------------------------Import Excel Sheet Data -------------------------------
//     const file_type = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
//     const handlechange = (e) => {
//         const selected_file = e.target.files[0];
//         if (selected_file) {
//             if (selected_file && file_type.includes(selected_file.type)) {
//                 let reader = new FileReader();
//                 reader.onload = (e) => {
//                     const workbook = read(e.target.result);
//                     const sheet = workbook.SheetNames;
//                     if (
//                         sheet.length
//                     ) {
//                         const data = utils.sheet_to_json(workbook.Sheets[sheet[0]]);
//                         console.log(data)
//                         setExcelData(data);
//                     }
//                 }
//                 reader.readAsArrayBuffer(selected_file)
//             } else {
//                 // setexcelErorr('Please Upload Only Excel File')
//                 setExcelData([])
//             }
//         }

//     }

//     return (
//         <div>
//             < Sidebar />
//             <div className="card  table-outer">
//                 <div className="card-body">
//                     <div className="button-outers d-flex align-item-center">
//                         <button className="btn btn-light buttons-excel buttons-html5 export" onClick={onDownload} tabindex="0" aria-controls="example2" type="button"><span>Export Data Excel</span></button>
//                         <div className="input-group mb-3 import-excel">
//                             <input type="file" className="form-control" id="inputGroupFile02" onChange={handlechange} />
//                             <label className="input-group-text" for="inputGroupFile02">import</label>
//                         </div>
//                     </div>

//                     <div className="table-responsive">

//                         <table id="example2" className="table table-striped table-bordered" ref={tableRef}>

//                             {/* <input type="file" onChange={handleFileUpload} /> */}
//                             <thead>
//                                 <tr>
//                                     <th>id</th>
//                                     <th>customerCode</th>
//                                     <th>customerName</th>
//                                     <th>debitAccountNumber</th>
//                                     <th>creditAccountNumber</th>
//                                     <th>remarks1</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     merchants.map(item => (
//                                         <tr>

//                                             <td>  {item.id} </td>
//                                             <td>  {item.customerCode} </td>
//                                             <td>  {item.customerName} </td>
//                                             <td>  {item.debitAccountNumber} </td>
//                                             <td>  {item.creditAccountNumber} </td>
//                                             <td>  {item.remarks1} </td>
//                                         </tr>
//                                     )
//                                     )
//                                 }

//                                 {
//                                     ExcelData ? (<></>) : (
//                                         <h2>No User Data</h2>
//                                     )
//                                 }

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Merchantsdata
