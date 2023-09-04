import styled from 'styled-components';

export interface GridProps {
  items: JSX.Element[];
  columns: number;
  /**
   * Because gap is still a new feature so some browsers don't support it, then (gap optional).
   */
  gap: string;
}

export const StyledGrid = styled.div<GridProps>` 
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.columns}, 0fr)`};
    grid-gap: ${(props) => props.gap};
`;