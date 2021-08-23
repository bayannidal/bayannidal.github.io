import styled from "styled-components";

export const MainLayout = styled.div`
padding: 5rem;
@media screen and (max-width:500px) {
    padding: 5rem;
    @media screen and (max-width: 642px) {
        padding: 4rem 2rem; 

    }
    @media screen and (max-width: 525px) {
        padding: 3rem 2rem; 

    }

}
`;
export const InnerLayout = styled.div`
padding: 5rem 0;

`;
