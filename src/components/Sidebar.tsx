import { FilterList } from './FilterList';
import { UploadButton } from './UploadButton';
import React from 'react';
import styled from 'styled-components';

interface Props {
  mimeTypes?: Array<{ isActive: boolean; value: string }>;
  onMimeTypeClick: (value: string) => void;
  onTagClick: (value: string) => void;
  onUpload: (files: FileList) => void;
  tags?: Array<{ isActive: boolean; value: string }>;
}

const StyledContainer = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
`;

const StyledPartContainer = styled.div`
  padding: 40px;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 1em;
`;

export const Sidebar = ({ mimeTypes = [], onMimeTypeClick, onTagClick, onUpload, tags = [] }: Props) => (
  <StyledContainer>
    <StyledPartContainer>
      <StyledTitle>Filters</StyledTitle>
      <FilterList items={mimeTypes} iconType="file" onItemClick={onMimeTypeClick} />
      <FilterList items={tags} iconType="tag" onItemClick={onTagClick} />
    </StyledPartContainer>
    <StyledPartContainer>
      <UploadButton onUpload={onUpload} />
    </StyledPartContainer>
  </StyledContainer>
);
