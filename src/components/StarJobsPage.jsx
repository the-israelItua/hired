import React from "react"
import DeskStar from "./DeskStar"
import MobileStar from "./MobileStar"
import requireAuth from "../auth/requireAuth"

function StarJobsPage(){
    return(
        <>
        <DeskStar/>
        <MobileStar/>
        </>
    )
}

export default  requireAuth(StarJobsPage)