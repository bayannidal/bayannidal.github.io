import React from 'react'
import styled from 'styled-components'

function ProgressBar({ title, width, text }) {
    return (
        <ProgressBarStyle>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{ width: width }}></span>
                </div>
            </div>
        </ProgressBarStyle>
    )
}

const ProgressBarStyle = styled.div`
    .progress-bar{
      display:flex;
      align-items: center;
      .progress {
          position: relative;
          width: 100%;
          height: .4rem;
          background-color: var(--border-color);
      }
    }
`;
export default ProgressBar
