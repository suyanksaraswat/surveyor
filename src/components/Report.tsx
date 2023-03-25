import React, { useState } from "react";
import "./Report.css";

export function Report() {
  const element = document.getElementById("invoice");
  const [files, setFiles] = useState<any>([]);

  const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    const temp = [...files];
    temp.push(base64);
    setFiles([...temp]);
  };

  return (
    <>
      <input type="file" onChange={(e) => handleFileUpload(e)} />
      <button
        onClick={() => {
          //@ts-ignore
          html2pdf(element, {
            margin: [15, 15],
            filename: "pdfFileName.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 4, letterRendering: true },
            jsPDF: { unit: "pt", format: "letter", orientation: "portrait" },
            pagebreak: { mode: ["avoid-all", "css", "legacy"] },
          });
        }}
      >
        download
      </button>
      <div id="invoice" style={{ padding: "20px" }}>
        <table
          style={{
            width: "100%",
            border: "1px solid #000",
            fontSize: "16px !important",
          }}
        >
          <tbody>
            <tr>
              <td>
                <div
                  style={{
                    border: "1px solid #000",
                    marginBottom: 4,
                    padding: 4,
                  }}
                >
                  <h4 style={{ margin: 0 }}>REGISTRATION</h4>
                </div>
                <table style={{ width: "100%", border: "1px solid #000" }}>
                  <tbody>
                    <tr>
                      <td>Name of the RC owner</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Registration number </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Make / classification</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Chassis frame number </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Engine serial number </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Class of vehicle </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Type of body</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Seating capacity</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Road tax paid up to</td>
                      <td>: dafdf</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <div
                  style={{
                    border: "1px solid #000",
                    marginBottom: 4,
                    padding: 4,
                  }}
                >
                  <h4 style={{ margin: 0 }}>PERMIT</h4>
                </div>
                <table style={{ width: "100%", border: "1px solid #000" }}>
                  <tbody>
                    <tr>
                      <td>Name of the RC owner</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Registration number </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Make / classification</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Chassis frame number </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Engine serial number </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Class of vehicle </td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Type of body</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Seating capacity</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>: dafdf</td>
                    </tr>
                    <tr>
                      <td>Road tax paid up to</td>
                      <td>: dafdf</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <div
                  style={{
                    border: "1px solid #000",
                    marginBottom: 4,
                    padding: 4,
                  }}
                >
                  <h4 style={{ margin: 0 }}>PHOTOS</h4>
                </div>
                <table style={{ width: "100%", border: "1px solid #000" }}>
                  <tbody>
                    {files?.map((res: any, i: number) => (
                      <tr key={i}>
                        <td>
                          <img src={res} alt="" style={{ width: "600px" }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
