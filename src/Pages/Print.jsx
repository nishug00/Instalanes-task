import React from "react";
import "./Print.css";
import { usePDF } from 'react-to-pdf';

const InfoTable = ({ title, rows, headers }) => (
  <table className="mini">
    <thead>
      <tr className="title-row">
        <td colSpan={headers ? headers.length : 2}>{title}</td>
      </tr>
      {headers && (
        <tr>
          {headers.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      )}
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={i}>
          {Array.isArray(row) ? (
            row.map((col, j) => <td key={j}>{col}</td>)
          ) : (
            <>
              <td>{row.label}</td>
              <td>{row.value}</td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default function Invoice() {
  const { toPDF, targetRef } = usePDF({ filename: 'Invoice.pdf' });

  const handlePrint = () => {
    window.print();
  };

  const handlePDF = () => {
    // Uses print dialog → "Save as PDF"
    window.print();
  };

  return (
    <div className="page">
      <header className="header-bar no-print">
        <h2>KMPH Logistics - Invoice</h2>
        <div className="header-buttons">
          <button onClick={() => toPDF()}>Download PDF</button>
          <button onClick={handlePrint}>Print</button>
          <button>Edit</button>
        </div>
      </header>
      <div ref={targetRef}>
        <div className="invoice">
          {/* Header */}
          <div className="header-grid">
            <div className="company-info">
              <h1>KMPH Logistics</h1>
              <p>
                Mdr, ASBTENE, Palnadu, Andhra Pradesh, 522410 <br />
                GSTIN - 7537537530 | Email: raghav.patel49k99@gmail.com <br />
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
            <InfoTable
              title="Movement Details"
              rows={[
                { label: "Type", value: "Non container" },
                { label: "Category", value: "Import" },
                { label: "Mode", value: "Road" },
                { label: "From → To", value: "Mumbai → Delhi" },
              ]}
            />
            <InfoTable
              title="Vehicle Details"
              rows={[
                { label: "No.", value: "7854" },
                { label: "Spec", value: "Reefer · 17FT · 20MT · MXL · Closed" },
                { label: "Driver", value: "John Doe" },
                { label: "Driver No.", value: "+91 7895127859" },
              ]}
            />
          </div>

          {/* Consignor & Consignee */}
          <div className="double-grid">
            <InfoTable
              title="Consignor (Seller)"
              rows={[
                { label: "Name", value: "LG" },
                { label: "Code", value: "pickcode-1" },
                { label: "Address", value: "Kumbena Agrahara Main Road, dsfbntntrn" },
                { label: "City", value: "Bengaluru" },
                { label: "State", value: "Karnataka" },
                { label: "Postal", value: "416445" },
                { label: "PAN", value: "ABERTGDSFS" },
                { label: "Contact", value: "Ramesh Yadav | +91 4352675849" },
              ]}
            />
            <InfoTable
              title="Consignee (Buyer)"
              rows={[
                { label: "Name", value: "Godrej" },
                { label: "Code", value: "dropcode-2" },
                { label: "Address", value: "Kumbena Agrahara Main Road, dsfbntntrn" },
                { label: "City", value: "Bengaluru" },
                { label: "State", value: "Karnataka" },
                { label: "Postal", value: "6641655" },
                { label: "GSTIN", value: "SDFEERFDEFRE432" },
                { label: "Contact", value: "Lavesh Kumar | +91 4352675849" },
              ]}
            />
          </div>

          {/* Insurance + Invoice */}
          <div className="double-grid">
            <InfoTable
              title="Insurance"
              rows={[
                { label: "Company", value: "LIC" },
                { label: "Policy#", value: "346346434" },
                { label: "Validity", value: "31/03/2025" },
                { label: "Amount", value: "₹ 1,000,000" },
                { label: "Risk", value: "Owner" },
                { label: "By", value: "Transporter" },
              ]}
            />
            <InfoTable
              title="Invoice Info"
              rows={[
                { label: "Invoice#", value: "EFBBTBEFB" },
                { label: "Date", value: "31/03/2025" },
                { label: "Cargo value", value: "₹ 500,000" },
                { label: "Insurance", value: "₹ 1,000,000" },
                { label: "Permit", value: "e-way bill" },
                { label: "Permit ref#", value: "234634634634" },
                { label: "Validity", value: "31/03/2025" },
              ]}
            />
          </div>

          {/* Payment + Cargo */}
          <div className="double-grid">
            <InfoTable
              title="Payment"
              rows={[
                { label: "Transport Charge (@800,000 / Shipment)", value: "₹ 8,000,000" },
                { label: "Labor charge", value: "₹ 5,000" },
                { label: "Documentation charge", value: "₹ 1,000" },
                { label: "Subtotal", value: "₹ 8,006,000" },
                { label: "CGST (5%)", value: "₹ 400,000" },
                { label: "SGST (5%)", value: "₹ 400,000" },
                { label: "Total tax", value: "₹ 800,000" },
                { label: "Advance paid", value: "₹ 100,000" },
                { label: "Net Payable", value: "₹ 8,806,000" },
              ]}
            />
            <InfoTable
              title="Payment & Cargo"
              rows={[
                { label: "Payment status", value: "Transporter" },
                { label: "Amount payable by", value: "Transporter" },
                { label: "Tax payable", value: "Transporter" },
                { label: "SAC/HSN", value: "SEFBEFB" },
                { label: "Net wt.", value: "10 KG" },
                { label: "Charge wt.", value: "20 KG" },
                { label: "Net vol.", value: "15 CBM" },
                { label: "Charge vol.", value: "25 CBM" },
              ]}
            />
          </div>

          {/* Commodity */}
          <InfoTable
            title="Commodity"
            headers={["Sr", "Commodity", "Description", "Package", "Qty"]}
            rows={[
              ["1", "Plastic", "Steel cargo covers", "Steel drums", "1,000"],
              ["2", "Iron", "Rust protector", "Steel drums", "5,000"],
              ["3", "Bricks", "Building blocks", "Steel drums", "6,000"],
            ]}
          />

          {/* Bank & Signatories */}
          <div className="double-grid">
            <InfoTable
              title="Bank Details"
              rows={[
                { label: "Bank", value: "Kotak" },
                { label: "Account #", value: "23542435525" },
                { label: "IFSC", value: "SFDBEBT43BDFB23" },
                { label: "UPI", value: "65478961345" },
                { label: "UPI Link", value: "fberber.com" },
              ]}
            />
            <div>
              <h4>Signatories</h4>
              <p>Driver Sign: __________ (Ramesh Kumar)</p>
              <p>Booking Officer: __________ (Dhiraj Kumar)</p>
              <p>Authorized: __________ (Raghav Patel)</p>
            </div>
          </div>

          {/* Terms */}
          <div className="terms">
            <b>Terms & Condition:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
            <div className="notice-caution">
              <div><b>Notice:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.</div>
              <div><b>Caution:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.</div>
            </div>
          </div>

          <div className="delivery">
            <table >
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
                  <td>
                  </td>
                  <td> Raghav Patel <br />
                    +91 7045737374 <br />
                    raghav.patel@yopmail.com <br />
                    department | designation </td>
                  <td> <br /> OTP VERIFIED <br />
                    01-04-2025 08:15 pm </td>
                </tr>
              </tbody>

            </table>
          </div>

          <p className="terms">Subjected to local (Pickup city) jurisdiction</p>
        </div>
      </div>

      <footer className="no-print">
        <p>© 2025 KMPH Logistics</p>
      </footer>
    </div>
  );
}
