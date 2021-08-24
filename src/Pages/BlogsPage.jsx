import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import blogs from '../data/blogs'
import { MainLayout, InnerLayout } from '../styles/Layouts'
function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyle>
                <Title title={'Blogs'} span={'blogs'} />
                <InnerLayout className={'blog'}>
                    {blogs.map(blog => {
                        return <a href={blog.link} key={blog.id} target="_blank" className={'blog-item'}>
                            <div className="image">
                                <img src={blog.img} alt="" />
                                <div className="title">
                                    <h4>
                                        {blog.title}
                                    </h4>
                                </div>
                            </div>
                        </a>
                    })}
                </InnerLayout>
            </BlogsStyle>
        </MainLayout>

    )
}
const BlogsStyle = styled.div`
    text-align: center;

    .blog {

        @media screen and (max-width:770px) {
        grid-template-columns: repeat(1,1fr);

        }
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        .blog-item {
            background-color: var(--background-dark-grey);
            padding: 2rem 1rem;
            border-radius: 10px;
            transition: ease-in-out .4s;
            overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

            &:hover{
                transform: rotate(-1deg) scale(1.02);
            }
        }

        .image {
            width: 100%;
            height: 95%;
            padding-bottom: .5rem;
            img {
                z-index: 9;
                position: relative;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

                width: 100%;
                height: 95%;
                object-fit: cover;
                border-radius: 10px;
                transition: ease-in-out .4s;

                &:hover {
                    transform: translateY(-5px);
                }
            }
        }
        .title {
            h4 {
                color: var(--white-color);
                font-size: 1.2rem;
                transition: ease-in-out .4s;
                z-index: 10;
                position: relative;
                &:hover {
                    color:var(--primary-color);
                }
            }
        }
    }
`;
export default BlogsPage
