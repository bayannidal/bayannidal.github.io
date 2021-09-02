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
                        return <a href={blog.link} key={blog.id} target="_blank" rel="noreferrer" className={'blog-item'}>
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
        background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
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
