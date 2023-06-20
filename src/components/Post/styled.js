import styled from "styled-components";

export const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 47rem;
  max-width: 100%;
  height: 20.875rem;
  max-height: 100%;
  background-color: var(--background);
  border-radius: var(--border-radius);

  & > header.post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--primary);
    height: var(--header-height);
    border-radius: var(--border-radius) var(--border-radius) 0 0;

    .header-title {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & h1 {
      color: var(--text-white);
      margin-left: 2.313rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .header-actions {
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 2.138rem;
      margin-right: 1.731rem;

      & button {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-white);
        height: 1.406rem;

        &:hover {
          color: var(--text-white-hover);
        }
      }
    }
  }

  & main {
    border-left: 1px solid var(--mid-gray);
    border-right: 1px solid var(--mid-gray);
    border-bottom: 1px solid var(--mid-gray);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    height: calc(var(--header-height) + 100%);
    padding: 1.5rem;

    & > header.post-content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 1rem;

      & > h2 {
        color: var(--mid-gray);
      }

      & > span {
        font-weight: 400;
        font-size: var(--size-md);
        line-height: 21px;
        color: var(--mid-gray);
      }
    }

    & > .post-content-text {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 10.25rem;
      overflow-y: auto;

      & > p {
        margin-bottom: 1rem;
        color: var(--text-black);
      }
    }
  }
`;
