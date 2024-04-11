import React from "react";

const Paragraph = ({ paragraphs }) => {
    return (
        <div>
            {paragraphs.map((Paragraph, index) => (
                <p key={index} style={Paragraph.style}>
                    {Paragraph.content}
                </p>
            ))}
        </div>
    )
}

export default Paragraph;