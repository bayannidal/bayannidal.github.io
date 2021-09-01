import styled from "styled-components";

export const MainLayout = styled.div`

padding: 5rem;
    @media screen and (max-width: 642px){
        padding: 4rem;
    }

    @media screen and (max-width: 571px){
        padding: 4rem 1rem;
    }
`;
export const InnerLayout = styled.div`
padding: 5rem 0;
@media screen and (max-width: 400px){
        padding: 2rem 0;
    }
`;
