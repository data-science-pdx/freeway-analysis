import React, { useContext } from "react"
import { Context } from "./Context"
import Utils from "./Utils"
import {Col, Form} from "react-bootstrap";

const MIN_DATE = Utils.formatDate(new Date("2020-01-01"))
const MAX_DATE = Utils.formatDate(new Date("2100-12-31"))

export const Calendar = () => {
    const { startDate, setStartDate, endDate, setEndDate } = useContext(Context)

    return (
        <Form>
            <h3>Select Date Range</h3>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" id="startDate" name="trip-start"
                        value={startDate}
                        min={MIN_DATE} max={MAX_DATE}
                        onChange={(e) => { setStartDate(Utils.parseDate(e.currentTarget.value)) }}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label htmlFor="endDate">End date</Form.Label>
                    <Form.Control type="date" id="endDate" name="trip-end"
                        value={endDate}
                        min={MIN_DATE} max={MAX_DATE}
                        onChange={(e) => { setEndDate(Utils.parseDate(e.currentTarget.value)) }}
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}