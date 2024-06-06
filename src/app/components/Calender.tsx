"use client"
import React from 'react'
import {Calendar} from "@nextui-org/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";

function Calender() {
  return (
    <div>
      <Calendar
      aria-label="Date (Min Date Value)"
      defaultValue={today(getLocalTimeZone())}
      minValue={today(getLocalTimeZone())}
    />
    </div>
  )
}

export default Calender
