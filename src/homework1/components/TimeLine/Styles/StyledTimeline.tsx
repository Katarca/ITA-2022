import { colors } from '../../../../helpers/consts'
import styled from 'styled-components'

export const TimelineItems = styled.div`
  max-width: 1000px;
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: ${colors.grey500};
    left: calc(50% - 1px);
  }
`
export const TimelineItem = styled.div`
  width: 100%;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:nth-child(odd) {
    padding-right: calc(50% + 30px);
    text-align: right;
  }
  &:nth-child(even) {
    padding-left: calc(50% + 30px);
  }
`

export const TimelineDot = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${colors.black};
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  top: 10px;
`
export const TimelineDate = styled.div`
  color: ${colors.black};
  margin: 6px 0 15px;
`
export const TimelineContent = styled.div`
  background-color: #2f363e;
  padding: 20px;
`
