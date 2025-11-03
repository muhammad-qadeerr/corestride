"use client";
import React from "react";
import Link from "next/link";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";

const FloatingMeetingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="https://calendar.app.google/vUGja5MThknGhY5A7" target="_blank" rel="noopener noreferrer">
        <ButtonSpot title="Book A Meeting" />
      </Link>
    </div>
  );
};

export default FloatingMeetingButton;


