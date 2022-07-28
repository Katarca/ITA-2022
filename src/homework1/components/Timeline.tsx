import { BodyTextDarkGrey, BodyTextGrey } from './typo/BodyText'
import { breakpoint, colors } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

const timelineData = [
  {
    year: '1995',
    info: 'JavaScript was invented by Brendan Eich',
  },
  {
    year: '1996',
    info: 'Netscape 2 was released with JavaScript 1.0',
  },
  {
    year: '1997',
    info: 'JavaScript became an ECMA standard (ECMA-262)',
  },
  {
    year: '1997',
    info: 'ECMAScript 1 was released',
  },
  {
    year: '1997',
    info: 'IE 4 was the first browser to support ES1',
  },
  {
    year: '1998',
    info: 'ECMAScript 2 was released',
  },
  {
    year: '1998',
    info: 'Netscape 42 was released with JavaScript 1.3',
  },
  {
    year: '1999',
    info: 'IE 5 was the first browser to support ES2',
  },
  {
    year: '1999',
    info: 'ECMAScript 3 was released',
  },
  {
    year: '2000',
    info: 'IE 5.5 was the first browser to support ES3',
  },
  {
    year: '2000',
    info: 'Netscape 62 was released with JavaScript 1.5',
  },
  {
    year: '2000',
    info: 'Firefox 1 was released with JavaScript 1.5',
  },
  {
    year: '2008',
    info: 'ECMAScript 4 was abandoned',
  },
  {
    year: '2009',
    info: 'ECMAScript 5 was released',
  },
  {
    year: '2011',
    info: 'IE 9 was the first browser to support ES5 *',
  },
  {
    year: '2011',
    info: 'Firefox 4 was released with JavaScript 1.8.5',
  },
  {
    year: '2012',
    info: 'Full support for ES5 in Safari 6',
  },
  {
    year: '2012',
    info: 'Full support for ES5 in IE 10',
  },
  {
    year: '2012',
    info: 'Full support for ES5 in Chrome 23',
  },
  {
    year: '2013',
    info: 'Full support for ES5 in Firefox 21',
  },
  {
    year: '2013',
    info: 'Full support for ES5 in Opera 15',
  },
  {
    year: '2014',
    info: 'Full support for ES5 in all browsers',
  },
  {
    year: '2015',
    info: 'ECMAScript 6 was released',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Chrome 51',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Opera 38',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Edge 14',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Safari 10',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Firefox 52',
  },
  {
    year: '2018',
    info: 'Full support for ES6 in all browsers **',
  },
]

export const Timeline = () => {
  return (
    <TimelineSection id='timeline'>
      <TimelineItems>
        {timelineData.map((data, i) => (
          <TimelineItem key={i}>
            <TimelineDot />
            <TimelineDate>
              <BodyTextDarkGrey>{data.year}</BodyTextDarkGrey>
            </TimelineDate>
            <TimelineContent>
              <BodyTextGrey>{data.info}</BodyTextGrey>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineItems>
    </TimelineSection>
  )
}

const TimelineSection = styled.section`
  min-height: 100vh;
  display: flex;
  background-color: ${colors.yellow300};
  padding: 120px 0 50px 0;
`

const TimelineItems = styled.div`
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
    ${breakpoint.tabletPortrait} {
      left: 7px;
    }
  }
`
const TimelineItem = styled.div`
  width: 100%;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:nth-child(odd) {
    padding-right: calc(50% + 30px);
    text-align: right;
    ${breakpoint.tabletPortrait} {
      padding-right: 0;
      text-align: left;
      padding-left: 37px;
    }
  }
  &:nth-child(even) {
    padding-left: calc(50% + 30px);
    ${breakpoint.tabletPortrait} {
      padding-left: 37px;
    }
  }
`

const TimelineDot = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${colors.black};
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  top: 10px;
  ${breakpoint.tabletPortrait} {
    left: 0;
  }
`
const TimelineDate = styled.div`
  color: ${colors.black};
  margin: 6px 0 15px;
`
const TimelineContent = styled.div`
  background-color: ${colors.grey500};
  padding: 20px;
`
