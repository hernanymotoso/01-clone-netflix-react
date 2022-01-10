import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }
`;

export const CategoryMoviesArea = styled.div`
  display: flex;
  overflow-x: hidden;
  padding-left: 30px;
`;
export const CategoryMoviesContent = styled.div`
  display: flex;
`;
export const Movie = styled.div`
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`;
