import styled from "styled-components";

export default function Button(props) {
  return <BasicButton>{props.content} </BasicButton>;
}

let BasicButton = styled.button`
  padding: 8px 12px;
  background-color: #f1f3f5;
  color: #495057;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  width: 100%;

  &:hover {
    background-color: #e9ecef;
    cursor: pointer;
  }
`;
