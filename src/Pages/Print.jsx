import React from "react";
import "./Print.css";

export default function Invoice() {
    const handlePrint = () => window.print();

    return (
        <div className="page">
            <div className="invoice">
                {/* Top Info */}
                <div className="header-grid">
                    <div className="company-info">
                        <h1>KMPH Logistics</h1>
                        <p>
                            Mdr, ASBTENE, Palnadu, Andhra Pradesh, 522410<br />
                            GSTIN - 7537537530 | Email: raghav.patel49k99@gmail.com<br />
                            Contact: +91 9324471561 | +91 9324471562
                        </p>
                    </div>

                    <div className="invoice-meta">
                        <h3>Bilty Transporter Copy</h3>
                        <div className="meta-row"><span>Shipment#:</span> 250321325300</div>
                        <div className="meta-row"><span>Unique Ref#:</span> 250321325300</div>
                        <div className="meta-row"><span>Updated by:</span> Raghav Patel</div>
                        <div className="meta-row"><span>Last modified:</span> 31/03/2025 20:04</div>
                    </div>
                </div>

                {/* Movement + Vehicle */}
                <div className="triple-grid">
                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Movement Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Type</td><td>Non container</td></tr>
                                <tr><td>Category</td><td>Import</td></tr>
                                <tr><td>Mode</td><td>Road</td></tr>
                                <tr><td>From → To</td><td>Mumbai → Delhi</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Vehicle Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>No.</td><td>7854</td></tr>
                                <tr><td>Spec</td><td>Reefer · 17FT · 20MT · MXL · Closed</td></tr>
                                <tr><td>Driver</td><td>John Doe</td></tr>
                                <tr><td>Driver No.</td><td>+91 7895127859</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Consignor & Consignee */}
                <div className="double-grid">
                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Consignor (Seller)</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Name</td><td>LG</td></tr>
                                <tr><td>Code</td><td>pickcode-1</td></tr>
                                <tr><td>Address</td><td>Kumbena Agrahara Main Road, dsfbntntrn</td></tr>
                                <tr><td>City</td><td>Bengaluru</td></tr>
                                <tr><td>State</td><td>Karnataka</td></tr>
                                <tr><td>Postal</td><td>416445</td></tr>
                                <tr><td>PAN</td><td>ABERTGDSFS</td></tr>
                                <tr><td>Contact</td><td>Ramesh Yadav | +91 4352675849</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Consignee (Buyer)</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Name</td><td>Godrej</td></tr>
                                <tr><td>Code</td><td>dropcode-2</td></tr>
                                <tr><td>Address</td><td>Kumbena Agrahara Main Road, dsfbntntrn</td></tr>
                                <tr><td>City</td><td>Bengaluru</td></tr>
                                <tr><td>State</td><td>Karnataka</td></tr>
                                <tr><td>Postal</td><td>6641655</td></tr>
                                <tr><td>GSTIN</td><td>SDFEERFDEFRE432</td></tr>
                                <tr><td>Contact</td><td>Lavesh Kumar | +91 4352675849</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Insurance + Invoice */}
                <div className="double-grid">
                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Insurance</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Company</td><td>LIC</td></tr>
                                <tr><td>Policy#</td><td>346346434</td></tr>
                                <tr><td>Validity</td><td>31/03/2025</td></tr>
                                <tr><td>Amount</td><td>₹ 1,000,000</td></tr>
                                <tr><td>Risk</td><td>Owner</td></tr>
                                <tr><td>By</td><td>Transporter</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Invoice Info</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Invoice#</td><td>EFBBTBEFB</td></tr>
                                <tr><td>Date</td><td>31/03/2025</td></tr>
                                <tr><td>Cargo value</td><td>₹ 500,000</td></tr>
                                <tr><td>Insurance</td><td>₹ 1,000,000</td></tr>
                                <tr><td>Permit</td><td>e-way bill</td></tr>
                                <tr><td>Permit ref#</td><td>234634634634</td></tr>
                                <tr><td>Validity</td><td>31/03/2025</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment + Payment & Cargo */}
                <div className="double-grid">
                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Payment</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Transport Charge (@800,000 / Shipment)</td><td>₹ 8,000,000</td></tr>
                                <tr><td>Labor charge</td><td>₹ 5,000</td></tr>
                                <tr><td>Documentation charge</td><td>₹ 1,000</td></tr>
                                <tr><td>Subtotal</td><td>₹ 8,006,000</td></tr>
                                <tr><td>CGST (5%)</td><td>₹ 400,000</td></tr>
                                <tr><td>SGST (5%)</td><td>₹ 400,000</td></tr>
                                <tr><td>Total tax</td><td>₹ 800,000</td></tr>
                                <tr><td>Advance paid</td><td>₹ 100,000</td></tr>
                                <tr className="highlight"><td>Net Payable</td><td>₹ 8,806,000</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Payment & Cargo</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Payment status</td><td>Transporter</td></tr>
                                <tr><td>Amount payable by</td><td>Transporter</td></tr>
                                <tr><td>Tax payable</td><td>Transporter</td></tr>
                                <tr><td>SAC/HSN</td><td>SEFBEFB</td></tr>
                                <tr><td>Net wt.</td><td>10 KG</td></tr>
                                <tr><td>Charge wt.</td><td>20 KG</td></tr>
                                <tr><td>Net vol.</td><td>15 CBM</td></tr>
                                <tr><td>Charge vol.</td><td>25 CBM</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Commodity */}
                <div style={{ marginTop: '15px' }}>
                    <table className="mini">
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Commodity</th>
                                <th>Description</th>
                                <th>Package</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td>Plastic</td><td>Steel cargo covers</td><td>Steel drums</td><td>1,000</td></tr>
                            <tr><td>2</td><td>Iron</td><td>Rust protector</td><td>Steel drums</td><td>5,000</td></tr>
                            <tr><td>3</td><td>Bricks</td><td>Building blocks</td><td>Steel drums</td><td>6,000</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Bank & Signatories */}
                <div className="double-grid">
                    <div>
                        <table className="mini">
                            <thead>
                                <tr className="title-row">
                                    <td colSpan="2">Bank Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Bank</td><td>Kotak</td></tr>
                                <tr><td>Account #</td><td>23542435525</td></tr>
                                <tr><td>IFSC</td><td>SFDBEBT43BDFB23</td></tr>
                                <tr><td>UPI</td><td>65478961345</td></tr>
                                <tr><td>UPI Link</td><td>fberber.com</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>Signatories</h4>
                        <p>Driver Sign: __________ (Ramesh Kumar)</p>
                        <p>Booking Officer: __________ (Dhiraj Kumar)</p>
                        <p>Authorized: __________ (Raghav Patel)</p>
                    </div>
                </div>

                {/* Terms */}
                <div className="terms">
                    <b>Terms & Condition:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
galley of type and scrambled it to make a type specimen book. 
                    <div className="notice-caution">
                        <div><b>Notice:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book.</div>
                        <div><b>Caution:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                </div>

                {/* Delivery */}
                <div className="delivery">
                    <table className="mini">
                        <thead>
                            <tr className="title-row">
                                <td colSpan="4">Delivery details | For Consignee use only</td>
                            </tr>
                            <tr>
                                <th>CONSIGNEE REMARKS</th>
                                <th>CONSIGNMENT STATUS</th>
                                <th>DELIVERY RECEIVED BY</th>
                                <th>RECEIVER'S SIGN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Boxes received on time</td>
                                <td></td>
                                <td>
                                    Raghav Patel <br /> +91 7045737374 <br /> raghav.patel@yopmail.com <br />
                                    department | designation 
                                </td>
                                <td>
                                    <br /> OTP VERIFIED <br /> 01-04-2025 08:15 pm
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="terms">Subjected to local (Pickup city) jurisdiction</p>
            </div>

            {/* Footer */}
            <footer className="no-print">
                <p>© 2025 KMPH Logistics</p>
            </footer>
        </div>
    );
}
