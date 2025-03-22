import mongoose from "mongoose";

const CertificationSchema = new mongoose.Schema(
  {
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    income_certificate: { type: String, required: true },
    soil_test_report: { type: String, required: true },
    land_document: { type: String, required: true },
    certificate_pdf: { type: String, required: true },
    reg_no: { type: String, required: true },
    issue_date: { type: Date, default: Date.now },
    expiry_date: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.model("Certification", CertificationSchema);
