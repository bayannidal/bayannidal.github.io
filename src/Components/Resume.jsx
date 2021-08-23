import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import SmallTitle from './SmallTitle';
import Title from './Title';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import ResumeItem from './ResumeItem';

function Resume() {
    const education = <SchoolRoundedIcon />
    return (
        <ResumeStyle>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={education} title={'Education'} />

                </div>
                <div className="resume-content">
                    <ResumeItem year={'2019 - 2020'}
                        title={'International Business and Management'}
                        subTitle={'Rotterdam Business School'}

                    />
                    <ResumeItem year={'2020 - Present'}
                        title={'Economics and International Affairs'}
                        subTitle={'Babes Bolyai University'}

                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={education} title={'Courses'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem year={'2019 - 2020'}
                        title={'Intro in IT'}
                        subTitle={'Informal School of It'}

                    />
                    <ResumeItem year={'2020 - Present'}
                        title={'Web Development (JavaScript)'}
                        subTitle={'Informal School of It'}

                    />
                </div>
            </InnerLayout>

        </ResumeStyle>
    )
}
const ResumeStyle = styled.section`
.small-title {
    padding-bottom: 3rem;
}

.u-small-title-margin {
    margin-top: 4rem;
}
.resume-content {
    border-left: 1px solid var(--border-color);
    border-radius: 10px;
}
`;
export default Resume
