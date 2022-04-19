import styled from "styled-components/macro";

// .msg {
//   padding-bottom: 2rem;
//   border-radius: 15px;
//   padding: 1rem 3rem;
//   background-color: #eef7ff33;
//   margin: 2rem 0;
// }

// .msg-sent {
//   color: rgb(255, 196, 86);
//   margin-left: 6rem;
// }

// .msg-received {
//   color: beige;
// }

// .msg-photo {
//   width: 4rem !important;
//   overflow: hidden;
//   border-radius: 50%;
// }

export const MgDiv = styled.div`
  display: grid;
  grid-template-columns: min-content minmax(10rem, 26rem);
  grid-column-gap: 1rem;
  margin: 1rem 0;

  ${(props) =>
    props.uid === false &&
    `
    justify-self: end;
    `}
`;

export const MsgParag = styled.p`
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 500;
  border-radius: 7px;
  padding: 0.81rem 1.5rem;
  background-color: #5f5f5f33;

  ${(props) =>
    props.uid === true &&
    `
      color: rgb(255, 196, 86);
    `}

  ${(props) =>
    props.uid === false &&
    `
    justi
      color: beige;
    `}
`;

export const MsgPhoto = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  overflow: hidden;
  border-radius: 50%;
`;
