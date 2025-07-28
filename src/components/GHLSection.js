import React from "react";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.webp";
const GHLSection = () => {
  return (
    <div className="bg-white px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
       
        <section className="py-16 flex flex-col items-center gap-10">
           <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            color: "#868686FF"
          }}
        >
          Ready to Launch Your{" "}
          <span style={{ color: "#e63946" }}>Winning Campaign?</span>
        </h2>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/qq8NiT2yZpnyUjrVtTXx"
            style={{
              width: "100%",
              height: "500px",
              border: "none",
              borderRadius: "3px",
            }}
            id="inline-qq8NiT2yZpnyUjrVtTXx"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Booking/Free Trial Form - Azhar Ogi"
            data-height="432"
            data-layout-iframe-id="inline-qq8NiT2yZpnyUjrVtTXx"
            data-form-id="qq8NiT2yZpnyUjrVtTXx"
            title="Booking/Free Trial Form - Azhar Ogi"
          ></iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </section>
      </div>
    </div>
  );
};

export default GHLSection;
