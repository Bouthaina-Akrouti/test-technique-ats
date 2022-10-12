import React from "react";
import { Card } from 'antd'

const CardBottom = (title) => {
    return(
        <>
        <Card>
            
            <div>
                <p className="font-face-sb dark-color">{title.title}</p>
            </div>
        </Card>
        </>
    )
}

export default CardBottom;