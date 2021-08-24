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
      p {
          padding-right:1.1rem ;
        }
      .progress {
          position: relative;
          width: 100%;
          height: .4rem;
          background-color: var(--border-color);
          border-radius: 10px;

          span {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

              position: absolute;
              left: 0;
              bottom: 0;
              height: 100%;
              background-color: var(--primary-color);
          border-radius: 10px;

          }
      }
    }
`;
export default ProgressBar
