import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";


const SortBy = ({ sort }) => {

    const [selectedValue, setSelectedValue] = useState("none");

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        sort(event.target.value)
    }
    return (
        <div className="sortByContainer">

            <FormControl >

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    label="Sort by"
                    onChange={handleChange}
                    className="sortBy"
                >
                    <MenuItem value={"none"}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"date"}>Date</MenuItem>
                    <MenuItem value={"views"}>Views</MenuItem>

                </Select>
            </FormControl>
        </div>
    )
}

export default SortBy
