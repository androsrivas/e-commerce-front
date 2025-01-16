import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-section">
        <h4>Newsletter</h4>
        <div className="form-section">
          <Input />
          <Button>Suscríbete</Button>
        </div>
    </div>
  )
}

export default Newsletter